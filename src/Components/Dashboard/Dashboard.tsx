import React from 'react'
import AmountCard from '../AmountCard'
import { Grid, GridItem, Stack } from '@chakra-ui/react'
import BusinessProvider from '../../Context/BusinessContext/BusinessContext'
import BalanceChart from '../BalanceChart'
import RevenueChart from '../RevenueChart'
import ShareholdersChart from '../ShareholdersChart'

const Dashboard = (): JSX.Element => {
  return (
    <Stack
      justify='center'
      align='center'
      h='80vh'
      w='90%'
    >
      <Grid
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(4, 1fr)'
        gap={4}
      >
        <BusinessProvider>
          <GridItem colSpan={1}>
            <AmountCard />
          </GridItem>
          <GridItem colSpan={3}>
            <BalanceChart />

          </GridItem>
          <GridItem colSpan={2}>
            <RevenueChart />
          </GridItem>
          <GridItem colSpan={2}>
            <ShareholdersChart />
          </GridItem>
        </BusinessProvider>
      </Grid>
    </Stack>
  )
}

export default Dashboard
