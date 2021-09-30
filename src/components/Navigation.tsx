import NextLink from 'next/link'
import { SearchIcon } from '@chakra-ui/icons'
import {
  Flex,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Spacer,
} from '@chakra-ui/react'

const Navigation = () => (
  <Flex alignItems="center">
    <NextLink href="/">
      <Link>Leveld</Link>
    </NextLink>
    <Spacer />
    <HStack>
      <Link>Sign In</Link>
      <Link>Create Account</Link>
      <NextLink href="/games">
        <Link>Games</Link>
      </NextLink>
      <NextLink href="/lists">
        <Link>Lists</Link>
      </NextLink>
      <NextLink href="/members">
        <Link>Members</Link>
      </NextLink>
      <InputGroup maxW={150}>
        <Input />
        <InputRightElement>
          <SearchIcon />
        </InputRightElement>
      </InputGroup>
    </HStack>
  </Flex>
)

export default Navigation
