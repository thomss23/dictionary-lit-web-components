import { css } from 'lit';

export default css`
    .type-container {
        display: flex;
        justify-content: space-between;
    }

    .word-type{
        font-size: 30px;
    }
    .separator {
        /* needs to be adjusted depending on the final font size of the word type */
        margin-top: 13px; 
        border-top: 1px solid #e2e2e2;
        width: 88%;
    }

    li {
        padding: 5px;
    }

    .example {
        color: #757575;
        margin: 4px;
    }

    .alternatives-container {
        display: flex;
        justify-content: space-between;
        gap: 5px;
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
        margin-top:10px;
    }

    #meaning {
        color: #757575;
    }
`