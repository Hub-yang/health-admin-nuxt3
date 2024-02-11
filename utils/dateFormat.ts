import dayjs from 'dayjs'

export function getdateFormated(date, datetpye) {
  if (datetpye)
    return dayjs.unix(date).format('YYYY-MM-DD')
  return dayjs.unix(date).format('YYYY/M/D')
}
