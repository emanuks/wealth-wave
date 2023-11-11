export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

const monthIndexes: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11
}

export const monthToIndex = (month: string): number => monthIndexes[month]

export const monthsToIndex = (_months: string[]): number[] => _months.map((month) => monthIndexes[month])

export const indexToMonth = (index: number): string => months[index]
