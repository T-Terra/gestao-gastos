import { useState } from "react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { 
    Plus,
    Minus,
    Trash2Icon,
    Pencil
} from 'lucide-react'
import { DataTableInterface } from "@/interfaces/DataTableInterfaces"
import { CategoryInterface } from "@/interfaces/CategoryInterface"
import DialogDeleteExpenses from "../dialog/dialogDeleteExpense"
import DialogEditExpenses from "../dialog/dialogEditExpense"
import { useExpenses } from "@/contexts/expensesContext"
import { converData, formatAmount } from "@/utils/formaters"

type props = {
    col: string[]
}

export default function PaginatedTable({ col }: props) {
    const [currentPage, setCurrentPage] = useState(1)
    const { expenses, setExpenses } = useExpenses()
    const itemsPerPage: number = 10
    const sizeIcons: number = 16

    const desc = [...(expenses || [])].reverse()
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = (desc || [])
    .slice(indexOfFirstItem, indexOfLastItem)

    const totalPages = Math.ceil((expenses || []).length / itemsPerPage)

    const handleCell = (obj: DataTableInterface | CategoryInterface, rowIndex: number) => {
        return (
            <TableRow key={rowIndex} className="border-none">
                {Object.values(obj).map((value, colIndex) => (
                    <TableCell key={colIndex} className="font-medium text-[16px] p-3">
                        {
                            colIndex === 5 
                            ? converData(value) 
                            : value 
                            &&
                            colIndex === 2 ? 
                            formatAmount(value) 
                            : value
                        }
                    </TableCell>
                )).slice(1)}
                <TableCell className="p-0">
                    <DialogEditExpenses indexRow={rowIndex}>
                        <Pencil className="cursor-pointer text-indigo-500 hover:text-indigo-700" />
                    </DialogEditExpenses>
                </TableCell>
                <TableCell className="p-0">
                    <DialogDeleteExpenses indexRow={rowIndex}>
                        <Trash2Icon className="cursor-pointer text-red-500 hover:text-red-700" />
                    </DialogDeleteExpenses>
                </TableCell>
            </TableRow>
        )
    }

    return (
        <div>
            <Table>
                <TableCaption></TableCaption>
                <TableHeader>
                    <TableRow className="border-none">
                        {col.map((item, rowIndex) => 
                            <TableHead key={rowIndex} className="w-[100px] text-gray-100">{item}</TableHead>
                        )}
                    </TableRow>
                </TableHeader>
                <TableBody className="h-full">
                    {currentItems.map((data, rowIndex) => 
                        handleCell(data, rowIndex)
                    )}
                </TableBody>
            </Table>
            <div className="flex flex-row justify-between">
                <span className="font-semibold"> Página {currentPage} de {totalPages} </span>
                <div className="mx-4 flex flex-row gap-1.5">
                    <button 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={currentPage === 1 ? "opacity-40" : "opacity-100"}
                    >
                        <Minus size={sizeIcons}/>
                    </button>
                    <button 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={currentPage === totalPages ? "opacity-40" : "opacity-100"}
                    >
                        <Plus size={sizeIcons}/>
                    </button>
                </div>
            </div>
        </div>
    )
}