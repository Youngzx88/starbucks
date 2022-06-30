import styled from 'styled-components'

export const FooterWrapper = styled.div`
    width: 18.75rem;
    height: 2.5rem;
    background: #fffeff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    a {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        &.active {
            color: #4ba468;
            background-color: #fff;
        }
        img{
            width: 0.71428rem;
            height: 0.71428rem;
        }
        span{
            font-size: 12px;
        }
    }
` 