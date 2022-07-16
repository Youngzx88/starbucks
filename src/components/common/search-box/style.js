import styled from "styled-components";

export const  SearchWrapper = styled.div`
      width: 100%;
      height: 120px;
      .searchHead{
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        padding: 24px;
        button{
          float: right;
          border: 0;
          background: transparent;
          overflow: hidden;
          font-size: 18px;
          font-weight: 700;
        }
        button:after{
          content: '';
          clear: both;
          display: table;
        }
      }
      .search_box{
        width: 100%;
        box-sizing: border-box;
        display: flex;
        padding:24px;
        justify-content: space-between;
        input{
          flex:5;
          border: 0;
          outline: 0;
          font-size: 18px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.12);
          &.active{
            border-bottom: 1px solid #4ba568;
          }
        }
        i{
          font-size: 18px;
          float: right;
        }
      }
`