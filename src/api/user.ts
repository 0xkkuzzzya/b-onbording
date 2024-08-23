import { API } from "../const"
import { User, WaitlistUser, defaultStateUser } from "../store/useUsers"


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
                console.log(res)
                if (res.ok == "true") { 
                        return res.result
                } else {
                        return <Result>{}
                }
        } catch (e) {
                console.log(e)
        }
        return <Result>{}
}