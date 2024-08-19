import { useGetGeoposition } from "../store/geoposition"
import { MainPageEN } from "./helpers/en-interface"
import { MainPageRU } from "./helpers/ru-interface"



export const MainPage = () => {
    
    const [geoposition, setGeoposition] = useGetGeoposition()

    console.log(geoposition)

    return (
        <>
            {geoposition.country == "RU" || geoposition.country == "KZ" || geoposition.country == "BY" ? <MainPageRU /> : <MainPageEN /> }
        </>
    )
}