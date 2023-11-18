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

    p {
        margin: 0;
    }
`