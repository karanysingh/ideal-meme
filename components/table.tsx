import { useMemo } from "react"

export const Table = ({ data, headings }: {
    data: string[][], headings: string[]
}) => {
    const capitalizedHeadings = headings.map(ele => ele.charAt(0).toUpperCase() + ele.slice(1))
    return (
        <table className="border text-center mt-10 border-secondary w-full table-auto">
            <thead className="bg-secondary">
                {
                    capitalizedHeadings.map((heading, index) => (
                        <>
                            <td className="px-4 py-2" key={heading + index}>{heading}</td>
                        </>
                    ))
                }
            </thead>
            <tbody>
                {
                    data.map((row, index) => (
                        <tr key={index}>
                            <>
                                {
                                    row.map((col, index) => (
                                        <td className="px-4 py-2" key={col}>{col}</td>
                                    ))
                                }
                            </>
                        </tr>
                    ))
                }
            </tbody>
        </table>)
}