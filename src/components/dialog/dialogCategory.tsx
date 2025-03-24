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
import { Button } from '@/components/buttons/button'
import { Input } from "../ui/input"

export default function DialogCategory() {
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
                            Nova categoria
                        </Button>
                    </div>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 text-gray-100 border-1 border-gray-700">
                    <DialogHeader>
                        <DialogTitle>Adicionar Nova Categoria</DialogTitle>
                        <DialogDescription>
                            Adiciona uma nova categoria
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-10 items-end">
                        <div className="w-full flex flex-col gap-4">
                            <label>Nome da Categoria</label>
                            <div className="flex items-center gap-1">
                                <Input className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" id="categoryName" type="text" placeholder="Lazer, Alimentação..."/>
                            </div>
                            <label>Descrição</label>
                            <Textarea id="description" placeholder="Descrição da categoria"/>
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