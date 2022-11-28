import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from "recharts"

interface BarGraphProps {
    club_name: string
    score: number
}

export const BarGraph = ({ data }: {
    data: BarGraphProps[]
}) => {
    console.log(data)
    return (
        <div className="w-full">
            <BarChart width={720} height={250} data={data}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="club_name" />
                <YAxis />
                <Legend />
                <Tooltip cursor={false} />
                <Bar barSize={20} dataKey="score" fill="pink" />
            </BarChart >
        </div >
    )
}