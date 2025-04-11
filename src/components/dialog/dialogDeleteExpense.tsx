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
import { useExpenses } from "@/contexts/expensesContext"
import axios from "axios"

type props = {
    indexRow: number
    children: React.ReactNode
}

export default function DialogDeleteExpenses({ indexRow, children }: props) {
    const [isOpen, setOpen] = useState(false)
    const { expenses, setExpenses } = useExpenses()
    const apiUrl: string = import.meta.env.VITE_API_URL

    const deleteData = async (index: number) => {
        if (expenses !== null) {
            const filterExpense = expenses.reverse().filter((expense, indexId) => indexId === index)
            const expenseId = filterExpense[0]['id']
            const response = await axios.delete(`${apiUrl}/delete/${expenseId}`, {withCredentials: true})

            if (response.status === 200) { 
                // remove da listagem
                const newObjList = expenses.filter((item, indexId) => indexId !== index).reverse()
                setExpenses(newObjList)
            }
            setOpen(false)
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