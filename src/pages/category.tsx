import User from '@/components/user/user'
import TableList from '@/components/tables/table'
import DialogCategory from '@/components/dialog/dialogCategory'
import { useEffect, useState } from 'react'
import { CategoryInterface } from "@/interfaces/CategoryInterface"

export default function Category() {
    const [dataTable, setDataTatle] = useState<CategoryInterface[]>([])

   useEffect(() => {
        const getData = (): CategoryInterface[] => {
            const data = localStorage.getItem("category") as string
            return JSON.parse(data)
        }

        const categoryObjs: CategoryInterface[] = getData()

        setDataTatle(categoryObjs)
   }, [])

    return (
        <div className="bg-gray-900 h-screen w-screen flex flex-col items-end">
            <div className="w-[400px] py-13">
                <User nameUser="Maria Silva" />
            </div>
            <div className="w-full text-gray-100 flex flex-col gap-8 items-center">
                <div  className="w-[1100px] flex justify-between">
                    <div>
                        <h1 className="font-semibold text-4xl">
                            Categoria
                        </h1>
                    </div>
                    <div>
                        <DialogCategory setState={setDataTatle}/>
                    </div>
                </div>
                {/* div list expenses */}
                <TableList col={['Nome da Categoria', 'Descrição', 'Data Criação']} dataTable={dataTable} />
            </div>
        </div>
    )
}