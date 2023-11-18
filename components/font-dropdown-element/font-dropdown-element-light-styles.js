import { css } from 'lit';

export default css`
    .dropdown {
        border-radius: 10px;
        box-sizing: border-box; 
        position: absolute;
        top: 100%;
        left: 320px;
        width: 150px; 
        background-color: #FFFFFF;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1;
        padding: 10px;
    }

    .option {
        padding: 10px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .option:hover {
        color: #A445ED;
    }
`