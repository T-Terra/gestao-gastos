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
import { Button } from '@/components/buttons/button'
import { Input } from "../ui/input"
import { CategoryInterface } from "@/interfaces/CategoryInterface"
import { useCategory } from "@/contexts/categoryContext"
import { useState, useEffect } from "react"
import { ShowToastSuccess, ShowToastError } from "../toast/toastFunctions"
import axios from "axios"

type props = {
    indexRow: number
    children: React.ReactNode
}

export default function DialogEditCategory({ indexRow, children }: props) {
    const [isOpen, setOpen] = useState(false)
    const { categories, setCategories } = useCategory()
    const [categoriesLocal, setCategoriesLocal] = useState<CategoryInterface[]>()
    const [formData, setFormData] = useState({
        nameCategory: "",
        DescriptionCategory: ""
    })

    useEffect(() => {
        const arr = [...categories]
        setCategoriesLocal(arr.reverse())
    }, [])

    const setData = () => {
        const filterCategory = categoriesLocal.filter((category, indexId) => indexId === indexRow)

        setFormData({
            nameCategory: filterCategory[0]['nameCategory'],
            DescriptionCategory: filterCategory[0]['descriptionCategory']
        })
    }
    
    const apiUrl: string = import.meta.env.VITE_API_URL

    const saveData = async (data: CategoryInterface, index: number) => {
        if (data.nameCategory === "" && data.DescriptionCategory === "") {
            alert("Dados vazios não são salvos")
        } else {
            const filterCategory = categories.reverse().filter((category, indexId) => indexId === index)
            const categoryId = filterCategory[0]['categoryId']

            const response = await axios.put(`${apiUrl}/category/${categoryId}`, JSON.stringify(data), {
                headers: {"Content-Type": "application/json"},
                withCredentials: true
            })

            if (response.status === 201 || response.status === 200) {
                const EditedCategory = response.data
                setCategories(prev => 
                    Array.isArray(prev)
                    ? prev.map(category => category.categoryId === EditedCategory.categoryId ? EditedCategory : category).reverse()
                    : []
                )
                ShowToastSuccess("Categoria Editada com sucesso!")
            } else {
                ShowToastError(`Erro ao Editar categoria! code ${response.status}`)
            }
        }
    }

    const getFormData = (formData: FormData) => {
        const categoryName = formData.get('categoryName') as string
        const description = formData.get('description') as string

        const arrayObj: CategoryInterface = {
            "nameCategory": categoryName,
            "DescriptionCategory": description
        }

        saveData(arrayObj, indexRow)
    }

    return (
        <div>
            <Dialog open={isOpen} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <div className="flex">
                        <Button 
                            style="p-2 flex gap-1" 
                            type="button"
                            onClick={() => setData()}
                        >
                            {children}
                        </Button>
                    </div>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 text-gray-100 border-1 border-gray-700">
                    <DialogHeader>
                        <DialogTitle>Editar Categoria</DialogTitle>
                        <DialogDescription>
                            Editar a categoria
                        </DialogDescription>
                    </DialogHeader>
                    <form action={getFormData}>
                        <div className="flex flex-col gap-10 items-end">
                            <div className="w-full flex flex-col gap-4">
                                <label>Nome da Categoria</label>
                                <div className="flex items-center gap-1">
                                    <Input className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" name="categoryName" type="text" placeholder="Lazer, Alimentação..." 
                                    value={formData.nameCategory}
                                    onChange={(e) => setFormData({...formData, nameCategory: e.target.value})}/>
                                </div>
                                <label>Descrição</label>
                                <Textarea name="description" placeholder="Descrição da categoria"
                                value={formData.DescriptionCategory}
                                onChange={(e) => setFormData({...formData, DescriptionCategory: e.target.value})}/>
                            </div>
                            <div className="w-[100px] py-2">
                                <Button 
                                    style="bg-gray-800 p-3 rounded-3xl shadow-md flex gap-1 hover:bg-gray-700" 
                                    type="submit"
                                    onClick={() => setOpen(false)}
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