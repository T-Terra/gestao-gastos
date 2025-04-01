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
import { CategoryInterface, SetStateInterface } from "@/interfaces/CategoryInterface"
import { useState } from "react"

export default function DialogCategory({ setState }: SetStateInterface) {
    const [isOpen, setOpen] = useState(false)

    const getData = (): CategoryInterface[] => {
        const data = localStorage.getItem('category') as string
        return data !== null ? JSON.parse(data) : []
    }

    const saveData = (data: CategoryInterface) => {
        if (data.categoryName === "" && data.description === "") {
            alert("Dados vazios não são salvos")
        } else {
            const Objs: CategoryInterface[] = getData()
            const categoryArray: CategoryInterface[] = [...Objs, data]
            localStorage.setItem("category", JSON.stringify(categoryArray))
            setState(categoryArray)
        }
    }

    const getFormData = (formData: FormData) => {
        const categoryName = formData.get('categoryName') as string
        const description = formData.get('description') as string

        const arrayObj: CategoryInterface = {
            "categoryName": categoryName,
            "description": description
        }

        saveData(arrayObj)
    }

    return (
        <div>
            <Dialog open={isOpen} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <div className="flex">
                        <Button 
                            style="bg-gray-800 p-4 rounded-3xl shadow-lg flex gap-1 hover:bg-gray-700" 
                            type="button"
                            onClick={() => setOpen(true)}
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
                    <form action={getFormData}>
                        <div className="flex flex-col gap-10 items-end">
                            <div className="w-full flex flex-col gap-4">
                                <label>Nome da Categoria</label>
                                <div className="flex items-center gap-1">
                                    <Input className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" name="categoryName" type="text" placeholder="Lazer, Alimentação..."/>
                                </div>
                                <label>Descrição</label>
                                <Textarea name="description" placeholder="Descrição da categoria"/>
                            </div>
                            <div className="w-[100px] py-2">
                                <Button 
                                    style="bg-gray-800 p-3 rounded-3xl shadow-md flex gap-1 hover:bg-gray-700" 
                                    type="submit"
                                    onClick={() => setOpen(false)}
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