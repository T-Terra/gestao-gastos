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
import { CategoryInterface } from "@/interfaces/CategoryInterface"
import DialogDeleteCategory from "../dialog/dialogDeleteCategory"
import { converData } from "@/utils/formaters"
import { useCategory } from "@/contexts/categoryContext"
import DialogEditCategory from "../dialog/dialogEditCategory"

type props = {
    col: string[]
}

export default function CategoryTable({ col }: props) {
    const [currentPage, setCurrentPage] = useState(1)
    const { categories, setCategories } = useCategory()
    const itemsPerPage: number = 10
    const sizeIcons: number = 16

    const desc = [...(categories || [])].reverse()
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = (desc || [])
    .slice(indexOfFirstItem, indexOfLastItem)

    const totalPages = Math.ceil((categories || []).length / itemsPerPage)

    const handleCell = (obj: CategoryInterface, rowIndex: number) => {
        return (
            <TableRow key={rowIndex} className="border-none">
                {Object.values(obj).map((value, colIndex) => (
                    <TableCell key={colIndex} className="font-medium text-[16px] p-3">
                        {
                            colIndex === 3
                            ? converData(value) 
                            : value 
                        }
                    </TableCell>
                )).slice(1)}
                <TableCell className="p-0">
                    <DialogEditCategory indexRow={rowIndex}>
                        <Pencil className="cursor-pointer text-indigo-500 hover:text-indigo-700" />
                    </DialogEditCategory>
                </TableCell>
                <TableCell className="p-0">
                    <DialogDeleteCategory indexRow={rowIndex}>
                        <Trash2Icon className="cursor-pointer text-red-500 hover:text-red-700" />
                    </DialogDeleteCategory>
                </TableCell>
            </TableRow>
        )
    }

    return (
        <div className="lg:w-[900px] w-[300px] text-gray-100 bg-gray-800 p-5 rounded-2xl shadow-lg">
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