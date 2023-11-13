import {LitElement, html, css} from 'lit';

import './content-element'
import './footer-element'
import './searchbar-component'
import './header-element'

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

    static properties() {
      definitions : {type: Object; state: true}
      error: {type: Object; state: true}
    }
  
    constructor() {
      super();
      this.definitions = null;
      this.error = null;
    }

    async handleSearch(event) {
      const searchedTerm = event.detail;

      try {
        const fetchedData = await this.fetchDictionaryInfo(searchedTerm);
        this.definitions = fetchedData;
        this.error = null;
      } catch (error) {
        console.error('Error fetching data:', error);
        this.definitions = null; 
        this.error = error; 
      }
      // Manually trigger a render
      //TODO: THIS NEEDS TO BE FIXED SOMEHOW, SHOULD RELY ON LIT'S REACTIVE PROPERTIES
      this.requestUpdate();
    }
  
    async fetchDictionaryInfo(searchedTerm) {
      const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + searchedTerm;
      const response = await fetch(url);

      if (!response.ok) {
        const errorBody = await response.json();
        throw { status: response.status, message: 'HTTP error', details: errorBody };
      }

      return await response.json(); 
    }
    
    
    render() {
      if (this.error) {
        // Show an error message
        return html`
          <div class="container">
            <header-element></header-element>
            <searchbar-component @search=${this.handleSearch}></searchbar-component>
            <p>Encountered an error</p>
          </div>
        `;
      } else if (!this.definitions) {
        return html`
          <div class="container">
            <header-element></header-element>
            <searchbar-component @search=${this.handleSearch}></searchbar-component>
          </div>
        `;
      } else {
        return html`
          <div class="container">
            <header-element></header-element>
            <searchbar-component @search=${this.handleSearch}></searchbar-component>
            <content-element .definitions=${this.definitions}></content-element>
            <footer-element></footer-element>
          </div>
        `;
      }
    }
    
  
}
  
window.customElements.define('main-element', Main);
  