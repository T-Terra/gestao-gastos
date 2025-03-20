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
                <DialogContent className="bg-gray-800 text-gray-100 border-1 border-red-600">
                    <DialogHeader>
                        <DialogTitle>Adicionar Nova Despesa</DialogTitle>
                        <DialogDescription>
                            Adiciona uma nova despesa
                        </DialogDescription>
                    </DialogHeader>
                    <label>Valor</label>
                    <Input id="amount" type="number" placeholder="R$100,00"/>
                    <label>Descrição</label>
                    <Input id="description" placeholder="Cartão de crédito"/>
                    <label>Categoria</label>
                    <ComboBoxExpenses />
                </DialogContent>
            </Dialog>
        </div>
    )
}