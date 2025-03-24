import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

type obj = {
    name: string
    amount: string
    description: string
}

type props = {
    col: string[]
    dataTable: obj[]
}

export default function TableList({ col, dataTable }: props) {

    const handleCell = (obj: obj, rowIndex: number) => {
        return (
            <TableRow key={rowIndex} className="border-none">
                {Object.values(obj).map((value, colIndex) => (
                    <TableCell key={colIndex} className="font-medium">
                        {value}
                    </TableCell>
                ))}
            </TableRow>
        )

    }

    return (
        <div className="w-[1100px] text-gray-100 bg-gray-800 p-4 rounded-2xl shadow-lg">
            <Table>
                <TableCaption></TableCaption>
                <TableHeader>
                    <TableRow className="border-none">
                        {col.map((item) => 
                            <TableHead className="w-[100px] text-gray-100">{item}</TableHead>
                        )}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {dataTable.map((data, rowIndex) => 
                        handleCell(data, rowIndex)
                    )}
                </TableBody>
            </Table>
        </div>
    )
}