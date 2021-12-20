import Head from 'next/head'
import { useRouter } from 'next/router'
import { Container, Flex } from '@chakra-ui/react'
import { Footer, Navigation } from '../components'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const bg = router.asPath === '/' ? '#14181d' : undefined
  const bgGradient =
    router.asPath === '/'
      ? undefined
      : 'linear-gradient(to-b, #1d232a, #14181d)'

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Videogame Diary" />
        <meta name="og:title" content="Leveld" />
        <title>Leveld</title>
      </Head>

      <Flex
        bg={bg}
        bgGradient={bgGradient}
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
}
export default Layout
