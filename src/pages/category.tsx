import User from '@/components/user/user'
import CategoryTable from '@/components/tables/categoryTable'
import DialogCategory from '@/components/dialog/dialogCategory'
import { useEffect } from 'react'
import { CategoryInterface } from "@/interfaces/CategoryInterface"
import { useCategory } from "@/contexts/categoryContext"
import axios from "axios"

export default function Category() {
    const { categories, setCategories } = useCategory()
    const apiUrl: string = import.meta.env.VITE_API_URL

   useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`${apiUrl}/category`, {withCredentials: true})
            const categoryObjs: CategoryInterface[] = response.data
    
            setCategories(categoryObjs)
        };

        getData()
   }, [])

    return (
        <div className="bg-gray-900 h-screen w-screen flex flex-col items-end">
            <div className="w-[400px] py-13">
                <User />
            </div>
            <div className="w-full text-gray-100 flex flex-col gap-8 items-center">
                <div  className="w-[1100px] flex justify-between">
                    <div>
                        <h1 className="font-semibold text-4xl">
                            Categoria
                        </h1>
                    </div>
                    <div>
                        <DialogCategory />
                    </div>
                </div>
                {/* div list expenses */}
                <CategoryTable col={['Nome da Categoria', 'Descrição', 'Data Criação', 'Ação']} />
            </div>
        </div>
    )
}