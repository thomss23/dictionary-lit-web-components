import {LitElement, html, css} from 'lit';

import './content-element'
import './footer-element'
import './searchbar-component'
import './header-element'
import './error-element'

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

    static properties = {
      data : {type: Object},
      error: {type: Object}
    };
  
    constructor() {
      super();
      this.data = null;
      this.error = null;
    }

    async handleSearch(event) {
      const searchedTerm = event.detail;

      try {
        const fetchedData = await this.fetchDictionaryInfo(searchedTerm);
        this.data = fetchedData;
        this.error = null;
      } catch (error) {
        this.data = null; 
        this.error = error.details; 
      }
      
    }
    
  
    async fetchDictionaryInfo(searchedTerm) {
      const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + searchedTerm;
      const response = await fetch(url);

      if (!response.ok) {
        const errorBody = await response.json();
        throw { status: response.status, message: 'HTTP error', details: errorBody };
      }

      return response.json(); 
    }

    async handleEnter(event) {
      await this.handleSearch(event);
    }
    
    render() {
      if (this.error) {
        return html`
          <div class="container">
            <header-element></header-element>
            <searchbar-component @pressed=${this.handleEnter} @searchClick=${this.handleSearch}></searchbar-component>
            <error-element .error=${this.error}></error-element>
          </div>
        `;
      } else if (this.data) {
          return html`
          <div class="container">
            <header-element></header-element>
            <searchbar-component @pressed=${this.handleEnter} @searchClick=${this.handleSearch}></searchbar-component>
            <content-element .data=${this.data}></content-element>
          </div>
        `;
      } else {
        return html`
          <div class="container">
            <header-element></header-element>
            <searchbar-component @pressed=${this.handleEnter} @searchClick=${this.handleSearch}></searchbar-component>
          </div>
        `;
      }
    }
    
  
}
  
window.customElements.define('main-element', Main);
  