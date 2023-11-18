import {LitElement, html, css} from 'lit';

import './header-element';

export class SearchBar extends LitElement {

    static get styles() {
        return css`
            input {
                box-sizing: border-box; 
                width: 100%;
                height: 50px;
                border-radius: 10px;
                font-size: 20px;
                border: none;
                padding: 5px 5px 5px 5px;
                background-color: #F4F4F4;
                margin-bottom: 25px;  
                padding: 20px;
            }

            input:focus{
                outline: none;
                border: 2px solid #A445ED
            }

            img {
                width: 20px;
                height: 20px;
                cursor: pointer;
                position: absolute;
                top: 85px;
                right: 20px;
                transition: transform 0.2s;
            }

            img:hover {
                transform: scale(1.2);
            }
            .error-message {
                color: #FF5252;
                position: relative;
                top:-15px; 
            }
        `
    }
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
        } else if (this.isEmptySearchTerm) {
            this.isEmptySearchTerm = false;
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