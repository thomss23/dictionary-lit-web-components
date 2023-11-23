import {LitElement, html, css} from 'lit';

import '../header-element/header-element';

import {commonStyles} from './searchbar-element-common-styles'
import {lightStyles} from './searchbar-element-light-styles'
import {darkStyles} from './searchbar-element-dark-styles'


export class SearchBar extends LitElement {

    get styles() {
        return css`
            ${commonStyles}

            ${this.isDarkMode ? darkStyles : lightStyles}
        `;
    }

    static properties = {
        searchTerm : {type: String},
        isEmptySearchTerm : {type: Boolean},
        isDarkMode : {type: Boolean}
    };

    constructor() {
        super();
        this.searchTerm = '';
        this.isEmptySearchTerm = false;
    }

    _handleClick() {
        if (this.searchTerm) {
            this.dispatchEvent(new CustomEvent('searchClick', { detail: this.searchTerm }));
            this.isEmptySearchTerm = false;
        } else {
            this.isEmptySearchTerm = true;
        }
    }

    _handleKeyDown(event) {
        if (event.key === 'Enter') {
            if (this.searchTerm) {
                this.dispatchEvent(new CustomEvent('pressed', { detail: this.searchTerm }));
                this.isEmptySearchTerm = false;
            } else {
                this.isEmptySearchTerm = true;
            }
        }
    }

    _handleInputChange(event) {
        this.searchTerm = event.target.value;

        // Clear the error message when the user starts typing
        if (this.isEmptySearchTerm && this.searchTerm) {
            this.isEmptySearchTerm = false;
        }
    }


    render() {
        return html`

            <style>
                ${this.styles}
            </style>

            <input
             .value= ${this.searchTerm}
             placeholder="Search for any word..."
             @input=${this._handleInputChange}
             @keydown=${this._handleKeyDown}
             type="text"
            >
            ${this.isEmptySearchTerm ? html`<div class="error-message" aria-live="assertive">Whoops, can't be empty</div>` : ''}
            <img @click=${this._handleClick} src='./dist/assets/images/icon-search.svg'/>
        `
    }
}

window.customElements.define('searchbar-component', SearchBar);