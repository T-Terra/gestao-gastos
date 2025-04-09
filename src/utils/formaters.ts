import moment from "moment"

export const formatAmount = (value: string, typeCurrency = "BRL", locale = "pt-BR") => {
    const valueNumber = parseFloat(value)

    const valueFormatted = new Intl.NumberFormat(
        locale, 
        { style: "currency", currency: typeCurrency }
    ).format(valueNumber)

    return valueFormatted.toString()
}

export const converData = (data: string) => {
    return moment(data).format("DD/MM/YYYY HH:mm:ss")
}