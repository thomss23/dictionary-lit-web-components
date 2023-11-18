import {LitElement, html} from 'lit';

import '../header-element/header-element';

import searchbarStyles from './searchbar-element-light-styles'

export class SearchBar extends LitElement {

    static styles = [
        searchbarStyles
    ]

    static properties = {
        searchTerm : {type: String},
        isEmptySearchTerm : {type: Boolean}
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
        if (event.key === 'Enter' && this.searchTerm) {
            this.dispatchEvent(new CustomEvent('pressed', { detail: this.searchTerm }));
            this.isEmptySearchTerm = false;
        } else if (!this.searchTerm) {
            this.isEmptySearchTerm = true;
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
            <input
             .value= ${this.searchTerm}
             @input=${this._handleInputChange}
             @keydown=${this._handleKeyDown}
             type="text"
            >
            ${this.isEmptySearchTerm ? html`<div class="error-message" aria-live="assertive">Whoops, can't be empty</div>` : ''}
            <img @click=${this._handleClick} src='/assets/images/icon-search.svg'/>
        `
    }

}

window.customElements.define('searchbar-component', SearchBar);