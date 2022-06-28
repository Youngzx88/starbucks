import React,{useState,useEffect}from 'react'
import { Wrapper } from './style.js'
import NavBar from '../navbar/index.jsx'
import { Toast } from 'react-weui'
import {getMenuList} from '../../api/request'
import ListItem from '../listitem'
import EmptyItem from '../emptylist'

export default function Menu() {
  const [loading,setLoading]=useState(false);
  const [menuList,setMenuList] = useState([0])
  const [tab,setTab] = useState("全部")

  const Fn = (tab) =>{
    setTab(tab)
  }
  
  useEffect(() => { 
    setLoading(true);
    (async()=>{
      const {remainlist} = await getMenuList({tab});
      setMenuList(remainlist)
    })()
    setLoading(false)
  },[tab])
  
  return (
    <Wrapper>
      <NavBar tab={tab} Fn={Fn}/>
      {/* 过渡动画 */}
      {<Toast show={loading} icon="loading">加载中...</Toast>}
      {menuList.length>0 ? <ListItem menuList={menuList}/> : <EmptyItem/>}
    </Wrapper>
  )
}
