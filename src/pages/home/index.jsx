import React, { useRef } from 'react'
// import {Link} from 'react-router-dom'
import { Swiper } from 'antd-mobile'
import SwiperRef from 'antd-mobile/es/components/swiper'
import { Container,Header,LoopImg,PromotionWrapper,Club,TmallWrapper,CoffeehouseWrapper,Footerwrapper} from './style'
import img1 from '../../assets/img/swiper1_img1.png'
import img2 from '../../assets/img/swiper1_img2.jpeg'
import img3 from '../../assets/img/fruit.jpg'
import img4 from '../../assets/img/spoon.jpg'
import img5 from '../../assets/img/drink.jpg'
import img6 from '../../assets/img/coffee.jpg'


const swiper1_img = [img1,img2]
const items = swiper1_img.map((item, index) => (
  <Swiper.Item key={index} >
    <img src={item} alt="" />
  </Swiper.Item>
))

const swiper2_img = [img3,img4,img5,img6]
const items2 = swiper2_img.map((item, index) => (
  <Swiper.Item key={index}>
    <img src={item} alt="" />
  </Swiper.Item>
))

const Promotion = () => {
  return (
    <PromotionWrapper>
        <div className='img_style1'></div>
        <div className='img_style2'></div>
        <div className='img_style3'></div>
    </PromotionWrapper>
  )
}

const Tmall = () =>{
  return (
    <TmallWrapper>
        <h2>星巴克星选</h2>
        <p className='light'>在星巴克天猫旗舰店发现更多咖啡心意</p>
        <ul>
          <li>
            <a href="#">
              <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-card-01-update.png" alt="" />
              <p className='title'><strong>会员星礼包</strong></p>
              <p className='light'>星享卡新升级<br />更多心意好礼</p>
              <p className='know'>了解更多 ›</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-card-02.png" alt="" />
              <p className='title'><strong>星礼卡</strong></p>
              <p className='light'>用一份心礼<br />让心意相随</p>
              <p className='know'>了解更多 ›</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-eticket.png" alt="" />
              <p className='title'><strong>电子产品券</strong></p>
              <p className='light'>心意<br />从这一杯开始</p>
              <p className='know'>了解更多 ›</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-reserve.png" alt="" />
              <p className='title'><strong>咖啡生活</strong></p>
              <p className='light'>星巴克<br />用心制作</p>
              <p className='know'>了解更多 ›</p>
            </a>
          </li>
        </ul>
    </TmallWrapper>
  )
}
const Footer = () =>{
  return (
    <Footerwrapper> 
      <div> 
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/icpicon.png" alt=""/>沪公网安备 31010402000253号|沪ICP备17003747号
      </div>
    </Footerwrapper>
  )
}

export default function Home() {
  const ref = useRef<SwiperRef>(null)
  return (
    <Container>
        <Header>
          <span>心情惬意，来杯咖啡吧 ☕</span>
        </Header>

        <LoopImg>
          <div title='循环'>
            <Swiper loop autoplay className='sw'>{items}</Swiper>
          </div>  
        </LoopImg>
        
        <Promotion></Promotion>

        <Club>
          <div className="head">
            <h2>星享俱乐部</h2>
            <p>开启您的星享之旅，星星越多、会员等级越高、好礼越丰富。<a>了解更多&nbsp;&gt;</a></p>
          </div>
          <div className="btn">
            <a className='zhuce'>注册</a>
            <a className='denglu'>登录</a>
          </div>
          <div className="image">
            <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/logo-msr-20210601.svg" alt="" />
          </div>
        </Club>

        <Tmall></Tmall>

        <CoffeehouseWrapper>
          <h2>1912 派克街 | 咖啡星讲堂</h2>
          <p className='light'>了解更多星巴克咖啡文化</p>
          <div className='swiper'>
            <Swiper
              // className="swiper"
              className='sw'
              slideSize={80}
              style={{
                '--track-padding': ' 0 0 16px',
              }}
              defaultIndex={0}
            >
              {items2}
            </Swiper>
          </div>
        </CoffeehouseWrapper>

        <Footer></Footer>
    </Container>
  )
}
