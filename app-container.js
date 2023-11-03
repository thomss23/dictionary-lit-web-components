import {LitElement, html, css} from 'lit';

import './components/new-element'

export class AppContainer extends LitElement {
  static get styles() {
    return css`
      /* :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      } */

      
    `;
  }

  static get properties() {
    return {
      name: {type: String},
      count: {type: Number},
    };
  }

  constructor() {
    super();
    // this.name = 'World';
    // this.count = 0;
  }

  render() {
    return html`
      <new-element>
        
      </new-element>
    `;
  }

  // _onClick() {
  //   this.count++;
  //   this.dispatchEvent(new CustomEvent('count-changed'));
  // }

  // /**
  //  * Formats a greeting
  //  * @param name {string} The name to say "Hello" to
  //  * @returns {string} A greeting directed at `name`
  //  */
  // sayHello(name) {
  //   return `Hello, ${name}`;
  // }
}

window.customElements.define('app-container', AppContainer);
