import styled from "styled-components";


export const Container = styled.div`
    position:fixed;
    height: 100vh;
    width: 100%;
    z-index: 100;
    /* padding: 24px; */
    box-sizing: border-box;
    overflow: hidden;
    transform-origin: right bottom;
    /* CSSTranstion 过度类型给children  */
    &.fly-enter,&.fly-appear {
        opacity: 0;
        /* 启用GPU加速 */
        transform: translate3d(100%, 0, 0);
    }
    &.fly-enter-active, &.fly-apply-active {
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit {
        opacity: 1;
        transform: translate3d(0,0,0)
    }
    &.fly-exit-active {
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
`

export const ShortcutWrapper = styled.div`
    position: absolute;
    color: black;
    top: 8rem;
    width: 100%;
    display: ${props => props.show ? "" : "none"};
    h1{
        width: 4.8rem;
        box-sizing: border-box;
        height: 1.5rem;
        font-size: 14px;
        margin-left: 1.2rem;
        padding: 0.1rem 0.6rem;
        top: -1rem;
        color: white;
        position: absolute;
        background-color: #00A862;
        line-height: 26px;
        text-align: center;
        font-weight: 400;
    }
    h2{
        width: 15rem;
        box-sizing: border-box;
        height: 1.5rem;
        font-size: 14px;
        margin-left: 1.2rem;
        padding: 0.1rem 0.6rem;
        top: -1rem;
        color: black;
        position: absolute;
        line-height: 26px;
        font-weight: 400;
    }
`

export const HotKey = styled.div`
    position: absolute;
    h1{
        width: 4.8rem;
        box-sizing: border-box;
        height: 1.5rem;
        font-size: 14px;
        margin-left: 1.2rem;
        padding: 0.1rem 0.6rem;
        top: -1rem;
        color: white;
        position: absolute;
        background-color: #00A862;
        line-height: 26px;
        text-align: center;
        font-weight: 400;
    }
    .hot{
        display: flex;
        flex: 1;
    }
`
export const GoodWrapper = styled.div`
  width: 8.0625rem;
  height: 10.75rem;
  box-sizing: border-box;
  margin: 0.65rem;
  padding: 0.15rem;
  display: inline-block;
  .good{
    flex-direction: column;
  }
  img{
    width:8.0625rem;
    height: calc(width);
    box-shadow: 0 0.05rem 0.05rem 0.05rem rgb(0 0 0 / 12%);
    border-radius: 50%;
  }
  .name{
    font-size: 16px;
    text-align: center;
    letter-spacing:0.1rem;
    font-weight: 500;
  }

`