export interface DataTableInterface {
    name: string
    amount: string
    description: string
    category: string
    dataTime: string
}

export interface SetStateInterface {
    setState: (dataArr: DataTableInterface[]) => void
}