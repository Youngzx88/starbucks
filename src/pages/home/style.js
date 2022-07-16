import styled from "styled-components";

export const Container = styled.div`
    width: 18.75rem;
    .content {
    height: 427px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    user-select: none;
    }
`

export const Header = styled.div`
    width: 100%;
    height: 62.8px;
    font-size: 22px;
    box-sizing: border-box;
    font-weight: 900;
    letter-spacing: 0.4px;
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    line-height: 25.6px;
    /* background-color: red; */
    -webkit-font-smoothing: antialiased;

`

export const LoopImg = styled.div`
    margin-bottom: 10px;
    .sw{
        width: 18.75rem;
        height: 427px;
    }
`

export const PromotionWrapper =styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0px 12px;
    display: flex;
    flex-direction: column;
    background-image:linear-gradient(#ffffff,#f7f7f7);
    .img_style1{
        width: 100%;
        background-image: url(https://www-static.chinacdn.starbucks.com.cn/prod/images/pages/tmall-2020-06-29-zh.jpg);
        background-size: cover;
        height: 226.59px;
        margin-bottom: 15px;
        overflow: hidden;
    }
    .img_style2{
        width: 100%;
        background-image: url(https://www-static.chinacdn.starbucks.com.cn/prod/images/pages/starbucks-design-studio-web-china.jpg);
        background-size: cover;
        height: 226.59px;
        margin-bottom: 15px;
    }
    .img_style3{
        width: 100%;
        background-image: url(https://www-static.chinacdn.starbucks.com.cn/prod/images/pages/homepage-career-cn.jpg);
        background-size: cover;
        height: 226.59px;
        margin-bottom: 15px;
    }
`

export const Club = styled.div`
    padding: 0 16px;
    background-color: #fffffe;
    height: 352px;
    padding: 0 24px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.56);
    .head{
        padding-top: 24px;
        text-align: center;
        margin: 0 auto;
        padding-left: 24px;
        padding-right: 24px;
        p{
            line-height: 180%;
            margin-bottom: 24px;
        }
        a{
            color: #C2A661;
        }
        h2{
            color: #000000;
            font-weight:400;
            letter-spacing: 0.4px;
            margin-bottom: 12px;
        }
    }
    .btn{
            width: 100%;
            display: flex;
            justify-content: space-around;
            margin-bottom: 5px;
            a{  
                width: 32px;
                height: 25px;
                color: #4ba568;
                border-radius: 20px;
                padding: 6px 18px;
            }
        }
    .zhuce{
        margin-left: 90px;
        border: 1px solid #4ba568;
    }
    .denglu{
        border: 1px solid #4ba568;
        margin-right: 90px;
    }
    .image{
        padding:30px;
        text-align: center;
    }
`

export const TmallWrapper = styled.div`
    width: 100%;
    height: 604px;
    padding: 36px 0px;
    background-color: #f8f6f8;
    .know{
        color: #C2A661;
    }
    .title{
        padding-top: 40px;
        line-height: 140%;
        margin: 8px 0px;
    }
    h2{
        text-align: center;
        margin-bottom: 12px;
        font-size: 20px;
    }
    .light{
        color: rgba(0, 0, 0, 0.56);
        text-align: center;
        font-size: 16px;
        margin-bottom: 24px;
    }
    ul{
        display: flex;
        justify-content: space-around;    
        flex-wrap: wrap;
        li{
            margin-top: 35px;
            box-shadow: 0 1px 1px 1px rgb(0 0 0 / 12%);
            width: 167px;
            height: 190px;
            list-style: none;
            background-color: #fefffe;
            margin-bottom: 30px;
            a{
                
                position: relative;
                color: black;
                text-align: center;
                text-decoration: none;  
                img{
                    position: absolute;
                    width: 101.367px;
                    height: 72px;
                    left: 30px;
                    top: -30px;
                }
            }
        }
    }
`

export const CoffeehouseWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 344px;
    padding: 36px 0px;
    text-align: center;
    h2{
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 20px;
    }
    .light{
        color: rgba(0, 0, 0, 0.56);
        line-height: 160%;
        letter-spacing: 0.4px;
        margin-bottom: 24px;
    }
    .sw{
        box-sizing: border-box;
        width: 18.75rem;
        height: 180px;

        img{
            height: 180px;
            max-width: 254px;
            max-height: 100%;
        }
    }
`


export const Footerwrapper = styled.div`
    width: 100%;
    height: 50px;
    color: #666666;
    padding-bottom: 30px;
    text-align:center;
    img{
            width: 10px;
            height: 10px;
        }
`