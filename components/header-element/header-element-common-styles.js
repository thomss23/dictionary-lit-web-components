import { css } from 'lit';

export const commonStyles = css`

    .header-container {
        display: flex;
        justify-content: space-between;
        margin-top: 35px;
        margin-bottom: 35px;
    }

    .logo {
        height: 30px;
        width: 30px;
    }

    .right {
        display: flex;
        align-items: center; 
    }

    .font-text {
        margin-right: 10px;
        font-size: 18px;
        font-weight: bold;
    }

    .arrow {
        height: 15px;
        width: 15px;
        margin-left: 5px;
        cursor: pointer;
    }

    .separator {
        border-right: 1px solid #e2e2e2;
        margin-right: 30px;
        margin-left: 20px;
        height:35px;
    }

    .toggle-switch-container {
        display: flex;
        align-items: center; 
    }

    .moon {
        height: 20px;
        width: 20px;
        margin-left: 10px;
    }  
  
`;
