export function useYearSelectOptionsAuto(startYear: number = 2022) {
  startYear = +startYear
  const year = useDateFormat(useNow(), 'YYYY')
  const dateList = Array.from({ length: +year.value - startYear + 1 }, (_, idx) => startYear + idx).sort((a, b) => b - a)
  const options = dateList.map(year => ({
    value: `${year}`,
    label: `${year}`,
  }))
  return {
    year,
    options,
  }
}
