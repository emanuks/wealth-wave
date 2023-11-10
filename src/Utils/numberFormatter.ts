export const round = (number: number, quantity: number): number => (
  +(Math.round(number / quantity * 100) / 100).toFixed(2)
)

export const numberToCurrency = (number: number): string => (
  `$${number}`
)
