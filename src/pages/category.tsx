import User from '@/components/user/user'
import TableList from '@/components/tables/table'
import DialogCategory from '@/components/dialog/dialogCategory'

export default function Category() {

    const fakeData = [
        { name: "Item 1", data: "2025-03-23", description: "Descrição do item 1" },
        { name: "Item 2", data: "2025-03-22", description: "Descrição do item 2" },
        { name: "Item 3", data: "2025-03-21", description: "Descrição do item 3" },
        { name: "Item 4", data: "2025-03-20", description: "Descrição do item 4" },
        { name: "Item 5", data: "2025-03-19", description: "Descrição do item 5" },
        { name: "Item 6", data: "2025-03-18", description: "Descrição do item 6" },
        { name: "Item 7", data: "2025-03-17", description: "Descrição do item 7" },
        { name: "Item 8", data: "2025-03-16", description: "Descrição do item 8" },
        { name: "Item 9", data: "2025-03-15", description: "Descrição do item 9" },
        { name: "Item 10", data: "2025-03-14", description: "Descrição do item 10" }
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
                <TableList col={['Nome', 'Data criação', 'Descrição']} dataTable={fakeData} />
            </div>
        </div>
    )
}