import { extendTheme } from '@chakra-ui/react'

const Theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'gray.200'
      }
    }
  },
  base: '0em',
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em'
})

export default Theme
