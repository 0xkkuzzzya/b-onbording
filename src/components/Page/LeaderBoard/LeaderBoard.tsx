import { useEffect, useState } from "react"
import { GetTop, GetUser, GetWaitlistUserCheck } from "../../../api/user"
import { useGeoposition } from "../../../store/useGeoposition"
import { useLeaderboard, useUser, useWaitlistUser } from "../../../store/useUsers"
import { LinksToPage } from "../Footer/LinksToPage"
import { LeaderBoardEN } from "./LeaderBoardEN"
import { LeaderBoardRU } from "./LeaderBoardRU"
import { InitDataUnsafe } from "../../../type/tg_type"
import { CircularProgress } from "@mui/material"
import { LeadeboardLoadingPage } from "../Loading/Loading"



export const LeaderBoard = () => {

	const [geoposition, setGeoposition] = useGeoposition()
	const [user, setUser] = useUser()
	const [waitlistExist, setWaitlistUser] = useWaitlistUser()
	const [leaderboard, setLeaderboard] = useLeaderboard()
	const [isLoading, setIsLoading] = useState(true);

	async function main(user_id: string, ref?: string) {
		let user = await GetUser(user_id, ref)
		setUser(user)

		let exist = await GetWaitlistUserCheck(user_id)
		setWaitlistUser({ exist })

		let us = await GetTop(user_id)
		//console.log(us)
		setLeaderboard({
			users: us.users!,
			rank: us.rank!
		})
	}

	useEffect(() => {
		Telegram.WebApp.ready();

		const initDataUnsafe: InitDataUnsafe = Telegram.WebApp.initDataUnsafe as InitDataUnsafe;
		//main("765798766")
		main(initDataUnsafe.user?.id.toString()!, initDataUnsafe.start_param?.slice(4))
	}, [])

	useEffect(() => {
		Telegram.WebApp.ready();
		const initDataUnsafe: InitDataUnsafe = Telegram.WebApp.initDataUnsafe as InitDataUnsafe;
		var t = setInterval(() => {
			//main("765798766")
			main(initDataUnsafe.user?.id.toString()!, initDataUnsafe.start_param?.slice(4))
		}, 10000);
	}, [])

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, []);

	return (
		<>
			{leaderboard.users.length < 3 ? <LeadeboardLoadingPage /> : geoposition.country == "ru" || geoposition.country == "kz" || geoposition.country == "by" ? <LeaderBoardRU /> : <LeaderBoardEN />}
		</>
	)
}