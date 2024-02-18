import dayjs from 'dayjs'

export function getdateFormated(date: number, datetpye?: string) {
  if (datetpye)
    return dayjs.unix(date).format('YYYY-MM-DD')
  return dayjs.unix(date).format('YYYY/M/D')
}
