import * as actionTypes from './constants'

const defaultState = {
    loading: true,
    menuList:[],
    tab:"全部"
}

export default (state = defaultState,action) => {
    switch(action.type){
    case actionTypes.CHANGE_MENULIST:
        return {
            ...state,
            menuList: action.data
        }
    case actionTypes.CHANGE_LOADING:
        return {
            ...state,
            loading: action.data
        }
    case actionTypes.CHANGE_TAB:
        return{
            ...state,
            tab: action.data
        }
    default:
        return state;
    }
}