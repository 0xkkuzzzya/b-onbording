import { API } from "../const"
import { User, WaitlistUser, defaultStateUser } from "../store/useUsers"
import Avatar from '../assets/Avatar.webp'

async function NewUser(user_id: string, ref: string): Promise<number> {
        let s = ref != "" ? `${API}/referral/new?user_id=${user_id}&ref=${ref}` : `${API}/referral/new?user_id=${user_id}`
        let res = await fetch(s, {
                method: "POST"
        })
        return res.status
}

export async function CompleteTask(user_id: string, task: string): Promise<boolean> {
        let res = await fetch(`${API}/referral/${task}?user_id=${user_id}`, {
                method: "POST"
        })
        return res.ok
}

export async function JoinWaitlist(user_id: string, wallet: string): Promise<boolean> {
        let res = await fetch(`${API}/waitlist/new?user_id=${user_id}&wallet=${wallet}`, {
                method: "POST"
        })
        return res.ok
}

export async function CheckWaitlist(user_id: string): Promise<boolean> {
        interface Response {
                ok: string,
                result: { exist?: boolean }
                err: string
        }
        let res: Response = await (await fetch(`${API}/waitlist/check?user_id=${user_id}`)).json()
        return res.ok == "true" ? res.result.exist! : false
}

export async function GetUser(user_id: string, ref?: string): Promise<User> {

        interface Response {
                ok: string,
                result: { user?: User }
                err: string
        }

        try {
                let res: Response = await (await fetch(API + `/referral/sync?user_id=${user_id}`)).json()
                if (res.ok == "true") {
                        return res.result.user!
                } else if (res.ok == "false" && res.err == "Not exist") {
                        await NewUser(user_id, ref === undefined ? "" : ref)
                        let res: Response = await (await fetch(API + `/referral/sync?user_id=${user_id}`)).json()
                        if (res.ok == "true") {
                                return res.result.user!
                        } else {
                                return defaultStateUser
                        }
                } else if (res.ok == "false" && res.err != "Not exist") {
                        return defaultStateUser
                }
        } catch (e) {
                console.log(e)
        }
        return defaultStateUser
}

export async function GetWaitlistUserCheck(user_id: string): Promise<boolean> {
        interface Response {
                ok: string,
                result: { exist?: boolean }
                err: string
        }

        try {
                let res: Response = await (await fetch(API + `/waitlist/check?user_id=${user_id}`)).json()
                if (res.ok == "true") {
                        return res.result.exist!
                } else {
                        return false
                }
        } catch (e) {
                console.log(e)
        }
        return false
}

interface Result {
        users?: User[],
        rank?: number
}

export async function GetTop(user_id: string): Promise<Result> {
        interface Response {
                ok: string,
                result: Result
                err: string
        }

        try {
                let res: Response = await (await fetch(API + `/referral/top?user_id=${user_id}`)).json()
                //console.log(res)
                if (res.ok == "true") {
                        if (res.result.users?.length! < 3) {
                                for (let index = 0; index < (3 - res.result.users?.length!); index++) {
                                        res.result.users?.push({
                                                user_id: "",
                                                ticket: 0,
                                                refs: [],
                                                get_ticket: false,
                                                premium: false,
                                                lang: "",
                                                from_ref: "",
                                                photo: Avatar,
                                                username: "",
                                                task: {
                                                        task1: false,
                                                        task2: false,
                                                        task3: false,
                                                        task4: false,
                                                        task5: false,
                                                        task6: false,
                                                }
                                        })
                                }
                        }
                        return res.result
                } else {
                        let empty_users: User[] = []
                        for (let index = 0; index < 3; index++) {
                                empty_users.push({
                                        user_id: "",
                                        ticket: 0,
                                        refs: [],
                                        get_ticket: false,
                                        premium: false,
                                        lang: "",
                                        from_ref: "",
                                        photo: Avatar,
                                        username: "",
                                        task: {
                                                task1: false,
                                                task2: false,
                                                task3: false,
                                                task4: false,
                                                task5: false,
                                                task6: false,
                                        }
                                })

                        }
                        return <Result>{
                                users: empty_users,
                                rank: 0
                        }
                }
        } catch (e) {
                console.log(e)
        }
        let empty_users: User[] = []
        for (let index = 0; index < 3; index++) {
                empty_users.push({
                        user_id: "",
                        ticket: 0,
                        refs: [],
                        get_ticket: false,
                        premium: false,
                        lang: "",
                        from_ref: "",
                        photo: Avatar,
                        username: "",
                        task: {
                                task1: false,
                                task2: false,
                                task3: false,
                                task4: false,
                                task5: false,
                                task6: false,
                        }
                })

        }
        return <Result>{
                users: empty_users,
                rank: 0
        }
}