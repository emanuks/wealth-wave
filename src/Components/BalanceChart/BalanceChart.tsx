import React, { useContext } from 'react'
import { BusinessContext } from '../../Context/BusinessContext/BusinessContext'
import { type BusinessContextType } from '../../Context/BusinessContext/BusinessContext.types'
import { numberToCurrency } from '../../Utils/numberFormatter'
import Chart from 'react-apexcharts'
import { Card, CardBody, CardHeader, Flex, Text } from '@chakra-ui/react'

const BalanceChart = (): JSX.Element => {
  const { business } = useContext(BusinessContext) as BusinessContextType

  const data = {
    series: [
      {
        name: 'Balance',
        data:
          business.financialData.map(financialData => financialData.amount.balance)
      },
      {
        name: 'Income',
        data:
          business.financialData.map(financialData => financialData.amount.income)
      },
      {
        name: 'Outcome',
        data:
          business.financialData.map(financialData => financialData.amount.outcome)
      }
    ],
    options: {
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '65%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yaxis: {
        title: {
          text: '$'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: (val: number) => numberToCurrency(val)
        }
      }
    }
  }

  return (
    <Card>
      <CardHeader>
        <Text size='lg' fontWeight='bold'>Monthly Balance</Text>
      </CardHeader>
      <CardBody>
        <Flex justify='center' align='center'>
          <Chart
            options={data.options}
            series={data.series}
            type="bar"
            width="450"
          />
        </Flex>
      </CardBody>
    </Card>
  )
}

export default BalanceChart
