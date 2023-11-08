import {LitElement, html, css} from 'lit';

export class SearchBar extends LitElement {
    static get styles() {
      return css`
        .container {
          margin: 0 auto;
          width: 100%;
          max-width: 600px;
          height: 45px;
          text-align: center;
          position: relative;
        }

        input {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          font-size: 20px;
          padding: 5px 5px 5px 5px;
          border: none;
          background-color: #F4F4F4;          
        }

        input:focus{
          outline: none;
        }

        img {
          width: 20px;
          height: 20px;
          cursor: pointer;
          position: absolute;
          top:16px;
          right: 5px;
          transition: transform 0.2s;
        }

        img:hover {
          transform: scale(1.2);
        }


      @media (max-width: 650px) {
        .container {
          width: 400px;
          margin: 0 auto;
          max-width: 500px;
          height: 45px;
          text-align: center;
          position: relative;
        }

        input {
          font-size: 14px; 
        }
      }
      `;
    }
  
    // static get properties() {

    // }
  
    constructor() {
      super();
    //   this.name = 'World';
    //   this.count = 0;
    }
  
    render() {
      return html`
        <div class="container">
            <input type="text">
            <img src='/assets/images/icon-search.svg'/>
        </div>
      `;
    }
  
  
}
  
window.customElements.define('search-bar', SearchBar);
  