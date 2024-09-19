import { useEffect } from "react"
import { CheckWaitlist } from "../../../api/user"
import { useGeoposition } from "../../../store/useGeoposition"
import { InitDataUnsafe } from "../../../type/tg_type"
import { LinksToPage } from "../Footer/LinksToPage"
import { BuyMinerEN } from "./BuyMinerEN"
import { BuyMinerRU } from "./BuyMinerRU"
import { useWaitlistUser } from "../../../store/useUsers"
import { SuccessfullJoinedEN } from "./SuccessfullJoined/SuccessullJoinedEN"
import { SuccessfullJoinedRU } from "./SuccessfullJoined/SuccessullJoinedRU"



export const BuyMiner = () => {
    
    const [geoposition, setGeoposition] = useGeoposition()

    const [waitlist, setWaitlist] = useWaitlistUser()

    async function checkWaitlist(user_id: string) {
        setWaitlist({exist: await CheckWaitlist(user_id)})
    }

    useEffect(() => {
        Telegram.WebApp.ready();
		const initDataUnsafe: InitDataUnsafe = Telegram.WebApp.initDataUnsafe as InitDataUnsafe;
        checkWaitlist(initDataUnsafe.user?.id.toString()!)
    }, [])  

    return (
        <>
        {
        waitlist.exist ?
            geoposition.country == "ru" || geoposition.country == "kz" || geoposition.country == "by" ? <SuccessfullJoinedRU /> : <SuccessfullJoinedEN />  
            :
            geoposition.country == "ru" || geoposition.country == "kz" || geoposition.country == "by" ? <BuyMinerRU /> : <BuyMinerEN />
        }
            <LinksToPage />
        </>
    )
}