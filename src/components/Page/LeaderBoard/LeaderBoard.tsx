import { useGeoposition } from "../../../store/useGeoposition"
import { LinksToPage } from "../Footer/LinksToPage"
import { LeaderBoardEN } from "./LeaderBoardEN"
import { LeaderBoardRU } from "./LeaderBoardRU"



export const LeaderBoard = () => {
    
    const [geoposition, setGeoposition] = useGeoposition()

    return (
        <>
            {geoposition.country == "ru" || geoposition.country == "kz" || geoposition.country == "by" ? <LeaderBoardRU /> : <LeaderBoardEN /> }
            <LinksToPage />
        </>
    )
}