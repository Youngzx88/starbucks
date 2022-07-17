import React,{memo,useMemo} from 'react'
import { Wrapper,GoodWrapper } from './style'
import Lazyload from 'react-lazyload'
import loading from '../../assets/img/loading.gif'
import Scroll from '../../components/common/Scroll/'

const Good = ({goodItem}) => (
  <GoodWrapper>
    <div className="good">
      {/* lazyload组件，用placeholder存放懒加载时的图片 */}
      <Lazyload placeholder={
                <img width="120%" height="100%"
                    src={loading}
                />}>
      <img src={goodItem.img} alt=""/>
      </Lazyload>
      <div className="name">{goodItem.goods}</div>
    </div>
  </GoodWrapper>
)

export default memo(function ListItem({menuList,tab}) {
  return (
    <Scroll>
      <Wrapper>
        {
          menuList.filter((item)=>{
            return (item.title == tab || tab == '全部')
          }).map((item)=>{
            return <Good goodItem={item} key={item.id}/>
          })
        }
        <div className="tips">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实际产品以门店供应为准。</div>
      </Wrapper>
    </Scroll>
  )
})