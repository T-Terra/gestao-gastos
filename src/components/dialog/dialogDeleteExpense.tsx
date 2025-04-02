import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from '@/components/buttons/button'
import { useState } from "react"
import { DataTableInterface } from "@/interfaces/DataTableInterfaces"
import { useExpenses } from "@/contexts/expensesContext"

type props = {
    indexRow: number
    children: React.ReactNode
}

export default function DialogDeleteExpenses({ indexRow, children }: props) {
    const [isOpen, setOpen] = useState(false)
    const { expenses, setExpenses } = useExpenses()

    const getData = (): DataTableInterface[] => {
        const data = localStorage.getItem('expense') as string
        return JSON.parse(data); 
    }

    const deleteData = (index: number) => {
        let expenseArray: DataTableInterface[] = []
        const obj: DataTableInterface[] = getData()

        if (obj !== null) {
            const newObj = obj.reverse().filter((item, indexId) => indexId !== index)
            expenseArray = [...newObj.reverse()]
            localStorage.setItem('expense', JSON.stringify(expenseArray))
            setOpen(false)
            setExpenses(expenseArray)
        }
    }

    return (
        <div>
            <Dialog open={isOpen} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <div className="flex">
                        <Button 
                            style="p-2 flex gap-1"
                            onClick={() => {setOpen(true)}}
                            type="button"
                        >
                            {children}
                        </Button>
                    </div>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 text-gray-100 border-1 border-gray-700">
                    <DialogHeader>
                        <DialogTitle>Apagar Registro?</DialogTitle>
                        <DialogDescription>
                            Apaga o registro atual de despesa
                        </DialogDescription>
                    </DialogHeader>
                    <div className="w-[100px] py-2">
                        <Button 
                            style="bg-gray-800 p-3 rounded-3xl shadow-md flex gap-1 hover:bg-gray-700"
                            onClick={() => {deleteData(indexRow)}}
                            type="button"
                        >
                            {children}
                            Apagar
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}