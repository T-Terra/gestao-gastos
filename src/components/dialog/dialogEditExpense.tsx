import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { 
    SaveIcon
} from 'lucide-react'

import { Textarea } from "@/components/ui/textarea"
import ComboBoxExpenses from "../combobox/comboboxExpenses"
import { Button } from '@/components/buttons/button'
import { Input } from "../ui/input"
import { useState, useEffect } from "react"
import { DataTableInterface } from "@/interfaces/DataTableInterfaces"
import { CategoryInterface } from "@/interfaces/CategoryInterface"
import { useExpenses } from "@/contexts/expensesContext"
import { ShowToastSuccess, ShowToastError } from "../toast/toastFunctions"
import axios from "axios"

type props = {
    indexRow: number
    children: React.ReactNode
}

export default function DialogEditExpenses({ indexRow, children }: props) {
    const [isOpen, setOpen] = useState(false)
    const [category, setCategory] = useState("")
    const { expenses, setExpenses } = useExpenses()
    const [ expensesLocal, setExpensesLocal ] = useState<(DataTableInterface | CategoryInterface)[]>([])
    const [formData, setFormData] = useState({
        NameExpense: "",
        AmountExpense: "",
        DescriptionExpense: "",
        CategoryExpense: ""
    })

    useEffect(() => {
        const arr = [...expenses]
        setExpensesLocal(arr.reverse())
    }, [])

    const setData = () => {
        const filterExpense = expensesLocal.filter((expense, indexId) => indexId === indexRow)

        setFormData({
            NameExpense: filterExpense[0]['nameExpense'],
            AmountExpense: filterExpense[0]['amountExpense'],
            DescriptionExpense: filterExpense[0]['descriptionExpense'],
            CategoryExpense: filterExpense[0]['categoryExpense']
        })
        setCategory(filterExpense[0]['categoryExpense'])
    }

    const apiUrl: string = import.meta.env.VITE_API_URL

    const saveData = async (expense: DataTableInterface, index: number) => {
        if (expense.NameExpense === "" && expense.AmountExpense == "") {
            alert("Campos vazios não foi possível salvar")
        } else {
            const filterExpense = expenses.reverse().filter((expense, indexId) => indexId === index)
            const expenseId = filterExpense[0]['id']

            const response = await axios.put(`${apiUrl}/update/${expenseId}`, JSON.stringify(expense), {
                headers: {"Content-Type": "application/json"},
                withCredentials: true
            })

            if (response.status === 200) {
                const EditedExpense = response.data
                setExpenses(prev => 
                    Array.isArray(prev) 
                    ? prev.map(expense => expense.id === EditedExpense.id ? EditedExpense : expense).reverse() 
                    : [])
                ShowToastSuccess("Editado com sucesso!")
            } else {
                ShowToastError(`Erro ao editar! code: ${response.status}`)
            }
            setCategory("")
        }
    }

    const getDataForm = (formData: FormData) => {
        const name = formData.get("name") as string
        const amount = formData.get("amount") as string 
        const description = formData.get("description") as string

        const expense: DataTableInterface = {
            "NameExpense": name,
            "AmountExpense": amount,
            "DescriptionExpense": description,
            "categoryId": category['id'],
        }
        
        saveData(expense, indexRow)
    }

    return (
        <div>
            <Dialog open={isOpen} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <div className="flex">
                        <Button 
                            style="p-2 flex gap-1"
                            onClick={() => {setData()}}
                            type="button"
                        >
                            {children}
                        </Button>
                    </div>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 text-gray-100 border-1 border-gray-700">
                    <DialogHeader>
                        <DialogTitle>Editar Despesa</DialogTitle>
                        <DialogDescription>
                            Edita uma despesa
                        </DialogDescription>
                    </DialogHeader>
                    <form action={getDataForm}>
                        <div className="flex flex-col gap-10 items-end">
                            <div className="w-full flex flex-col gap-4">
                                <label>Nome da Despesa</label>
                                <Input className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" name="name" type="text" placeholder="Internet, Conta de Luz..." value={formData.NameExpense} 
                                onChange={(e) => setFormData({...formData, NameExpense: e.target.value})}/>

                                <label>Valor da Despesa</label>
                                <div className="flex items-center gap-1">
                                    <span className="font-semibold">R$</span>
                                    <Input className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" name="amount" type="number" placeholder="R$100,00" step="any" 
                                    value={formData.AmountExpense}
                                    onChange={(e) => setFormData({...formData, AmountExpense: e.target.value})}/>
                                </div>
                                <label>Descrição</label>
                                <Textarea name="description" placeholder="Descrição da despesa" 
                                value={formData.DescriptionExpense}
                                onChange={(e) => setFormData({...formData, DescriptionExpense: e.target.value})}/>
                                <label>Categoria</label>
                                <ComboBoxExpenses setState={setCategory} editCategory={category}/>
                            </div>
                            <div className="w-[100px] py-2">
                                <Button 
                                    style="bg-gray-800 p-3 rounded-3xl shadow-md flex gap-1 hover:bg-gray-700"
                                    onClick={() => {setOpen(false)}}
                                    type="submit"
                                >
                                    <SaveIcon/>
                                    Salvar
                                </Button>
                            </div>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}