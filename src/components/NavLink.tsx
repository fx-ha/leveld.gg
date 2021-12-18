import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Link } from '@chakra-ui/react'

const NavLink = ({ href, title }: { href: string; title: string }) => {
  const router = useRouter()
  const color = router.asPath === href ? 'white' : '#d8e0e8'
  const fontWeight = router.asPath === href ? 'bold' : 'normal'

  return (
    <NextLink href={href} passHref>
      <Link
        color={color}
        fontSize="smaller"
        letterSpacing=".07692308em"
        textTransform="uppercase"
        fontWeight={fontWeight}
        _hover={{ textDecoration: 'none', color: 'white' }}
      >
        {title}
      </Link>
    </NextLink>
  )
}

export default NavLink
