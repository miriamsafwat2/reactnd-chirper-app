import { RECEIVE_TWEETS, TOGGLE_TWEET } from "../actions/tweets";

export default function tweets(state={}, action){
    switch(action.type){
    case RECEIVE_TWEETS:
        return{
            ...state,
            ...action.tweets
        }

        case TOGGLE_TWEET:
            return {
              ...state,
              [action.id]: {
                ...state[action.id],
                likes: state[action.id].likes.includes(action.authedUser)
                  ? state[action.id].likes.filter(
                      (author) => author !== action.authedUser
                    )
                  : state[action.id].likes.concat([action.authedUser]),
              },
            };

        default:
            return state;
    }
}