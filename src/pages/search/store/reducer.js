import * as actionTypes from './constants'

const defaultState = {
    enterLoading: false,
    suggestList: [],
    hotList:[],
}

export default (state = defaultState,action) => {
    switch(action.type){
    case actionTypes.CHANGE_HOT_LIST:
        return {
            ...state,
            hotList: action.data
        }
    case actionTypes.CHANGE_SUGGEST_LIST:
        return {
            ...state,
            suggestList: action.data
        }
    default:
        return state;
    }
}