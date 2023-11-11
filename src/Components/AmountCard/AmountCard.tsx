import React, { useContext } from 'react'
import {
  Card,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack
} from '@chakra-ui/react'
import AmountCardBody from '../AmountCardBody'
import { BusinessContext } from '../../Context/BusinessContext/BusinessContext'
import { type BusinessContextType } from '../../Context/BusinessContext/BusinessContext.types'
import { numberToCurrency } from '../../Utils/numberFormatter'

const AmountCard = (): JSX.Element => {
  const { business } = useContext(BusinessContext) as BusinessContextType

  return (
    <Card p='4' w='20rem' h='25rem'>
      <Tabs h='100%' colorScheme='purple'>
        <VStack justify='space-between' align='flex-start' h='100%'>
          <TabList>
            <Tab>Balance</Tab>
            <Tab>In</Tab>
            <Tab>Out</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <AmountCardBody title="Average Monthly Balance" value={numberToCurrency(business.totalAmount.balance)} />
            </TabPanel>
            <TabPanel>
              <AmountCardBody title="Average Monthly Income" value={numberToCurrency(business.totalAmount.income)} />
            </TabPanel>
            <TabPanel>
              <AmountCardBody title="Average Monthly Outcome" value={numberToCurrency(business.totalAmount.outcome)} />
            </TabPanel>
          </TabPanels>
        </VStack>
      </Tabs>
    </Card>
  )
}

export default AmountCard
