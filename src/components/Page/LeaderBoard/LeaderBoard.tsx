import { useGetGeoposition } from "../../store/geoposition"
import { LinksToPage } from "../Footer/LinksToPage"
import { LeaderBoardEN } from "./LeaderBoardEN"
import { LeaderBoardRU } from "./LeaderBoardRU"



export const LeaderBoard = () => {
    
    const [geoposition, setGeoposition] = useGetGeoposition()

    return (
        <>
            {geoposition.country == "ru" || geoposition.country == "kz" || geoposition.country == "by" ? <LeaderBoardRU /> : <LeaderBoardEN /> }
            <LinksToPage />
        </>
    )
}