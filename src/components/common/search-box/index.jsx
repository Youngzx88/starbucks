import React,{useState,useEffect,useRef,useMemo,memo} from 'react'
import { SearchWrapper } from './style'
import { useNavigate } from 'react-router-dom'
import { debounce } from '../../../api/utils'

export default  memo(function SearchBox(props) {
  let queryRef = useRef();
  let navigate = useNavigate();

  const {handleQuery} = props
  const [query,setQuery] = useState('')

  //声明周期,一进这个页面就focus
  useEffect(() => {
    queryRef.current.focus();
  }, [])

  useEffect(() => {
    handleQueryDebounce(query)
  }, [query])

  //函数
  let handleQueryDebounce =  useMemo(() => {
    return debounce(handleQuery,800)
  }, [handleQuery])

  const handleChange = (e) =>{
    let val = e.currentTarget.value
    setQuery(val)
  }
  
  return (
    <SearchWrapper>
        <div className="searchHead">
          <button className='iconfont icon-cuowu' onClick={()=>navigate(-1)}></button>
        </div>
        <div className="search_box">
          <input type="text" className='box' placeholder='搜索菜单' onChange={handleChange}  ref={queryRef}>
          </input>
          <i className='iconfont icon-sousuo' onChange={handleChange}></i>
        </div>
    </SearchWrapper>
  )
})
