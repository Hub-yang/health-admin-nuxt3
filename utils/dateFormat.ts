export type Cb = (date: number, datetpye?: string) => string

export function getdateFormated(date: number, datetpye?: string) {
  const dayjs = useDayjs()
  if (datetpye)
    return dayjs.unix(date).format('YYYY-MM-DD')
  return dayjs.unix(date).format('YYYY/M/D')
}
