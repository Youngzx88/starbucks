import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import classnames from 'classnames'
export default function Footer(props) {
    const { pathname } = useLocation()
    useEffect(()=>{
        
    },[pathname])
    return (
            pathname!="/search" && <FooterWrapper>
            <Link to="/home" className={classnames({active:pathname == '/home' || pathname == '/' })}>
                {pathname == '/home' ? 
                    <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-home-active.svg" alt="" className='active'/>:
                    <img src='https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-home.svg'/>   
                } 
                <span>主页</span>
            </Link>
            <Link to="/store" className={classnames({active:pathname == '/store'})}>
                {pathname == '/store' ? 
                    <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-stores-active.svg" alt="" className='active'/>:
                    <img src='https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-stores.svg'/>   
                } 
                <span>门店</span>
            </Link>
            <Link to="/account" className={classnames({active:pathname == '/account'})}>
                {pathname == '/account' ? 
                    <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-account-active.svg" alt="" className='active'/>:
                    <img src='https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-account.svg'/>   
                } 
                <span>我的账户</span>
            </Link>
            <Link to="/menu" className={classnames({active:pathname == '/menu'})}>
                {pathname == '/menu' ? 
                    <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-menu-active.svg" alt="" className='active'/>:
                    <img src='https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-menu.svg'/>   
                } 
                <span>菜单</span>
            </Link>
            <Link to="/more" className={classnames({active:pathname == '/more'})}>
                {pathname == '/more' ? 
                    <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-more-active.svg" alt="" className='active'/>:
                    <img src='https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-more.svg'/>   
                } 
                <span>更多</span>
            </Link>
        </FooterWrapper>
    )
}
