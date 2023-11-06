import {LitElement, html, css} from 'lit';

import './components/search-bar'

export class AppContainer extends LitElement {
  static get styles() {
    return css`
      .container {
        /* display: flex;
        justify-content: center;
        height: 100vh;  */
        /* flex-direction: column; */
      }

      
    `;
  }

  // static get properties() {
  //   return {
  //     name: {type: String},
  //     count: {type: Number},
  //   };
  // }

  constructor() {
    super();
  }

  render() {
    return html`
      <search-bar></search-bar>

    `;
  }
}

window.customElements.define('app-container', AppContainer);
