import { round } from '../../Utils/numberFormatter'
import { type IBusiness } from './BusinessContext.types'

export const businessMockup: IBusiness = {
  id: 1,
  name: 'Nigma Biz',
  totalAmount: {
    balance: round(2110000, 12),
    income: round(1200000, 12),
    outcome: round(890000, 12)
  },
  totalRevenue: {
    total: 1200000,
    cost: 890000,
    profit: 310000
  },
  shareholders: [
    {
      name: 'Quantum Innovations Holdings, Inc.',
      equity: 14
    },
    {
      name: 'Stellar Ventures Group, LLC',
      equity: 12
    },
    {
      name: 'Horizon Capital Enterprises, Ltd.',
      equity: 18
    },
    {
      name: 'Nigma Biz',
      equity: 56
    }
  ],
  financialData: [
    {
      revenue: {
        total: 100000,
        cost: 60000,
        profit: 40000
      },
      amount: {
        balance: 40000,
        income: 100000,
        outcome: 60000
      }
    },
    {
      revenue: {
        total: 100000,
        cost: 70000,
        profit: 30000
      },
      amount: {
        balance: 70000,
        income: 100000,
        outcome: 70000
      }
    },
    {
      revenue: {
        total: 100000,
        cost: 70000,
        profit: 30000
      },
      amount: {
        balance: 100000,
        income: 100000,
        outcome: 70000
      }
    },
    {
      revenue: {
        total: 100000,
        cost: 80000,
        profit: 20000
      },
      amount: {
        balance: 120000,
        income: 100000,
        outcome: 80000
      }
    },
    {
      revenue: {
        total: 100000,
        cost: 90000,
        profit: 10000
      },
      amount: {
        balance: 130000,
        income: 100000,
        outcome: 90000
      }
    },
    {
      revenue: {
        total: 100000,
        cost: 60000,
        profit: 40000
      },
      amount: {
        balance: 170000,
        income: 100000,
        outcome: 60000
      }
    },
    {
      revenue: {
        total: 100000,
        cost: 80000,
        profit: 20000
      },
      amount: {
        balance: 190000,
        income: 100000,
        outcome: 80000
      }
    },
    {
      revenue: {
        total: 100000,
        cost: 90000,
        profit: 10000
      },
      amount: {
        balance: 200000,
        income: 100000,
        outcome: 90000
      }
    },
    {
      revenue: {
        total: 100000,
        cost: 70000,
        profit: 30000
      },
      amount: {
        balance: 230000,
        income: 100000,
        outcome: 70000
      }
    },
    {
      revenue: {
        total: 100000,
        cost: 80000,
        profit: 20000
      },
      amount: {
        balance: 250000,
        income: 100000,
        outcome: 80000
      }
    },
    {
      revenue: {
        total: 100000,
        cost: 50000,
        profit: 50000
      },
      amount: {
        balance: 300000,
        income: 100000,
        outcome: 50000
      }
    },
    {
      revenue: {
        total: 100000,
        cost: 90000,
        profit: 10000
      },
      amount: {
        balance: 310000,
        income: 100000,
        outcome: 90000
      }
    }
  ]
}
