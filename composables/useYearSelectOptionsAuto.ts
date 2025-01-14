export function useYearSelectOptionsAuto(startYear: number = 2024) {
  startYear = +startYear
  const currentYear = new Date().getFullYear()
  const dateList = Array.from({ length: +currentYear - startYear + 1 }, (_, idx) => startYear + idx).sort((a, b) => b - a)
  const options = dateList.map(year => ({
    value: `${year}`,
    label: `${year}`,
  }))
  return {
    options,
  }
}
