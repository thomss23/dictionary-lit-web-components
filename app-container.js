import {LitElement, html} from 'lit';

import './components/main-element/main-element'


export class AppContainer extends LitElement {

  static properties = {
    fontType : {type: String},
    isDarkMode : {type: Boolean}
  }

  constructor() {
    super();
    this.fontType = 'Sans Serif'
    this.isDarkMode = false;
    this.addEventListener('font-selected', this.handleSelectedFont);
    this.addEventListener('toggle-mode', this.handleToggleMode);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('toggle-mode', this.handleToggleMode);
  }

  handleToggleMode() { 
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.body.style.backgroundColor = '#050505';
    } else {
      document.body.style.backgroundColor = '#FFFFFF';
    }
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
      <main-element .isDarkMode=${this.isDarkMode} .fontType = ${this.fontType}></main-element>
    `;
  }
}

window.customElements.define('app-container', AppContainer);
