import {LitElement, html, css} from 'lit';

export class SearchBar extends LitElement {
    static get styles() {
      return css`
        :host {
            width: 100%;
        }

        .container {
            display: flex;
            justify-content: center;
        }

        input {
            height: 36px;
            width: 50%;

            border: 1px solid #CDCDCD;
            border-radius: 10px;
            background-color: #F4F4F4;
        }

        img {
            width: 20px;
            height: 20px;
            margin-right: 90x; /* Adjust margin as needed */
        }
        /* .container {
            display:flex;
            justify-content: center;
        }
        input {
            width: 50%;
            height: 36px;
            border: 1px solid #CDCDCD;
            border-radius: 10px;
            background-color: #F4F4F4;
        }

        img {
            padding-right: 20px;
        } */
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
  