import React, { useContext } from 'react'
import { BusinessContext } from '../../Context/BusinessContext/BusinessContext'
import { type BusinessContextType } from '../../Context/BusinessContext/BusinessContext.types'
import Chart from 'react-apexcharts'
import { Card, CardBody, CardHeader, Flex, Text } from '@chakra-ui/react'

const ShareholdersChart = (): JSX.Element => {
  const { business } = useContext(BusinessContext) as BusinessContextType

  const data = {
    series: [{
      data: business.shareholders.map(shareholder => shareholder.equity)
    }],
    options: {
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: business.shareholders.map(shareholder => shareholder.name)
      },
      yaxis: {
        tickAmount: 10,
        min: 0,
        max: 100
      },
      tooltip: {
        y: {
          formatter: (val: number) => `${val}%`,
          title: {
            formatter: () => 'Equity'
          }
        }
      }
    }
  }

  return (
    <Card>
      <CardHeader>
        <Text size='lg' fontWeight='bold'>Shareholders Equity</Text>
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
    </Card >
  )
}

export default ShareholdersChart
