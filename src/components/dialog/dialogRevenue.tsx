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
import { useState } from "react"
import { RevenueInterface } from "@/interfaces/RevenueInterface"
import axios from "axios"


export default function DialogRevenue() {
    const [isOpen, setOpen] = useState(false)

    const apiUrl: string = import.meta.env.VITE_API_URL

    const saveData = async (revenue: RevenueInterface) => {
        if (revenue.amountRevenue === undefined || null) {
            alert("Campos vazios não foi possível salvar")
        } else {
            const response = await axios.post(`${apiUrl}/revenue`, JSON.stringify(revenue), {
                headers: {"Content-Type": "application/json"},
                withCredentials: true
            })
        }
    }

    const getDataForm = (formData: FormData) => {
        const amount = formData.get("amount") as string
        const revenue: RevenueInterface = {
            "amountRevenue": parseFloat(amount)
        }

        saveData(revenue)
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
                                        placeholder="R$100,00"
                                        step="any"
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