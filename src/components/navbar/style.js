import styled from "styled-components";

export const Wrapper = styled.div`
  padding-left: 0.8rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  box-sizing: border-box;
  width: 18.75rem;
  height: 5.17rem;
  font-family: "Gotham", Helvetica, Arial, "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  .nav-title{
    font-weight: 700;
    font-size: 22px;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 0.6rem;
  }
  .subcategories{
    font-size: 16px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    -webkit-overflow-scrolling: touch;
    margin-bottom: -0.6rem;
    white-space: nowrap;
  }
  li{
    display: inline-block;
    padding-top: 0.6rem;
    padding-bottom: 0.15rem;
    margin-right: 0.9rem;
    &.active{
      border-bottom: 0.15rem solid rgb(0, 168, 98);
      color: rgba(0, 0, 0, 0.87);
      font-weight: 700;
      transition: all 0.2s;
    }
  }
  
`