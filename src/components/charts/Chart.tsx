import { Pie, PieChart, Cell, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type props = {
    title: string
}

const chartData = [
    { name: "Categoria A", value: 400 },
    { name: "Categoria B", value: 300 },
    { name: "Categoria C", value: 300 },
    { name: "Categoria D", value: 50 },
]
  
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff6b6b"];

export default function Chart({ title }: props) {
    return (
        <Card className="w-full max-w-md mx-auto bg-gray-800 border-0 text-gray-100">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} name={entry['name']} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}