import { useState } from "react";
import { SquareCol } from "./squares";

interface PlayerStats {
    name: string;
    type: string;
    club: string;
    attack?: {
        goals_scored: number;
        assists: number;
        corners: number;
        offsides: number;
        dribbles: number;
    };
    defence?: {
        goals: number;
        tackles_won: number;
        tackles_lost: number;
        clearance_attempts: number;
        balls_recovered: number;
    };
    goalkeeping?: {
        saved: number;
        conceded: number;
        clean_sheets: number;
        punches: number;
    };
}

export const Heatmap = ({ playerdata }: { playerdata: PlayerStats[] }) => {
    const [type, setType] = useState("attack")

    const getData = (type: string) => {
        let pivot = 0
        if (type == "attack") {
            return {
                arr: playerdata.map(
                    (player, index) => (player.attack ?
                        Object.values(player.attack).map((stats, index) => {
                            if (stats > pivot) {
                                pivot = stats
                            }
                            return stats
                        }) : [0, 0]
                    )
                ), pivot: pivot
            }
        }
        else if (type == "defence") {
            return {
                arr: playerdata.map(
                    (player, index) => (player.defence ?
                        Object.values(player.defence).map((stats, index) => {
                            if (stats > pivot) {
                                pivot = stats
                            }
                            return stats
                        }) : [0, 0]
                    )
                ), pivot: pivot
            }
        }
        else if (type == "goalkeeping") {
            return {
                arr: playerdata.map(
                    (player, index) => (player.goalkeeping ?
                        Object.values(player.goalkeeping).map((stats, index) => {
                            if (stats > pivot) {
                                pivot = stats
                            }
                            return stats
                        }) : [0, 0]
                    )
                ), pivot: pivot
            }
        }
        return { arr: [[0, 0]], pivot: 0.1 }

    }

    const { arr, pivot } = getData(type)

    return (
        <div className="border border-secondary p-2 mt-10">

            {/* Toggle */}
            Toggle with: &nbsp;
            <select onChange={e => { setType(e.target.value) }}>
                <option value="attack">Attack</option>
                <option value="defence">Defence</option>
                <option value="goalkeeping">Goalkeeping</option>
            </select>

            <div className="grid grid-rows-22 grid-flow-col gap-4">

                {/* Labels */}
                <div className="flex flex-col flex-1 gap-2 justify-center mt-8">
                    <div className="text-[10px] wrap mb-8 h-4">
                        PLAYER /<br></br>
                        METRIC</div>

                    {
                        type == "attack" ? playerdata && playerdata.length > 0 && Object.keys(playerdata[0].attack || []).map((title) => (
                            <div className="w-10 text-yellow-200 text-left h-10 text-[10px] flex items-center flex capitalize" key={title}>{title.replaceAll("_", " ")}</div>
                        )) :
                            type == "defence" ? playerdata && playerdata.length > 0 && Object.keys(playerdata[0].defence || []).map((title) => (
                                <div className="w-10 text-yellow-200 text-left h-10 text-[10px] flex items-center flex capitalize" key={title}>{title.replaceAll("_", " ")}</div>
                            )) :
                                type == "goalkeeping" ? playerdata && playerdata.length > 0 && Object.keys(playerdata[0].goalkeeping || []).map((title) => (
                                    <div className="w-10 text-yellow-200 text-left h-10 text-[10px] flex items-center flex capitalize" key={title}>{title.replaceAll("_", " ")}</div>
                                )) : <div></div>
                    }
                </div>

                {/* HeatGraph */}
                {arr && arr.length > 0 &&
                    arr?.map((ele, index) => (
                        <SquareCol data={ele} key={index} pivot={pivot} player_name={playerdata[index].name} />
                    ))
                }
            </div>
        </div>
    )
}
