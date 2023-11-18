import {LitElement, html} from 'lit';

import './components/main-element/main-element'


export class AppContainer extends LitElement {

  static properties = {
    fontType : {type: String}
  }

  constructor() {
    super();
    this.fontType = 'Sans Serif'
    this.addEventListener('font-selected', this.handleSelectedFont);
  }

  handleSelectedFont(event) {
    this.fontType = event.detail;
  }

  render() {
    return html`
      <style>
        :host {
          font-family: ${this.fontType.toLowerCase().replace(" ", "-") + "-custom"};
        }
      </style>
      <main-element .fontType = ${this.fontType}></main-element>
    `;
  }
}

window.customElements.define('app-container', AppContainer);
