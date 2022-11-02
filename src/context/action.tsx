import { actionType } from "./action_type"
import axios from "axios"


export  function loginAction(dispatch,payload){
    dispatch({ type: actionType.login, payload })
}


export async function fetchDataAction(dispatch,offset){
    let payload: Object = {
        characters: []
    }
    try {
        const response = await axios.get('https://www.breakingbadapi.com/api/characters?limit=12&offset='+ offset);
        if (response) {
            payload = {
                characters: response.data
            }
        }
    } catch (error) {
        console.log('Error : ' + { error });
        payload = {
            errorMessage : 'error in fetch data',
        }
    }
    dispatch({
        type: actionType.characters, payload
    });
}

export function statusAction(dispatch , payload) {
    dispatch({ type: actionType.status , payload})
}


export function deleteDetailsAction(dispatch) {
    dispatch({ type: actionType.delete })
}


export function paginationAction(dispatch , payload){
    dispatch({type: actionType.pagination , payload})
} 