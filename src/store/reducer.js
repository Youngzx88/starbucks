// 模块化 路由模块基本就是数据模块
import { combineReducers } from "redux";
// store 中央 
// 地方
import { reducer as menuReducer } from '../pages/menu/store/index'
import { reducer as searchReducer } from '../pages/search/store/index'
export default combineReducers({
    menu: menuReducer,
    search: searchReducer
})