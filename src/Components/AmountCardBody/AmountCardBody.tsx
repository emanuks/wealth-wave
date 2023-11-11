import { CardBody, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'

interface AmountCardBodyProps {
  title: string
  value: string
}

const AmountCardBody = ({ title, value }: AmountCardBodyProps): JSX.Element => {
  return (
    <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
        <Text fontSize='xl' fontWeight='bold'>
          {title}
        </Text>
        <Text fontSize='xl'>
          {value}
        </Text>
      </Stack>
    </CardBody>
  )
}

export default AmountCardBody
