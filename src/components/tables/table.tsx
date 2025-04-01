import { DataTableInterface } from "@/interfaces/DataTableInterfaces"
import PaginatedTable from "./paginatedTable"

type props = {
    col: string[]
    dataTable: DataTableInterface[]
}

export default function TableList({ col, dataTable }: props) {
    return (
        <div className="w-[1100px] text-gray-100 bg-gray-800 p-4 rounded-2xl shadow-lg">
            <PaginatedTable col={col} dataTable={dataTable} />
        </div>
    )
}