import User from '@/components/user/user'
import TableList from '@/components/tables/table'
import DialogCategory from '@/components/dialog/dialogCategory'

export default function Category() {

    const fakeData = [
        { name: "Alimentação", data: "24/03/2025", description: "Comida e despesas com mercado" },
        { name: "Lazer", data: "24/03/2025", description: "Cinema, Bar e diversão" },
        { name: "Transporte", data: "24/03/2025", description: "Transporte como carro, gasolina ou ônibus" },
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
                            Categoria
                        </h1>
                    </div>
                    <div>
                        <DialogCategory />
                    </div>
                </div>
                {/* div list expenses */}
                <TableList col={['Nome da Categoria', 'Data Criação', 'Descrição']} dataTable={fakeData} />
            </div>
        </div>
    )
}