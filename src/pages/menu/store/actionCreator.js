import {
  getMenuListRequest,
} from '../../../api/request'
import * as actionTypes from './constants'

export const changeMenuList = (data) => ({
  type: actionTypes.CHANGE_MENULIST,
  data: data
})

export const getMenuList = () => {
  return (dispatch) => {
    getMenuListRequest().then(data => {
          dispatch(changeMenuList(data))
          dispatch(changeLoading(false))
      })
  }
}

export const changeLoading = (data)=>({
  type: actionTypes.CHANGE_LOADING,
  data
})


export const changeTab = (data)=>(
  {
    type: actionTypes.CHANGE_TAB,
    data: data  
  }
)

export const getTab = (tabname) => {
  return (dispatch) => {
      dispatch(changeTab(tabname))
  }
}