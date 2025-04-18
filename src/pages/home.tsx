import { 
    Banknote,
    ChartNoAxesCombined,
    ArrowDown,
    CreditCard
} from 'lucide-react'
import Chart from '@/components/charts/Chart'
import User from '@/components/user/user'
import { useEffect, useState } from 'react'
import { formatAmount } from '@/utils/formaters'
import Card from '@/components/card/card'
import axios from "axios"

export default function Home() {
    const [localRevenue, setLocalRevenue] = useState("")
    const [expensesTotal, setExpensesTotal] = useState("")

    const apiUrl: string = import.meta.env.VITE_API_URL

    useEffect(() => {
        const getRevenues = async () => {
            const response = await axios.get(`${apiUrl}/revenue`, {withCredentials: true})
            const revenues = response.data.reverse()[0]

            setLocalRevenue(revenues.amountRevenue)
        }
        getRevenues()
    }, [])

    useEffect(() => {
        const getData = async (): Promise<void> => {
            const response = await axios.get(`${apiUrl}/expenses/total`, {withCredentials: true})
            setExpensesTotal(response.data)
        }

        getData()
    }, [])

    const handlerCurrentCost = () => {
        try {
            const revenueFloat = parseFloat(localRevenue)
            const expensesTotalFloat = parseFloat(expensesTotal['total'])

            return revenueFloat - expensesTotalFloat
        } catch (error) {
            throw new Error(`msg: ${error}`)
        }
    }

    return (
        <div className="bg-gray-900 h-screen w-screen flex flex-col items-end">
            <div className="w-[400px] py-13 xs:ml-5">
                <User />
            </div>
            <div className="w-full text-gray-100 lg:flex flex-col gap-8 items-center">
                <div  className="w-[1500px] flex justify-between">
                    <h1 className="font-semibold text-4xl xs:m-5">
                        Dashboard
                    </h1>
                </div>
                <div className="lg:flex flex-wrap gap-5">
                    <Card 
                        label="Saldo Atual" 
                        icon={<Banknote size={30}/>} 
                        data={
                            localRevenue
                            ? formatAmount(handlerCurrentCost().toString())
                            : "R$0,00"
                        }
                        styleIcon="bg-blue-500 rounded-full p-2"
                    />

                    <Card 
                        label="Receitas" 
                        icon={<ChartNoAxesCombined size={30}/>} 
                        data={
                            localRevenue
                            ? formatAmount(localRevenue)
                            : "R$0,00"
                        }
                        styleIcon="bg-emerald-500 rounded-full p-2"
                    />

                    <Card 
                        label="Despesas" 
                        icon={<ArrowDown size={30}/>} 
                        data={
                            expensesTotal
                            ? `-${formatAmount(expensesTotal['total'])}`
                            : "R$0,00"
                        }
                        styleIcon="bg-red-500 rounded-full p-2"
                    />

                    <Card 
                        label="Cartão de Crédito" 
                        icon={<CreditCard size={30}/>} 
                        data="--"
                        styleIcon="bg-emerald-800 rounded-full p-2"
                    />
                </div>
                <div className="w-full text-gray-100 flex justify-center">
                    <div className="w-[700px]">
                        <Chart title="Despesas por Categoria" />
                    </div>
                    <div className="w-[700px]">
                        <Chart title="Receitas por Categoria" />
                    </div>
                </div>
            </div>
        </div>
    )
}