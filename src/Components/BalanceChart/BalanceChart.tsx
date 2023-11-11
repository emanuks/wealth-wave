import React, { useContext, useState } from 'react'
import { BusinessContext } from '../../Context/BusinessContext/BusinessContext'
import { type BusinessContextType } from '../../Context/BusinessContext/BusinessContext.types'
import { numberToCurrency } from '../../Utils/numberFormatter'
import Chart from 'react-apexcharts'
import { Card, CardBody, CardHeader, Flex, HStack, Select, Text } from '@chakra-ui/react'
import { months, monthToIndex } from '../../Utils/monthConverter'

const BalanceChart = (): JSX.Element => {
  const { business, filterBusiness } = useContext(BusinessContext) as BusinessContextType
  const [startDate, setStartDate] = useState<string>('Jan')
  const [endDate, setEndDate] = useState<string>('Dec')

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
        categories: months.filter((_, index) => index >= monthToIndex(startDate) && index <= monthToIndex(endDate))
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

  const handleStartDate = (date: string): void => {
    filterBusiness([date, endDate])
    setStartDate(date)
  }

  const handleEndDate = (date: string): void => {
    filterBusiness([startDate, date])
    setEndDate(date)
  }

  return (
    <Card>
      <CardHeader>
        <HStack justify='space-between'>
          <Text size='lg' fontWeight='bold'>Monthly Balance</Text>
          <HStack spacing={8}>
            <HStack spacing={2}>
              <Text fontSize='sm' fontWeight='bold'>From:</Text>
              <Select
                defaultValue={startDate}
                variant='filled'
                onChange={(e) => { handleStartDate(e.target.value) }}
              >
                {months.filter((_, index) => index <= monthToIndex(endDate)).map(month =>
                  <option key={month} value={month}>{month}</option>
                )}
              </Select>
            </HStack>
            <HStack spacing={2}>
              <Text fontSize='sm' fontWeight='bold'>To:</Text>
              <Select
                defaultValue={endDate}
                variant='filled'
                onChange={(e) => { handleEndDate(e.target.value) }}
              >
                {months.filter((_, index) => index >= monthToIndex(startDate)).map(month =>
                  <option key={month} value={month}>{month}</option>
                )}
              </Select>
            </HStack>
          </HStack>
        </HStack>
      </CardHeader>
      <CardBody>
        <Flex justify='center' align='center'>
          <Chart
            options={data.options}
            series={data.series}
            type="bar"
            width="428"
          />
        </Flex>
      </CardBody>
    </Card>
  )
}

export default BalanceChart
