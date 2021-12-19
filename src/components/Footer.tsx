import NextLink from 'next/link'
import { Container, Flex, HStack, Link } from '@chakra-ui/react'
import { textColor } from '../constants'

const Footer = () => (
  <Flex as="footer" mt="auto" py="5" bg="#2c3440" w="full">
    <Container maxW="5xl">
      <HStack spacing="6">
        <NextLink href="/about" passHref>
          <Link color={textColor}>About</Link>
        </NextLink>

        <NextLink href="/pro" passHref>
          <Link color={textColor}>Pro</Link>
        </NextLink>

        <NextLink href="/welcome" passHref>
          <Link color={textColor}>Help</Link>
        </NextLink>

        <NextLink href="/terms-of-use" passHref>
          <Link color={textColor}>Terms</Link>
        </NextLink>

        <Link isExternal color={textColor} href="https://api.leveld.games">
          API
        </Link>

        <NextLink href="/contact" passHref>
          <Link color={textColor}>Contact</Link>
        </NextLink>
      </HStack>
    </Container>
  </Flex>
)

export default Footer
