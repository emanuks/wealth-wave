export interface IBusiness {
  id: number
  name: string
  totalAmount: {
    balance: number
    income: number
    outcome: number
  }
  totalRevenue: {
    total: number
    cost: number
    profit: number
  }
  financialData: FinancialData[]
  shareholders: ShareHolder[]
}

export interface ShareHolder {
  name: string
  equity: number
}
export interface FinancialData {
  revenue: {
    total: number
    cost: number
    profit: number
  }
  amount: {
    balance: number
    income: number
    outcome: number
  }
}

export interface BusinessContextType {
  business: IBusiness
  filterBusiness: (months: string[]) => void
}
