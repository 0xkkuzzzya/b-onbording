import { useEffect } from "react"
import { useGeoposition } from "../../../../store/useGeoposition"
import { LinksToPage } from "../../Footer/LinksToPage"
import { SuccessfullJoinedRU } from "./SuccessullJoinedRU"
import { SuccessfullJoinedEN } from "./SuccessullJoinedEN"




export const SuccessfullJoined = () => {
    
    const [geoposition, setGeoposition] = useGeoposition()


    return (
        <>
            {geoposition.country == "ru" || geoposition.country == "kz" || geoposition.country == "by" ? <SuccessfullJoinedRU /> : <SuccessfullJoinedEN /> }
            <LinksToPage />
        </>
    )
}