import React from 'react'
import {
  ChakraProvider,
  VStack
} from '@chakra-ui/react'
import Dashboard from './Components/Dashboard'
import Theme from './Components/Theme'

export const App = (): JSX.Element => (
  <ChakraProvider theme={Theme}>
    <VStack minH="100vh" minW="100vw" p={3} justify='space-around'>
      <Dashboard />
    </VStack>
  </ChakraProvider>
)
