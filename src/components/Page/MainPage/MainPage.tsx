import { useGetGeoposition } from "../../store/geoposition"
import { LinksToPage } from "../helpers/LinksToPage"
import { MainPageEN } from "./MainPageEN"
import { MainPageRU } from "./MainPageRU"



export const MainPage = () => {
    
    const [geoposition, setGeoposition] = useGetGeoposition()

    return (
        <>
            {geoposition.country == "ru" || geoposition.country == "kz" || geoposition.country == "by" ? <MainPageRU /> : <MainPageEN /> }
            <LinksToPage />
        </>
    )
}