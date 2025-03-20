import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export default function TableList() {
    return (
        <div className="w-[1100px] text-gray-100 bg-gray-800 p-5 rounded-3xl shadow-lg">
            <Table>
                <TableCaption>Lista de despesas.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] text-gray-100">Situação</TableHead>
                        <TableHead className="text-gray-100">Data</TableHead>
                        <TableHead className="text-gray-100">Descrição</TableHead>
                        <TableHead className="text-gray-100">Categoria</TableHead>
                        <TableHead className="text-right text-gray-100">Valor</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Pago</TableCell>
                        <TableCell>10/03/2025</TableCell>
                        <TableCell>Cartão de Crédito</TableCell>
                        <TableCell>Cartão</TableCell>
                        <TableCell className="text-right">R$1150,00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Pago</TableCell>
                        <TableCell>10/03/2025</TableCell>
                        <TableCell>Cartão de Crédito</TableCell>
                        <TableCell>Cartão</TableCell>
                        <TableCell className="text-right">R$1150,00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Pago</TableCell>
                        <TableCell>10/03/2025</TableCell>
                        <TableCell>Cartão de Crédito</TableCell>
                        <TableCell>Cartão</TableCell>
                        <TableCell className="text-right">R$1150,00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Pago</TableCell>
                        <TableCell>10/03/2025</TableCell>
                        <TableCell>Cartão de Crédito</TableCell>
                        <TableCell>Cartão</TableCell>
                        <TableCell className="text-right">R$1150,00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Pago</TableCell>
                        <TableCell>10/03/2025</TableCell>
                        <TableCell>Cartão de Crédito</TableCell>
                        <TableCell>Cartão</TableCell>
                        <TableCell className="text-right">R$1150,00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Pendente</TableCell>
                        <TableCell>10/03/2025</TableCell>
                        <TableCell>Cartão de Crédito</TableCell>
                        <TableCell>Cartão</TableCell>
                        <TableCell className="text-right">R$1150,00</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}