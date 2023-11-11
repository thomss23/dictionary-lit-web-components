import {LitElement, html, css} from 'lit';

import './content-element'
import './footer-element'
import './searchbar-component'
import './header-element'

export class Main extends LitElement {
    static get styles() {
      return css`
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
    }
  
    constructor() {
      super();
    }
  
    render() {
      return html`
        <div class="container">
            <header-element></header-element>
            <searchbar-component></searchbar-component>
            <content-element></content-element>
            <footer-element></footer-element>
        </div>
      `;
    }
  
  
}
  
window.customElements.define('main-element', Main);
  