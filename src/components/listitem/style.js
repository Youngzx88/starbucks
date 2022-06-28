import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f7f7f7;
`

export const GoodWrapper = styled.div`
  width: 43%;
  height: 215px;
  box-sizing: border-box;
  margin: 13px;
  padding: 3px;
  display: inline-block;
  .good{
    flex-direction: column;
  }
  img{
    width: 100%;
    height: calc(width);
    box-shadow: 0 1px 1px 1px rgb(0 0 0 / 12%);
    border-radius: 50%;
  }
  .name{
    text-align: center;
    letter-spacing:2px;
    font-weight: 500;
  }
  
`