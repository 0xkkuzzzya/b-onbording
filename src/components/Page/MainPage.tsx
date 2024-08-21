import { useGetGeoposition } from "../store/geoposition"
import { MainPageEN } from "./helpers/en-interface"
import { MainPageRU } from "./helpers/ru-interface"



export const MainPage = () => {
    
    const [geoposition, setGeoposition] = useGetGeoposition()

    return (
        <>
            {geoposition.country == "ru" || geoposition.country == "kz" || geoposition.country == "by" ? <MainPageRU /> : <MainPageEN /> }
        </>
    )
}