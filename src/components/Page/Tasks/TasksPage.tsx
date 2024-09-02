import { useEffect } from "react"
import { CheckWaitlist } from "../../../api/user"
import { useGeoposition } from "../../../store/useGeoposition"
import { InitDataUnsafe } from "../../../type/tg_type"
import { LinksToPage } from "../Footer/LinksToPage"
import { useWaitlistUser } from "../../../store/useUsers"
import { TasksPageRU } from "./TasksPageRU"
import { TasksPageEN } from "./TasksPageEN"



export const TasksPage = () => {
    
    const [geoposition, setGeoposition] = useGeoposition()

    /*return (
        <>
            {geoposition.country == "ru" || geoposition.country == "kz" || geoposition.country == "by" ? <TasksPageRU /> : <TasksPageEN /> }
        </>
    )*/
    return (<><TasksPageEN /></>)
}