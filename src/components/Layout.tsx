import Head from 'next/head'
import { Box, useColorMode } from '@chakra-ui/react'
import { Footer, Navigation } from '../components'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.50', dark: 'gray.900' }
  const color = { light: 'black', dark: 'white' }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Letterboxd for Games" />
        <meta name="og:title" content="Leveld" />
        <title>Leveld</title>
      </Head>

      <Box bg={bgColor[colorMode]} color={color[colorMode]}>
        <Navigation />

        {children}

        <Footer />
      </Box>
    </>
  )
}

export default Layout
