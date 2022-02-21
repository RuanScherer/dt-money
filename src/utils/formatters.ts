export const formatCurrencyUSD = (value: number) => {
  const formattedValue = new Intl
    .NumberFormat(
      'pt-BR', 
      {
        style: 'currency',
        minimumFractionDigits: 0,
        currency: 'USD'
      }
    )
    .format(value)
    .substring(4) // remove currency symbol

  return `$ ${formattedValue}`
}
