export const withVat = (value, vatBase = 24) => {
  return value * ((100 + vatBase) / 100)
}

export const withoutVat = (value, vatBase = 24) => {
  return value / ((100 + vatBase) / 100)
}

export const vatAmount = (value, vatBase = 24) => {
  return withVat(value, vatBase) - value
}
