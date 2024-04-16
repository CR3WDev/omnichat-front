export const useFormatCurrency = (number: number | string) => {
  if (!number) return undefined

  if (number.toString().includes(',')) number = number.toString().replace(',', '.')
  console.log(number)
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
    .format(Number(number))
    .toString()
}
