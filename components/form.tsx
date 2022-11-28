interface Option {
    key: string
    display: string
    fieldName: string[]
    placeholder: string[]
}

export const Form = ({ option, handleOnSubmit }: { option: Option, handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void }) => {
    return (
        <form onSubmit={handleOnSubmit}>
            <div className="flex flex-row gap-4 items-center px-4">
                {
                    option.placeholder.map((placeholder, index) => (
                        <>
                            {option.fieldName[index] === "type" ?
                                <>
                                    <select name="type" className="border-white  px-4 py-4 outline-none bg-secondary mt-2 rounded-lg">
                                        <optgroup label="Select Type">
                                            <option value="attack">Attack</option>
                                            <option value="defensive">Defensive</option>
                                            <option value="goalkeeping">Goalkeeping</option>

                                        </optgroup>
                                    </select>
                                </>
                                :
                                <input name={option.fieldName[index]} type="text" key={placeholder} placeholder={placeholder} className="border-white w-[50vh] px-6 py-4 outline-none bg-secondary mt-2 rounded-lg"></input>
                            } </>
                    ))
                }
                {
                    option.placeholder.length > 0
                        ? <button className="w-20 rounded-full border h-20 hover:scale-125 ease-in-out duration-200" type="submit">Go</button>
                        : null
                }
            </div>
        </form>
    )
}