import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { 
    Plus
} from 'lucide-react'

import { Textarea } from "@/components/ui/textarea"
import ComboBoxExpenses from "../combobox/comboboxExpenses"
import { Button } from '@/components/buttons/button'
import { Input } from "../ui/input"
import { useState } from "react"
import { DataTableInterface } from "@/interfaces/DataTableInterfaces"
import { useExpenses } from "@/contexts/expensesContext"
import axios from "axios"


export default function DialogExpenses() {
    const [isOpen, setOpen] = useState(false)
    const [category, setCategory] = useState("")
    const { expenses, setExpenses } = useExpenses() 

    const apiUrl: string = import.meta.env.VITE_API_URL

    const saveData = async (expense: DataTableInterface) => {
        if (expense.NameExpense === "" && expense.AmountExpense == "") {
            alert("Campos vazios não foi possível salvar")
        } else {
            const response = await axios.post(`${apiUrl}/add`, JSON.stringify(expense), {
                headers: {"Content-Type": "application/json"},
                withCredentials: true
            })

            if (response.status === 201) {
                const newExpense = response.data
                setExpenses(prev => Array.isArray(prev) ? [...prev, newExpense] : [newExpense])
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
            "CategoryExpense": category
        }

        saveData(expense)
    }

    return (
        <div>
            <Dialog open={isOpen} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <div className="flex">
                        <Button 
                            style="bg-gray-800 lg:p-4 p-2 lg:text-[15px] text-[12px] rounded-3xl shadow-lg flex gap-1 hover:bg-gray-700"
                            onClick={() => {setOpen(true)}}
                            type="button"
                        >
                            <Plus />
                            Nova despesa
                        </Button>
                    </div>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 text-gray-100 border-1 border-gray-700">
                    <DialogHeader>
                        <DialogTitle>Adicionar Nova Despesa</DialogTitle>
                        <DialogDescription>
                            Adiciona uma nova despesa
                        </DialogDescription>
                    </DialogHeader>
                    <form action={getDataForm}>
                        <div className="flex flex-col gap-10 items-end">
                            <div className="w-full flex flex-col gap-4">
                                <label>Nome da Despesa</label>
                                <Input className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" name="name" type="text" placeholder="Internet, Conta de Luz..."/>

                                <label>Valor da Despesa</label>
                                <div className="flex items-center gap-1">
                                    <span className="font-semibold">R$</span>
                                    <Input className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" name="amount" type="number" placeholder="R$100,00" step="any"/>
                                </div>
                                <label>Descrição</label>
                                <Textarea name="description" placeholder="Descrição da despesa"/>
                                <label>Categoria</label>
                                <ComboBoxExpenses setState={setCategory}/>
                            </div>
                            <div className="w-[100px] py-2">
                                <Button 
                                    style="bg-gray-800 p-3 rounded-3xl shadow-md flex gap-1 hover:bg-gray-700"
                                    onClick={() => {setOpen(false)}}
                                    type="submit"
                                >
                                    <Plus />
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