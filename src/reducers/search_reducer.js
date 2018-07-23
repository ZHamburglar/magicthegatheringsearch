import {
    SEARCH_CHANGE,
    SEARCH_SUBMIT,
    SEARCH_SUCCESS,
    SEARCH_FAIL,
    SEARCH_INITIATE
} from '../actions/types';


const INITIAL_STATE = {
    searchItem: '',
    cards: [],
    loading: false,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SEARCH_CHANGE:
            console.log('This is changed to: ', action.payload)
            return {...state, searchItem: action.payload}
        case SEARCH_SUBMIT:
            console.log("Search submitted: ", action.payload)
            return {...state, searchItem:'', loading: true}
        case SEARCH_FAIL:
            console.log('search failed')
            return {...state, loading: false, error: 'Search Failed To Run'}
        case SEARCH_SUCCESS:
            console.log("SEARCH SUCCESS", action.payload)
            return {...state, loading: false, cards: action.payload, error:''}
        default:
            return state;
    };
}