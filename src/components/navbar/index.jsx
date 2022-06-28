import React, { useEffect, useState } from 'react'
import { Wrapper } from './style'

export default function NavBar(props) {
  // 控制title的切换
  const {Fn} = props
  const [tab,setTab] = useState("全部")
  const changeTab = (tabname)=>{
    setTab(tabname)
    Fn && Fn(tabname);
  }

  return (
    <Wrapper>
      <nav className='nav-title'>菜单</nav>
      <div className="tabs-wrapper">
        <ul className='subcategories'>
          <li className={tab=="全部"?'active':""}  onClick={()=>changeTab("全部")}>全部</li>
          <li className={tab=="饮料"?'active':""} onClick={()=>changeTab("饮料")}>饮料</li>
          <li className={tab=="美食"?'active':""} onClick={()=>changeTab("美食")}>美食</li>
          <li className={tab=="咖啡产品"?'active':""} onClick={()=>changeTab("咖啡产品")}>咖啡产品</li>
          <li className={tab=="商品"?'active':""} onClick={()=>changeTab("商品")}>商品</li>
        </ul>
      </div>      
    </Wrapper>
  )
}
