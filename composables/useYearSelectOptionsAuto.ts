export function useYearSelectOptionsAuto(startYear: number = 2022) {
  startYear = +startYear
  const currentYear = useDateFormat(useNow(), 'YYYY')
  useState('year', () => currentYear.value)
  const dateList = Array.from({ length: +currentYear.value - startYear + 1 }, (_, idx) => startYear + idx).sort((a, b) => b - a)
  const options = dateList.map(year => ({
    value: `${year}`,
    label: `${year}`,
  }))
  return {
    options,
  }
}
