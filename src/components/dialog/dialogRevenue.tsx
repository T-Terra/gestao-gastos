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
import BankNoteIcon from "../icons/bankNoteIcon"

import { Button } from '@/components/buttons/button'
import { Input } from "../ui/input"
import { useEffect, useState } from "react"
import { DataTableInterface } from "@/interfaces/DataTableInterfaces"
import axios from "axios"


export default function DialogRevenue() {
    const [isOpen, setOpen] = useState(false)
    const [inputValue, setInputValue] = useState("")

    const apiUrl: string = import.meta.env.VITE_API_URL

    useEffect(() => {
        console.log("Valor mudour: ", inputValue)
    }, [inputValue])

    const handlerInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value

        // Remove tudo que não for número
        const numericValue = inputValue.replace(/\D/g, "")
    
        // Divide por 100 para pegar os centavos
        const floatValue = parseFloat(numericValue) / 100
    
        if (isNaN(floatValue)) {
            setInputValue("")
            return
        }
    
        // Formata como pt-BR
        const formatted = floatValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        })
    
        setInputValue(formatted)
    }

    const saveData = async (expense: DataTableInterface) => {
        if (expense.NameExpense === "" && expense.AmountExpense == "") {
            alert("Campos vazios não foi possível salvar")
        } else {
            const response = await axios.post(`${apiUrl}/add`, JSON.stringify(expense), {
                headers: {"Content-Type": "application/json"}
            })
        }
    }

    const getDataForm = (formData: FormData) => {
        const amount = formData.get("amount") as string
    }

    return (
        <div>
            <Dialog open={isOpen} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <div className="flex">
                        <Button 
                            style="bg-indigo-500 hover:bg-indigo-400 w-[55px] h-[55px] rounded-4xl flex justify-center items-center"
                            onClick={() => {setOpen(true)}}
                            type="button" 
                        >
                            <BankNoteIcon size={28}/>
                        </Button>
                    </div>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 text-gray-100 border-1 border-gray-700">
                    <DialogHeader>
                        <DialogTitle>Adicionar valor total de receita.</DialogTitle>
                        <DialogDescription>
                            Adiciona uma nova receita
                        </DialogDescription>
                    </DialogHeader>
                    <form action={getDataForm}>
                        <div className="flex flex-col gap-10 items-end">
                            <div className="w-full flex flex-col gap-4">
                                <label>Valor da Receita</label>
                                <div className="flex items-center gap-1">
                                    <span className="font-semibold">R$</span>
                                    <Input 
                                        className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" name="amount" 
                                        type="number"
                                        value={inputValue}
                                        onChange={handlerInputValue}
                                        placeholder="R$100,00"
                                    />
                                </div>
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