export const formatAmount = (value: string, typeCurrency = "BRL", locale = "pt-BR") => {
    const valueNumber = parseInt(value)

    const valueFormatted = new Intl.NumberFormat(
        locale, 
        { style: "currency", currency: typeCurrency }
    ).format(valueNumber)

    return valueFormatted.toString()
}