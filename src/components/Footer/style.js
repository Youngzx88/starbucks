import styled from 'styled-components'

export const FooterWrapper = styled.div`
    width: 18.75rem;
    height: 2.5rem;
    background: #fffeff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    box-shadow: 0 0 4px rgb(0 0 0 / 12%);
    a {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        justify-content: space-around;
        color: #6b6b6b;
        &.active {
            color: #4ba468;
            background-color: #fff;
        }
        img{
            width: 2em;
            height: 2rem;
        }
        span{
            font-size: 12px;
        }
    }
` 