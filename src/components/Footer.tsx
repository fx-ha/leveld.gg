import NextLink from 'next/link'
import { Flex, HStack, Link } from '@chakra-ui/react'

const Footer = () => (
  <Flex>
    <HStack>
      <NextLink href="/about">
        <Link>About</Link>
      </NextLink>
      <NextLink href="/pro">
        <Link>Pro</Link>
      </NextLink>
      <NextLink href="/welcome">
        <Link>Help</Link>
      </NextLink>
      <NextLink href="/terms-of-use">
        <Link>Terms</Link>
      </NextLink>
      <NextLink href="/contact">
        <Link>Contact</Link>
      </NextLink>
    </HStack>
  </Flex>
)

export default Footer
