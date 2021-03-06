import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = {
  // mono: `'Menlo', monospace`,
  heading: `'Inter', sans-serif`,
  body: `'Inter', sans-serif`,
  serif: `'Source Serif Pro', serif`,
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

const theme = extendTheme({
  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints,
  config,
})

export default theme
