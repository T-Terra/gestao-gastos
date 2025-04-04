import { DataTableInterface } from "./DataTableInterfaces"
import { CategoryInterface } from "./CategoryInterface"

export interface ExpenseContextType {
    expenses: DataTableInterface[] | CategoryInterface[] | []
    setExpenses: React.Dispatch<React.SetStateAction<DataTableInterface[] | CategoryInterface[] | Promise<DataTableInterface[]> | []>>
}