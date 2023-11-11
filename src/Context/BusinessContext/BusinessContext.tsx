import React, { useState, createContext } from 'react'
import { type BusinessContextType, type IBusiness } from './BusinessContext.types'
import { businessMockup } from './BusinessMockup'
import { round } from '../../Utils/numberFormatter'
import { monthsToIndex } from '../../Utils/monthConverter'

export const BusinessContext = createContext<BusinessContextType | null>(null)

interface BusinessProviderProps {
  children: string | JSX.Element | JSX.Element[]
}

const BusinessProvider = ({ children }: BusinessProviderProps): JSX.Element => {
  const [business, setBusiness] = useState<IBusiness>(businessMockup)

  const filterBusiness = (months: string[]): void => {
    const monthsIndexes = monthsToIndex(months)

    const filteredFinancialData = [...businessMockup.financialData.filter((_, index) => index >= monthsIndexes[0] && index <= monthsIndexes[1])]

    const totalRevenue = {
      total: filteredFinancialData.reduce((acc, cur) => acc + cur.revenue.total, 0),
      cost: filteredFinancialData.reduce((acc, cur) => acc + cur.revenue.cost, 0),
      profit: filteredFinancialData.reduce((acc, cur) => acc + cur.revenue.profit, 0)
    }

    const monthQuantity = monthsIndexes[1] - monthsIndexes[0] + 1

    const totalAmount = {
      balance: round(filteredFinancialData.reduce((acc, cur) => acc + cur.amount.balance, 0), monthQuantity),
      income: round(filteredFinancialData.reduce((acc, cur) => acc + cur.amount.income, 0), monthQuantity),
      outcome: round(filteredFinancialData.reduce((acc, cur) => acc + cur.amount.outcome, 0), monthQuantity)
    }

    const filteredBusiness = {
      ...business,
      financialData: filteredFinancialData,
      totalAmount,
      totalRevenue
    }

    setBusiness(filteredBusiness)
  }

  return (
    <BusinessContext.Provider value={{ business, filterBusiness }}>
      {children}
    </BusinessContext.Provider>
  )
}

export default BusinessProvider
