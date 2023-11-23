import { css } from 'lit';

export const commonStyles = css`
    .separator {
        /* needs to be adjusted depending on the final font size of the word type */
        margin-top: 13px; 
        border-top: 1px solid #e2e2e2;
        width: 88%;
    }

    .footer-container {
        margin-top: 15px;
        padding-bottom: 35px;
        font-size: 14px;
    }
    
    a {
        text-decoration: none;
        color: grey;
        text-decoration: underline;
    }

    span {
        font-size: 14px;
        color: #757575;
    }
`