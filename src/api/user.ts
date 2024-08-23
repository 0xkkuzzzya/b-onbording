import { API } from "../const"
import { User, WaitlistUser } from "../store/useUsers"


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
                ok: boolean,
                result: { user?: User }
                err: string
        }

        try {
                let res: Response = await (await fetch(API + `/referral/sync?user_id=${user_id}`)).json()
                if (res.ok == true) { 
                        return res.result.user!
                } else if (res.ok == false && res.err == "Not exist") {
                        await NewUser(user_id, ref === undefined ? "" : ref)
                        let res: Response = await (await fetch(API + `/referral/sync?user_id=${user_id}`)).json()
                        if (res.ok == true) {
                                return res.result.user!
                        } else {
                                return <User>{}
                        }
                } else if (res.ok == false && res.err != "Not exist") {
                        return <User>{}
                }
        } catch (e) {
                console.log(e)
        }
        return <User>{}
}

export async function GetWaitlistUserCheck(user_id: string): Promise<boolean> {
        interface Response {
                ok: boolean,
                result: { exist?: boolean }
                err: string
        }

        try {
                let res: Response = await (await fetch(API + `/waitlist/check?user_id=${user_id}`)).json()
                if (res.ok == true) { 
                        return res.result.exist!
                } else {
                        return false
                }
        } catch (e) {
                console.log(e)
        }
        return false
}