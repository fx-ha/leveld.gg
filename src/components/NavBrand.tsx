import NextLink from 'next/link'
import NextImage from 'next/image'
import { Box, Link } from '@chakra-ui/react'
import logo from '../../public/logo.png'

const NavBrand = () => (
  <>
    <Box w="10" h="6" mr="2" zIndex="5">
      <NextLink href="/" passHref>
        <Link title="Home">
          <NextImage
            src={logo}
            width={1019}
            height={562}
            layout="responsive"
            alt="Logo"
            priority
          />
        </Link>
      </NextLink>
    </Box>

    <NextLink href="/" passHref>
      <Link
        zIndex="5"
        color="white"
        letterSpacing=".07692308em"
        textTransform="uppercase"
        fontWeight="bold"
        _hover={{ textDecoration: 'none' }}
      >
        Leveld
      </Link>
    </NextLink>
  </>
)

export default NavBrand
