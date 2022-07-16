import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Menu from '../pages/menu'
import More from '../pages/more'
import Home from '../pages/home'
import Account from '../pages/account'
import Store from '../pages/store'
import Search from '../pages/search/'

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/store' element={<Store/>}></Route>
      <Route path='/account' element={<Account/>}></Route>
      <Route path='/menu' element={<Menu/>}></Route>
      <Route path='/more' element={<More/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
    </Routes>
  )
}
