import { createContext, useContext, useState } from "react"
import { DataTableInterface } from "@/interfaces/DataTableInterfaces";
import { CategoryInterface } from "@/interfaces/CategoryInterface"
import { ExpenseContextType } from "@/interfaces/contextsInterface";


const ExpenseContext = createContext<ExpenseContextType>({
    expenses: [],
    setExpenses: () => {}
})

export const ExpenseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [expenses, setExpenses] = useState<DataTableInterface[] | CategoryInterface[] | []>([])

    return (
        <ExpenseContext.Provider value={{ expenses, setExpenses }}>
            {children}
        </ExpenseContext.Provider>
    )
}

export const useExpenses = (): ExpenseContextType => useContext(ExpenseContext)