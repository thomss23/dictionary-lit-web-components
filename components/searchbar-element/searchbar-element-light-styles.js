import { css } from 'lit';

export default css`
    input {
        box-sizing: border-box; 
        width: 100%;
        height: 50px;
        border-radius: 10px;
        font-size: 20px;
        border: none;
        padding: 5px 5px 5px 5px;
        background-color: #F4F4F4;
        margin-bottom: 25px;  
        padding: 20px;
    }

    input:focus{
        outline: none;
        border: 2px solid #A445ED
    }

    img {
        width: 20px;
        height: 20px;
        cursor: pointer;
        position: absolute;
        top: 85px;
        right: 20px;
        transition: transform 0.2s;
    }

    img:hover {
        transform: scale(1.2);
    }
    
    .error-message {
        color: #FF5252;
        position: relative;
        top:-15px; 
    }
`;
