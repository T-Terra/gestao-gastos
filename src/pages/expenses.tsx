import { 
    Scale,
    ArrowDown,
    ArrowUp
} from 'lucide-react'
import User from '@/components/user/user'
import TableList from '@/components/tables/table'
import DialogExpenses from '@/components/dialog/dialogExpenses'

export default function Expenses() {

    const fakeData = [
        { name: "Item 1", data: "2025-03-23", description: "Descrição do item 1", amount: "R$1.500,00" },
        { name: "Item 2", data: "2025-03-22", description: "Descrição do item 2", amount: "R$1.500,00" },
        { name: "Item 3", data: "2025-03-21", description: "Descrição do item 3", amount: "R$1.500,00" },
        { name: "Item 4", data: "2025-03-20", description: "Descrição do item 4", amount: "R$1.500,00" },
        { name: "Item 5", data: "2025-03-19", description: "Descrição do item 5", amount: "R$1.500,00" },
        { name: "Item 6", data: "2025-03-18", description: "Descrição do item 6", amount: "R$1.500,00" },
        { name: "Item 7", data: "2025-03-17", description: "Descrição do item 7", amount: "R$1.500,00" },
        { name: "Item 8", data: "2025-03-16", description: "Descrição do item 8", amount: "R$1.500,00" },
        { name: "Item 9", data: "2025-03-15", description: "Descrição do item 9", amount: "R$1.500,00" },
        { name: "Item 10", data: "2025-03-14", description: "Descrição do item 10", amount: "R$1.500,00" }
    ]

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
                        <DialogExpenses />
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
                <TableList col={['Nome', 'Data criação','Descrição', 'valor']} dataTable={fakeData}/>
            </div>
        </div>
    )
}