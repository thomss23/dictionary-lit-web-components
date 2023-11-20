import { css } from 'lit';

export default css`

    .type-container {
        display: flex;
        justify-content: space-between;
    }

    .word-type{
        font-size: 24px;
        font-weight: bold;
    }
    .separator {
        margin-top: 13px;
        border-top: 1px solid #e2e2e2;
        width: calc(100% - 28%); 
    }

    li {
        padding: 5px;
        font-size: 18px;
    }

    .example {
        color: #757575;
        margin: 4px;
        font-size: 18px;
    }

    .alternatives-container {
        display: flex;
        justify-content: space-between;
        gap: 5px;
        /* flex-wrap: wrap; */
    }
    .alternative {
        width: 100%;
        white-space: nowrap;
        color: #8f19e8;
        font-weight: bold;
    }

    .main-container {
        display: flex;
        justify-content: flex-start;
        gap: 25px;    
    }

    #meaning {
        margin-top: 30px;
        color: #757575;
        font-size:20px;
    }


    ul {
        list-style: none
    }

    li::before {
        content: "•"; 
        color: #8f19e8;
        display: inline-block; 
        width: 1.5em;
        margin-left: -1.3em
    }

    p {
        font-size: 20px;
    }

    p:not(.alternative) {
        color: #757575;
    }

`