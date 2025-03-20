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


export default function DialogExpenses() {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <div className="flex">
                        <Button 
                            style="bg-gray-800 p-4 rounded-3xl shadow-lg flex gap-1 hover:bg-gray-700" 
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
                    <div className="flex flex-col gap-10 items-end">
                        <div className="w-full flex flex-col gap-4">
                            <label>Valor</label>
                            <div className="flex items-center gap-1">
                                <span className="font-semibold">R$</span>
                                <Input className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" id="amount" type="number" placeholder="R$100,00"/>
                            </div>
                            <label>Descrição</label>
                            <Textarea id="description" placeholder="Descrição da despesa"/>
                            <label>Categoria</label>
                            <ComboBoxExpenses />
                        </div>
                        <div className="w-[100px] py-2">
                            <Button 
                                style="bg-gray-800 p-3 rounded-3xl shadow-md flex gap-1 hover:bg-gray-700" 
                                type="button"
                            >
                                <Plus />
                                Salvar
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}