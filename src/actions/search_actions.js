import {
    SEARCH_CHANGE,
    SEARCH_SUBMIT,
    SEARCH_SUCCESS,
    SEARCH_FAIL,
    SEARCH_INITIATE
} from './types';
const mtg = require('mtgsdk')



export const searchChange = (text) => {
    console.log("text", text)
    return {
        type: SEARCH_CHANGE,
        payload: text
    }
}

export const searchSubmit = (text) => async(dispatch) => {

        
    // return (dispatch) => {
    //     console.log("now submitting to API")
    //     dispatch({ 
    //         type: SEARCH_SUBMIT,
    //         payload: text
    //     })
    // }

    try {
        console.log("submitting a search for: ", text)
        mtg.card.where({name: text})
            .then(results => {
                dispatch({
                    type: SEARCH_SUCCESS,
                    payload: results
                })
            })

    } catch(e){
        console.log(e)
        return (dispatch) => {
            console.log("now submitting to API")
            dispatch({ 
                type: SEARCH_FAIL
            })
        }
    }
}