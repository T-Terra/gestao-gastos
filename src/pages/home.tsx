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
            <div className="w-[400px] py-13">
                <User nameUser="Maria Silva" />
            </div>
            <div className="w-full text-gray-100 flex flex-col gap-8 items-center">
                <div  className="w-[1500px] flex justify-between">
                    <h1 className="font-semibold text-4xl">
                        Dashboard
                    </h1>
                </div>
                <div className="flex gap-5">
                    <div className="h-[120px] w-[350px] bg-gray-800 rounded-4xl shadow-lg flex justify-between items-center">
                        <div className="grid gap-1 p-5 text-2xl font-semibold">
                            <label className="text-[15px] font-normal">Saldo Atual</label>
                            <label>
                                {
                                    formatAmount(handlerCurrentCost().toString())
                                }
                            </label>
                        </div>
                        <div className="px-8">
                            <div className="bg-blue-500 rounded-full p-2">
                                <Banknote size={30}/>
                            </div>
                        </div>
                    </div>
                    <div className="h-[120px] w-[350px] bg-gray-800 rounded-4xl shadow-lg flex justify-between items-center">
                        <div className="grid gap-1 p-5 text-2xl font-semibold">
                            <label className="text-[15px] font-normal">Receitas</label>
                            <label>
                                { localRevenue 
                                    ? formatAmount(localRevenue) 
                                    : "R$0,00"
                                }
                            </label>
                        </div>
                        <div className="px-8">
                            <div className="bg-emerald-500 rounded-full p-2">
                                <ChartNoAxesCombined size={30}/>
                            </div>
                        </div>
                    </div>
                    <div className="h-[120px] w-[350px] bg-gray-800 rounded-4xl shadow-lg flex justify-between items-center">
                        <div className="grid gap-1 p-5 text-2xl font-semibold">
                            <label className="text-[15px] font-normal">Despesas</label>
                            <label>                                
                                { expensesTotal
                                    ? `-${formatAmount(expensesTotal['total'])}`
                                    : "R$0,00"
                                }
                            </label>
                        </div>
                        <div className="px-8">
                            <div className="bg-red-500 rounded-full p-2">
                                <ArrowDown size={30}/>
                            </div>
                        </div>
                    </div>
                    <div className="h-[120px] w-[350px] bg-gray-800 rounded-4xl shadow-lg flex justify-between items-center">
                        <div className="grid gap-1 p-5 text-2xl font-semibold">
                            <label className="text-[15px] font-normal">Cartão de Crédito</label>
                            <label>--</label>
                        </div>
                        <div className="px-8">
                            <div className="bg-emerald-800 rounded-full p-2">
                                <CreditCard size={30}/>
                            </div>
                        </div>
                    </div>
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