export interface DataTableInterface {
    name: string
    amount: string
    description: string
    category: string
}

export interface SetStateInterface {
    setState: (dataArr: DataTableInterface[]) => void
}