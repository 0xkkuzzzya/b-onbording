import { useEffect } from "react"
import { GetTop, GetUser, GetWaitlistUserCheck } from "../../../api/user"
import { useGeoposition } from "../../../store/useGeoposition"
import { useLeaderboard, useUser, useWaitlistUser } from "../../../store/useUsers"
import { LinksToPage } from "../Footer/LinksToPage"
import { LeaderBoardEN } from "./LeaderBoardEN"
import { LeaderBoardRU } from "./LeaderBoardRU"
import { InitDataUnsafe } from "../../../type/tg_type"



export const LeaderBoard = () => {
    
    const [geoposition, setGeoposition] = useGeoposition()
    const [user, setUser] = useUser()
	const [waitlistExist, setWaitlistUser] = useWaitlistUser()
    const [leaderboard, setLeaderboard] = useLeaderboard()

    async function main(user_id: string) {
		let user = await GetUser(user_id)
		setUser(user)

		let exist = await GetWaitlistUserCheck(user_id)
		setWaitlistUser({exist})

        let us = await GetTop(user_id)
        setLeaderboard({
            users: us.users!,
            rank: us.rank!
        })
	}

    useEffect(() => {
		Telegram.WebApp.ready();

		const initDataUnsafe: InitDataUnsafe = Telegram.WebApp.initDataUnsafe as InitDataUnsafe;
		//main("765798766")
        main(initDataUnsafe.user?.id.toString()!)
	}, [])

    return (
        <>
            {geoposition.country == "ru" || geoposition.country == "kz" || geoposition.country == "by" ? <LeaderBoardRU /> : <LeaderBoardEN /> }
            <LinksToPage />
        </>
    )
}