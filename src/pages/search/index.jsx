import React,{useState,useEffect,useRef} from 'react'
import Lazyload from 'react-lazyload'
import SearchBox from '../../components/common/search-box';
import Scroll from '../../components/common/Scroll/'
import { connect } from 'react-redux'
import { getHotKeyMenu,getSuggestMenuList} from './store/actionCreator'
import { CSSTransition } from 'react-transition-group'
import { Container,ShortcutWrapper} from './style'
import { HotKey,GoodWrapper} from './style';
import loading from '../../assets/img/loading.gif'

function Search(props) {
const {hotList,suggestList} = props;
const {getHotKeyMenuDispatch,getSuggestMenuDispatch} = props
const [query, setQuery] = useState('')
const [show, setShow] = useState(false);

useEffect(()=>{
    setShow(true)
},[])
useEffect(()=>{
    if(hotList.length == 0){
        getHotKeyMenuDispatch();
    }
},[])
useEffect(()=>{
    getSuggestMenuDispatch(query);
},[query])
//用于在子组件searchBox执行，更新父组件的query
const handleQuery = (q) =>{
    setQuery(q)
}
const renderHotKey = () =>{
    return (
        <div>  
            {hotList.map((item)=>{
                return (
                    <GoodWrapper key={item.id}>
                    <div className="good">
                        <Lazyload placeholder={
                                        <img width="100%" height="100%"
                                            src={loading}
                                        />}>
                            <img src={item.img} alt="1"/>
                        </Lazyload>
                        <div className="name">{item.goods}</div>
                    </div>
                    </GoodWrapper>
                )
            })}
        </div>
    )
}
const renderSuggestLsit = () => {
    return (
        <>  
            {suggestList.filter(item=>{
                return item.goods.indexOf(query) != -1
            }).map((item)=>{
                return (
                    <GoodWrapper key={item.id}>
                    <div className="good">
                        <Lazyload placeholder={
                                        <img width="100%" height="100%"
                                            src={""}
                                        />}>
                            <img src={item.img} alt=""/>
                        </Lazyload>
                        <div className="name">{item.goods}</div>
                    </div>
                    </GoodWrapper>
                )
            })}
        </>
    )
}

//主体jsx
return (
    <CSSTransition
    in={show}
    timeout={400}
    appear={true}
    classNames="fly"
    unmountOnExit
    onExit={() => {
        navigate(-1)
    }}
    > 
        <Container>
            <SearchBox
                newQuery={query}
                handleQuery={handleQuery}>
            </SearchBox>
            <ShortcutWrapper show={!query}>
                <Scroll>
                        <HotKey>
                            <h1 className="title">大家都在搜</h1>
                            <div className='hot'>
                                {renderHotKey()}
                            </div>
                        </HotKey>
                </Scroll>
            </ShortcutWrapper>
            <ShortcutWrapper show={query}>
                <Scroll>
                    {   
                        suggestList.filter(item=>{
                            return item.goods.indexOf(query) != -1
                        }).length>0
                        ? 
                            renderSuggestLsit() 
                        : 
                        <HotKey>
                        <h2 className="title">未找到结果猜你喜欢</h2>
                        {renderHotKey()}
                        </HotKey>
                    }
                </Scroll>
            </ShortcutWrapper>
        </Container>
    </CSSTransition>
    )
}

const mapStateToProps = (state) => {
return {
    hotList: state.search.hotList,
    suggestList: state.search.suggestList
}
}
const mapDispatchToProps = (dispatch) => {
return {
    getHotKeyMenuDispatch() {
        dispatch(getHotKeyMenu());
    },
    getSuggestMenuDispatch(query){
        dispatch(getSuggestMenuList(query));
    },
}
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search))