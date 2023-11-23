import { css } from 'lit';

export default css`

    loading-element {
        position: relative;
        top: 50px;
        left: 45%;
    }

    .content-container {
        width:100%;
        display:flex;
        justify-content: space-between;
    }
    
    img {
        cursor: pointer;
    }

    h1 {
        margin-bottom: 5px;
        font-size: 64px;
        font-weight: bold;
    }

    #phonetic {
        margin-top: 0px;
        color: #8f19e8;
        font-size: 24px;
    }

    @media (max-width: 650px) {
        loading-element {
            position: relative;
            top: 50px;
            left: 40%;
        }
    } 

`