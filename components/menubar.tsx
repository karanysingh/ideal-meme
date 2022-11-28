interface Option {
    key: string
    display: string
    placeholder: string[]
}
interface Options { [key: string]: Option }

export const MenuBar = ({ options, handleMenuSelect, selected }: {
    options: Options, handleMenuSelect: (option: string) => void, selected: string
}) => {
    return (
        <div className="w-full fixed top-0 fixed">
            <div className="flex flex-row  px-12 justify-center gap-10 backdrop-blur-sm">
                {
                    Object.keys(options).map((option) => (
                        <div className={`cursor-pointer hover:text-white hover:bg-secondary px-6 py-4 rounded-lg ease-in-out duration-300 ${options[option].key === selected ? "bg-secondary text-white" : ""}`} onClick={() => handleMenuSelect(options[option].key)} key={options[option].key}>{options[option].display}</div>
                    ))
                }
            </div>
        </div>
    )
}