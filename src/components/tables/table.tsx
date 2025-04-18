import PaginatedTable from "./paginatedTable"

type props = {
    col: string[]
}

export default function TableList({ col }: props) {
    return (
        <div className="lg:w-[1300px] w-[300px] text-gray-100 bg-gray-800 p-5 rounded-2xl shadow-lg">
            <PaginatedTable col={col} />
        </div>
    )
}