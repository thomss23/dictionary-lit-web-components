import {LitElement, html} from 'lit';

import '../content-element/content-element'
import '../footer-element/footer-element'
import '../searchbar-element/searchbar-element'
import '../header-element/header-element'
import '../error-element/error-element'

import mainStyles from './main-element-light-styles'
import { fetchDictionaryInfo } from '../../service/fetchDefinitions';

export class Main extends LitElement {

  static styles = [
    mainStyles
  ]

  static properties = {
    data : {type: Object},
    error: {type: Object}, 
    fontType : {type: String}
  };

  constructor() {
    super();
    this.data = null;
    this.error = null;
  }

  async handleSearch(event) {
    const searchedTerm = event.detail;

    try {
      const fetchedData = await fetchDictionaryInfo(searchedTerm);
      this.data = fetchedData;
      this.error = null;
    } catch (error) {
      this.data = null; 
      this.error = error.details; 
    }
    
  }
  
  async handleEnter(event) {
    await this.handleSearch(event);
  }
  
  render() {
    if (this.error) {
      return html`
        <div class="container">
          <header-element .fontType = ${this.fontType}></header-element>
          <searchbar-component @pressed=${this.handleEnter} @searchClick=${this.handleSearch}></searchbar-component>
          <error-element .error=${this.error}></error-element>
        </div>
      `;
    } else if (this.data) {
        return html`
        <div class="container">
          <header-element .fontType = ${this.fontType}></header-element>
          <searchbar-component @pressed=${this.handleEnter} @searchClick=${this.handleSearch}></searchbar-component>
          <content-element .data=${this.data}></content-element>
        </div>
      `;
    } else {
      return html`
        <div class="container">
          <header-element .fontType = ${this.fontType}></header-element>
          <searchbar-component @pressed=${this.handleEnter} @searchClick=${this.handleSearch}></searchbar-component>
        </div>
      `;
    }
  }
    
  
}
  
window.customElements.define('main-element', Main);
  