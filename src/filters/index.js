export const decimal = (value, count = 2) => {
  if (!Number.isFinite(value)) {
    return ''
  }

  return parseFloat(value).toFixed(count)
}

export const money = (value, currency = '€') => {
  return decimal(value, 2) + ' ' + currency
}
