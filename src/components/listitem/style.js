import styled from "styled-components";

export const Wrapper = styled.div`
  width: 18.75rem;
  background-color: #f7f7f7;
  .tips{
    display: block;
    margin-top: 2.4rem;
    color: rgba(0, 0, 0, 0.38);
    font-size: 0.7rem;
    padding-bottom: 20rem;
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
    height: 8.0625rem;
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