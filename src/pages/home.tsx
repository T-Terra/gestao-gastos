import { 
    Banknote,
    ChartNoAxesCombined,
    ArrowDown,
    CreditCard
} from 'lucide-react'
import Chart from '@/components/charts/Chart'
import User from '@/components/user/user'

export default function Home() {
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
                            <label>R$ 2.000,00</label>
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
                            <label>R$ 1.500,00</label>
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
                            <label>- R$ 1.000,00</label>
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
                            <label>- R$ 500,00</label>
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