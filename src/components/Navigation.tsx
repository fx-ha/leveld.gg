import { SearchIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Spacer,
} from '@chakra-ui/react'
import { NavBrand, NavLink } from '.'

const Navigation = () => (
  <Box py="5" mb="10" bg="#14181c" w="full">
    <Container maxW="5xl">
      <Flex as="nav" alignItems="center">
        <NavBrand />

        <Spacer />

        <HStack spacing={5}>
          <Link
            color="#d8e0e8"
            fontSize="smaller"
            letterSpacing=".07692308em"
            textTransform="uppercase"
            _hover={{ textDecoration: 'none', color: '#fff' }}
          >
            Sign In
          </Link>

          <Link
            color="#d8e0e8"
            fontSize="smaller"
            letterSpacing=".07692308em"
            textTransform="uppercase"
            _hover={{ textDecoration: 'none', color: '#fff' }}
          >
            Create Account
          </Link>

          <NavLink href="/games" title="Games" />

          <NavLink href="/lists" title="Lists" />

          <NavLink href="/members" title="Members" />

          <InputGroup size="sm" maxW={150}>
            <Input
              borderRadius="3xl"
              background="#2c3440"
              borderColor="#2c3440"
            />

            <InputRightElement>
              <SearchIcon color="#718192" />
            </InputRightElement>
          </InputGroup>
        </HStack>
      </Flex>
    </Container>
  </Box>
)

export default Navigation
