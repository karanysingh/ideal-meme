import { useMemo, useState } from "react";
import { MenuBar } from "./menubar";
import { Heading } from "./heading"
import { UEFAForm } from "../partials/uefaform"
import { Table } from "./table";

interface Option {
    key: string
    display: string
    fieldName: string[]
    placeholder: string[]
}

interface Options {
    [key: string]: Option
}

export const Main = () => {
    const [option, setOption] = useState("home");

    const [params, setParams] = useState<{ [key: string]: any }>({
        player_name: "",
        club_name: "",
        position: "",
        type: ""
    })

    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        setParams(data);
    }

    const handleMenuSelect = (option: string) => {
        setOption(option);
        setParams({
            player_name: "",
            club_name: "",
            position: "",
            type: ""
        })
    }
    let options: Options = {
        home: {
            key: "home",
            display: "Clubs Info",
            fieldName: [],
            placeholder: []
        },
        player_stats: {
            key: "player_stats",
            display: "Search By Player Name",
            fieldName: ["player_name"],
            placeholder: ["Enter Player Name"]
        },
        club_stats: {
            key: "club_stats",
            display: "Search By Club Name",
            fieldName: ["club_name"],
            placeholder: ["Enter Club Name"]
        },
        goals_in_position: {
            key: "goals_in_position",
            display: "Search By Club Name (s) and Position",
            fieldName: ["club_name", "position"],
            placeholder: ["Enter Club Name", "Enter Position"]
        },
        club_player_stats: {
            key: "club_player_stats",
            display: "Search By Club Name and type",
            fieldName: ["club_name", "type"],
            placeholder: ["Enter Club Name", "Enter Type"]
        }
    }

    return (
        <>
            <MenuBar selected={option} options={options} handleMenuSelect={handleMenuSelect} />
            <div className="border-10 border-secondary w-full mt-10 p-2">
                <Heading text={options[option].display} />
                <UEFAForm params={params} handleOnSubmit={handleOnSubmit} option={options[option]} />
            </div>
        </>
    )
}