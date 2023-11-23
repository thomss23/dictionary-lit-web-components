import {LitElement, html} from 'lit';

import '../content-element/content-element'
import '../footer-element/footer-element'
import '../searchbar-element/searchbar-element'
import '../header-element/header-element'
import '../error-element/error-element'

import mainStyles from './main-element-light-styles'
import { fetchDictionaryInfo } from '../../service/fetchDefinitionsService';

export class Main extends LitElement {

  static styles = [
    mainStyles
  ]

  static properties = {
    data : {type: Object},
    error: {type: Object}, 
    fontType : {type: String},
    isDarkMode : {type: Boolean},
    isLoading : {type: Boolean}
  };

  constructor() {
    super();
    this.data = null;
    this.error = null;
    this.isLoading = false;
  }

  async handleSearch(event) {
    const searchedTerm = event.detail;

    try {
      this.isLoading = true;
      const fetchedData = await fetchDictionaryInfo(searchedTerm);
      this.data = fetchedData;
      this.error = null;
    } catch (error) {
      this.data = null; 
      this.error = error.details; 
    } finally {
      this.isLoading = false;
    }
    
  }
  
  async handleEnter(event) {
    await this.handleSearch(event);
  }
  
  render() {
    if (this.error) {
      return html`
        <div class="container">
          <header-element .isDarkMode=${this.isDarkMode} .fontType = ${this.fontType}></header-element>
          <searchbar-component .isDarkMode=${this.isDarkMode} @pressed=${this.handleEnter} @searchClick=${this.handleSearch}></searchbar-component>
          <error-element .isDarkMode=${this.isDarkMode} .error=${this.error}></error-element>
        </div>
      `;
    } else if (this.data) {
        return html`
        <div class="container">
          <header-element .isDarkMode=${this.isDarkMode} .fontType = ${this.fontType}></header-element>
          <searchbar-component .isDarkMode=${this.isDarkMode} @pressed=${this.handleEnter} @searchClick=${this.handleSearch}></searchbar-component>
          <content-element .isLoading=${this.isLoading} .isDarkMode=${this.isDarkMode} .data=${this.data}></content-element>
        </div>
      `;
    } else {
      return html`
        <div class="container">
          <header-element .isDarkMode=${this.isDarkMode} .fontType = ${this.fontType}></header-element>
          <searchbar-component .isDarkMode=${this.isDarkMode} @pressed=${this.handleEnter} @searchClick=${this.handleSearch}></searchbar-component>
        </div>
      `;
    }
  }
    
  
}
  
window.customElements.define('main-element', Main);
  