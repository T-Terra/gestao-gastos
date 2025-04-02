import { 
    Scale,
    ArrowDown,
    ArrowUp
} from 'lucide-react'
import User from '@/components/user/user'
import TableList from '@/components/tables/table'
import DialogExpenses from '@/components/dialog/dialogExpenses'
import { useEffect, useState } from 'react'
import { DataTableInterface } from '@/interfaces/DataTableInterfaces'

export default function Expenses() {
    const [dataTable, setDataTable] = useState<DataTableInterface[]>([])

    useEffect(() => {
        const getData = (): DataTableInterface[] => {
            const data = localStorage.getItem('expense') as string
            return JSON.parse(data); 
        }

        const obj: DataTableInterface[] = getData()

        setDataTable(obj)
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
                            Despesas
                        </h1>
                    </div>
                    <div>
                        <DialogExpenses setState={setDataTable}/>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="h-[120px] w-auto lg:w-[350px] bg-gray-800 rounded-4xl shadow-lg flex justify-between items-center">
                        <div className="grid gap-1 p-5 text-2xl font-semibold">
                            <label className="text-[15px] font-normal">Despesas pendentes</label>
                            <label>R$ 2.000,00</label>
                        </div>
                        <div className="px-8">
                            <div className="bg-red-500 rounded-full p-2">
                                <ArrowUp size={30}/>
                            </div>
                        </div>
                    </div>
                    <div className="h-[120px] w-auto lg:w-[350px] bg-gray-800 rounded-4xl shadow-lg flex justify-between items-center">
                        <div className="grid gap-1 p-5 text-2xl font-semibold">
                            <label className="text-[15px] font-normal">Despesas pagas</label>
                            <label>R$ 1.500,00</label>
                        </div>
                        <div className="px-8">
                            <div className="bg-red-500 rounded-full p-2">
                                <ArrowDown size={30}/>
                            </div>
                        </div>
                    </div>
                    <div className="h-[120px] w-auto lg:w-[350px] bg-gray-800 rounded-4xl shadow-lg flex justify-between items-center">
                        <div className="grid gap-1 p-5 text-2xl font-semibold">
                            <label className="text-[15px] font-normal">Total</label>
                            <label>R$ 1.000,00</label>
                        </div>
                        <div className="px-8">
                            <div className="bg-red-500 rounded-full p-2">
                                <Scale size={30}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* div list expenses */}
                <TableList col={['Nome', 'valor', 'Descrição', 'Categoria', 'Data criação', 'Ação']} dataTable={dataTable}/>
            </div>
        </div>
    )
}