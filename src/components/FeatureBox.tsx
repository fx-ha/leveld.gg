import NextLink from 'next/link'
import { useState } from 'react'
import { Box, Flex, Link } from '@chakra-ui/react'
import { buttonTextColor, iconColor } from '../constants'

const FeatureBox = ({
  href,
  text,
  backgroundColor,
  children,
}: {
  href: string
  text: string
  backgroundColor: string
  children: React.ReactNode
}) => {
  const [color, setColor] = useState({ icon: iconColor, text: buttonTextColor })

  return (
    <NextLink href={href} passHref>
      <Link _hover={{ textDecoration: 'none' }}>
        <Flex
          bg="#456"
          _hover={{ backgroundColor, color: '#fff' }}
          textAlign="left"
          p="5"
          borderRadius="3px"
          height="100%"
          onMouseEnter={() => setColor({ icon: '#fff', text: '#fff' })}
          onMouseLeave={() =>
            setColor({ icon: iconColor, text: buttonTextColor })
          }
        >
          <Box mr="5" color={color.icon}>
            {children}
          </Box>
          <Box color={color.text}>{text}</Box>
        </Flex>
      </Link>
    </NextLink>
  )
}

export default FeatureBox
