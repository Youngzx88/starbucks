import React,{useState,useEffect}from 'react'
import {useNavigate} from 'react-router-dom'
import { Wrapper } from './style.js'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import NavBar from '../../components/navbar'
import ListItem from '../../components/listitem'
import LoadingV2 from '../../components/common/loading-v2/index.jsx'


function Menu(props) {
  const navigate = useNavigate();
  const {loading,menuList,tab} = props
  const {setMenuListDispatch,setTabDispatch} = props
  useEffect(()=>{
    setMenuListDispatch()
  },[tab])
  return (
    <Wrapper>
      <NavBar tab={tab}  setTabDispatch={setTabDispatch}/>
      {/* 过渡动画 */}
      {loading ? <LoadingV2/> : <ListItem menuList={menuList} tab={tab}/>}
      <div className="frap">
        <button id="featured-campaign-search" className="button_primary" rel="menu-search-overlay" onClick={()=>{navigate("/search")}}>搜索菜单</button>
      </div>
    </Wrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    loading: state.menu.loading,
    menuList: state.menu.menuList,
    tab: state.menu.tab
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setMenuListDispatch() {
      dispatch(actionCreators.getMenuList())
    },
    setTabDispatch(tabname){
      dispatch(actionCreators.getTab(tabname))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu)