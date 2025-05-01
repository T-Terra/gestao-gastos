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
            <div className="lg:w-[400px] w-[200px]">
                <User />
            </div>
            <div className="w-full text-gray-100 lg:flex lg:flex-col grid gap-3 lg:items-center">
                <div  className="lg:w-[1100px] w-[400px] lg:flex lg:justify-between grid lg:ml-0 ml-12">
                    <div>
                        <h1 className="font-semibold lg:text-4xl text-2xl lg:mb-0 mb-2">
                            Despesas
                        </h1>
                    </div>
                    <div>
                        <DialogExpenses />
                    </div>
                </div>
                <div className="lg:flex flex-wrap lg:ml-0 ml-6 gap-5">
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
                <div className="lg:ml-0 ml-1">
                    <TableList col={['Nome', 'valor', 'Descrição', 'Data criação', 'Categoria', 'Editar', 'Deletar']} />
                </div>
            </div>
        </div>
    )
}