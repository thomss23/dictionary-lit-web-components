import {LitElement, html} from 'lit';

import './components/main-element/main-element'

export class AppContainer extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html`
      <main-element></main-element>
    `;
  }
}

window.customElements.define('app-container', AppContainer);
