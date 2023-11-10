import {LitElement, html} from 'lit';

import './components/main-content'

export class AppContainer extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html`
      <main-content></main-content>
    `;
  }
}

window.customElements.define('app-container', AppContainer);
