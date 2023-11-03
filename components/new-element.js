import {LitElement, html, css} from 'lit';

export class NewElement extends LitElement {
    // static get styles() {
    //   return css`
    //     :host {
    //       display: block;
    //       border: solid 1px gray;
    //       padding: 16px;
    //       max-width: 800px;
    //     }
    //   `;
    // }
  
    // static get properties() {

    // }
  
    constructor() {
      super();
    //   this.name = 'World';
    //   this.count = 0;
    }
  
    render() {
      return html`
        <h1>WTF</h1>
      `;
    }
  
  
}
  
window.customElements.define('new-element', NewElement);
  