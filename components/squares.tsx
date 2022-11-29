export const Squares = ({ opacity, color, text }: {
    opacity: number,
    color: string,
    text?: number
}) => {
    return (
        <div style={{ opacity: opacity, backgroundColor: color }} className="h-10 w-10 border flex items-center justify-center" >
            {text || 0}
        </div>
    )
}

export const SquareCol = (data: {
    data: number[],
    pivot: number,
    player_name: string,
}) => {
    console.log(data)
    return (<div className="flex flex-col">
        <div className="flex flex-col gap-2 mt-10 justify-end w-10">
            <div className="text-[10px] wrap mb-10 h-4">{data.player_name}</div>
            {data.data && data.data.length > 0 &&
                data.data.map((ele, index) => (
                    <Squares opacity={ele / data.pivot + 0.2} color={"blue"} text={ele} key={index} />
                ))
            }
        </div>
    </div>
    )
}