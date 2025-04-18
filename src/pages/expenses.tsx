import { 
    Scale,
    ArrowDown,
    ArrowUp
} from 'lucide-react'
import User from '@/components/user/user'
import TableList from '@/components/tables/table'
import DialogExpenses from '@/components/dialog/dialogExpenses'
import { useEffect, useState } from 'react'
import { useExpenses } from '@/contexts/expensesContext'
import { formatAmount } from '@/utils/formaters'
import Card from '@/components/card/card'
import axios from "axios"

export default function Expenses() {
    const { expenses, setExpenses } = useExpenses()
    const [expensesTotal, setExpensesTotal] = useState("")

    const apiUrl: string = import.meta.env.VITE_API_URL

    useEffect(() => {
        const getData = async (): Promise<void> => {
            const response = await axios.get(`${apiUrl}/list`, {
                withCredentials: true
            })
            setExpenses(response.data)
        }

        getData()
    }, [])

    useEffect(() => {
        const getData = async (): Promise<void> => {
            const response = await axios.get(`${apiUrl}/expenses/total`, {withCredentials: true})
            setExpensesTotal(response.data)
        }

        getData()
    }, [])

    return (
        <div className="bg-gray-900 h-screen w-screen flex flex-col items-end py-6">
            <div className="w-[400px]">
                <User />
            </div>
            <div className="w-full text-gray-100 flex flex-col gap-3 items-center">
                <div  className="w-[1100px] flex justify-between">
                    <div>
                        <h1 className="font-semibold text-4xl">
                            Despesas
                        </h1>
                    </div>
                    <div>
                        <DialogExpenses />
                    </div>
                </div>
                <div className="lg:flex flex-wrap gap-5">
                    <Card 
                        label="Despesas pendentes" 
                        icon={<ArrowUp size={30}/>} 
                        data="--"
                        styleIcon="bg-red-500 rounded-full p-2"
                    />

                    <Card 
                        label="Despesas pagas" 
                        icon={<ArrowDown size={30}/>} 
                        data="--"
                        styleIcon="bg-red-500 rounded-full p-2"
                    />

                    <Card 
                        label="Total" 
                        icon={<Scale size={30}/>} 
                        data={ expensesTotal
                            ? `-${formatAmount(expensesTotal['total'])}`
                            : "R$0,00"
                        }
                        styleIcon="bg-red-500 rounded-full p-2"
                    />
                </div>
                {/* div list expenses */}
                <TableList col={['Nome', 'valor', 'Descrição', 'Categoria', 'Data criação', 'Ação']} />
            </div>
        </div>
    )
}