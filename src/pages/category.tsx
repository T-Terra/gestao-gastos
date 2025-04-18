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
            <div className="lg:w-[400px] w-[200px] py-13">
                <User />
            </div>
            <div className="w-full text-gray-100 lg:flex lg:flex-col grid gap-8 items-center">
                <div  className="lg:w-[1100px] w-[400px] lg:flex lg:justify-between grid lg:ml-0 ml-12">
                    <div>
                        <h1 className="font-semibold lg:text-4xl text-2xl lg:m-0 m-3">
                            Categoria
                        </h1>
                    </div>
                    <div>
                        <DialogCategory />
                    </div>
                </div>
                {/* div list expenses */}
                <div className="lg:ml-0 ml-1">
                    <CategoryTable col={['Nome da Categoria', 'Descrição', 'Data Criação', 'Ação']} />
                </div>
            </div>
        </div>
    )
}