import { css } from 'lit';

export default css`

    .container {
        margin: 0 auto;
        width: 100%;
        max-width: 600px;
        height: 45px;
        position:relative;
    }
        
    @media (max-width: 650px) {
        .container {
            width: 400px;
            margin: 0 auto;
            max-width: 500px;
            height: 45px;
            position: relative;
        }
    } 
  
`;
