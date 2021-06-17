import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";
import { getInitialData } from "../utils/api";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = 'tylermcginnis'

export function handleReceiveData(){
    return(dispatch){
        return getInitialData()
            .then(({users, tweets}) => 
            {
                dispatch(receiveUsers(users)),
                dispatch(receiveTweets(tweets)),
                dispatch(setAuthedUser(AUTHED_ID))
            })
        }
}