import React, { useContext } from 'react'
import { BusinessContext } from '../../Context/BusinessContext/BusinessContext'
import { type BusinessContextType } from '../../Context/BusinessContext/BusinessContext.types'
import Chart from 'react-apexcharts'
import { Card, CardBody, CardHeader, Flex, Text } from '@chakra-ui/react'

const RevenueChart = (): JSX.Element => {
  const { business } = useContext(BusinessContext) as BusinessContextType

  const data = {
    series: [business.totalRevenue.cost, business.totalRevenue.profit],
    options: {
      labels: ['Cost', 'Profit']
    }
  }

  return (
    <Card>
      <CardHeader>
        <Text size='lg' fontWeight='bold'>Total Revenue</Text>
      </CardHeader>
      <CardBody>
        <Flex justify='center' align='center'>
          <Chart
            options={data.options}
            series={data.series}
            type="donut"
            width="411"
          />
        </Flex>
      </CardBody>
    </Card>
  )
}

export default RevenueChart
