import { Form } from "../components/form";
import { Table } from "../components/table";
import { useFetcher } from "../pages/api/useFetcher";
import { BarGraph } from "../components/BarChart";
import { Heatmap } from "../components/heatmap";

interface Option {
    key: string
    display: string
    fieldName: string[]
    placeholder: string[]
}

export const UEFAForm = ({ option, params, handleOnSubmit }: {
    option: Option, params: {
        [key: string]: string
    }, handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}) => {

    const { data: uefaData, isLoading, isError } = useFetcher(params)

    const replaceUnderscoresBySpaces = (arr: string[]) => {
        return arr.map((item) => item.replace(/_/g, " "))
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return (
            <>
                <Form option={option} handleOnSubmit={handleOnSubmit}></Form>
                <p>some error occurred</p>
            </>
        )

    }

    if (uefaData && option.key == "home") {
        return (
            <>
                <Form option={option} handleOnSubmit={handleOnSubmit}></Form>
                <Table headings={replaceUnderscoresBySpaces(Object.keys(uefaData))} data={[Object.values(uefaData)]}></Table>
            </>
        )
    }

    else if (uefaData && uefaData.length > 0 && option.key == "player_stats") {
        return (
            <>
                <Form option={option} handleOnSubmit={handleOnSubmit}></Form>
                <Table headings={replaceUnderscoresBySpaces(Object.keys(uefaData[0]))} data={[Object.values(uefaData[0])]}></Table>
            </>

        )
    }

    else if (uefaData && uefaData.length > 0 && option.key == "club_stats") {
        return (
            <>
                <Form option={option} handleOnSubmit={handleOnSubmit}></Form>
                <Table headings={replaceUnderscoresBySpaces(Object.keys(uefaData[0]))} data={uefaData.map((ele: any) => Object.values(ele))}></Table>
            </>
        )
    }

    else if (uefaData && uefaData.length > 0 && option.key == "goals_in_position") {
        return (
            <>
                <Form option={option} handleOnSubmit={handleOnSubmit}></Form>
                <BarGraph data={uefaData}></BarGraph>
            </>
        )
    }

    else if (uefaData && uefaData.length > 0 && option.key == "club_player_stats") {
        console.log("uefaData", uefaData)
        return (<>
            <Form option={option} handleOnSubmit={handleOnSubmit}></Form>
            <Heatmap playerdata={uefaData}></Heatmap>
        </>
        )
    }
    else {
        return <>
            <Form option={option} handleOnSubmit={handleOnSubmit}></Form>
        </>
    }

}