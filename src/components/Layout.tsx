import Head from 'next/head'
import { Container, Flex } from '@chakra-ui/react'
import { Footer, Navigation } from '../components'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Videogame Diary" />
      <meta name="og:title" content="Leveld" />
      <title>Leveld</title>
    </Head>

    <Flex
      bgGradient="linear-gradient(to-b, #1d232a, #14181c)"
      color="white"
      alignItems="center"
      direction="column"
      minH="100vh"
    >
      <Navigation />

      <Container as="main" maxW="5xl" mb="10">
        {children}
      </Container>

      <Footer />
    </Flex>
  </>
)

export default Layout
