import styled from "styled-components";

export const Container = styled.div`
    width: 18.75rem;
    .content {
    height: 21.35rem;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    user-select: none;
    }
`

export const Header = styled.div`
    width: 18.75rem;
    height: 3.14rem;
    font-size: 22px;
    box-sizing: border-box;
    font-weight: 900;
    letter-spacing: 0.4px;
    padding-top: 0.8rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    line-height: 1.28rem;
    /* background-color: red; */
    -webkit-font-smoothing: antialiased;

`

export const LoopImg = styled.div`
    margin-bottom: 0.5rem;
    .sw{
        width: 18.75rem;
        height: 21.35rem;
    }
    img{
            max-width: 18.75rem;
            height: 21.35rem;
    }
`

export const PromotionWrapper =styled.div`
    width: 18.75rem;
    box-sizing: border-box;
    padding: 0rem 0.6rem;
    display: flex;
    flex-direction: column;
    background-image:linear-gradient(#ffffff,#f7f7f7);
    .img_style1{
        width: 100%;
        background-image: url(https://www-static.chinacdn.starbucks.com.cn/prod/images/pages/tmall-2020-06-29-zh.jpg);
        background-size: cover;
        height: 11.3925rem;
        margin-bottom: 0.75rem;
    }
    .img_style2{
        width: 100%;
        background-image: url(https://www-static.chinacdn.starbucks.com.cn/prod/images/pages/starbucks-design-studio-web-china.jpg);
        background-size: cover;
        height: 11.3925rem;
        margin-bottom: 0.75rem;
    }
    .img_style3{
        width: 100%;
        background-image: url(https://www-static.chinacdn.starbucks.com.cn/prod/images/pages/homepage-career-cn.jpg);
        background-size: cover;
        height: 11.3925rem;
        margin-bottom: 0.75rem;
    }
`

export const Club = styled.div`
    padding: 0 0.8rem;
    background-color: #fffffe;
    height: 17.6rem;
    padding: 0 1.2rem;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.56);
    .head{
        padding-top: 1.2rem;
        text-align: center;
        margin: 0 auto;
        padding-left: 1.2rem;
        padding-right: 1.2rem;
        p{
            line-height: 180%;
            margin-bottom: 1.2rem;
        }
        a{
            color: #C2A661;
        }
        h2{
            color: #000000;
            font-weight:400;
            letter-spacing: 0.4px;
            margin-bottom: 0.6rem;
        }
    }
    .btn{
            width: 100%;
            display: flex;
            justify-content: space-around;
            margin-bottom: 0.05rem;
            a{  
                width: 2.6rem;
                text-align: center;
                /* height: 1.25rem; */
                color: #4ba568;
                border-radius: 20px;
                padding: 0.3rem 0.9rem;
            }
        }
    .zhuce{
        margin-left: 4rem;
        border: 1px solid #4ba568;
    }
    .denglu{
        border: 1px solid #4ba568;
        margin-right: 4rem;
    }
    .image{
        padding:1.5rem;
        text-align: center;
    }
`

export const TmallWrapper = styled.div`
    width: 100%;
    height: 30.2rem;
    padding: 1.8rem 0rem;
    background-color: #f8f6f8;
    .know{
        color: #C2A661;
    }
    .title{
        padding-top: 2rem;
        line-height: 140%;
        margin: 0.4rem 0rem;
    }
    h2{
        text-align: center;
        margin-bottom: 0.6rem;
        font-size: 20px;
    }
    .light{
        color: rgba(0, 0, 0, 0.56);
        text-align: center;
        font-size: 16px;
        margin-bottom: 1.2rem;
    }
    ul{
        display: flex;
        justify-content: space-around;    
        flex-wrap: wrap;
        li{
            margin-top: 1.5rem;
            box-shadow: 0 1px 1px 1px rgb(0 0 0 / 12%);
            width: 8.35rem;
            height: 9.5rem;
            list-style: none;
            background-color: #fefffe;
            margin-bottom: 1.5rem;
            a{
                
                position: relative;
                color: black;
                text-align: center;
                text-decoration: none;  
                img{
                    position: absolute;
                    width: 5.06835rem;
                    height: 3.6rem;
                    left: 1.5rem;
                    top: -1.5rem;
                }
            }
        }
    }
`

export const CoffeehouseWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 17.2rem;
    padding: 1.8rem 0rem;
    text-align: center;
    h2{
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 1rem;
    }
    .light{
        color: rgba(0, 0, 0, 0.56);
        line-height: 160%;
        letter-spacing: 0.4px;
        margin-bottom: 1.2rem;
    }
    .sw{
        box-sizing: border-box;
        width: 18.75rem;
        height: 9rem;

        img{
            height: 9rem;
            max-width: 12.7rem;
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