import {LitElement, html, css} from 'lit';

import '../toggle-element/toggle-element'
import '../font-dropdown-element/font-dropdown-element';

import {commonStyles} from './header-element-common-styles';
import {lightStyles} from './header-element-light-styles';
import {darkStyles} from './header-element-dark-styles';


export class Header extends LitElement {

    get styles() {
        return css`
            ${commonStyles}

            ${this.isDarkMode ? darkStyles : lightStyles}
        `;
    }

    static properties =  {
        isDropdownVisible: { type: Boolean },
        fontType: {type: String},
        isDarkMode: {type:Boolean}
    }

    constructor() {
        super();
        this.isDropdownVisible = false;
    }

    toggleDropdown() {
        this.isDropdownVisible = !this.isDropdownVisible;
    }

    handleFontSelected() {
        this.isDropdownVisible = false; 
    }

    render() {
        
        return html`

            <style>
                ${this.styles}
            </style>

            <div class="header-container">
                <img class="logo" src='/dictionary-lit-web-components/dist/assets/images/logo.svg'/> 

                <div class="right">
                    <div class="font-text">${this.fontType}</div>
                    <img @click="${this.toggleDropdown}" class="arrow" src='/dictionary-lit-web-components/dist/assets/images/icon-arrow-down.svg'/>  
                    <div class="separator"></div>
                    <div class="toggle-switch-container">
                        <toggle-switch-element></toggle-switch-element>
                        <img class="moon" src='/dist/assets/images/icon-moon.svg'/>  
                    </div>
                    ${this.isDropdownVisible ? html`<font-dropdown-element @font-selected="${this.handleFontSelected}"></font-dropdown-element>` : ''}
                </div>
            </div>
        `;
    }

}

window.customElements.define('header-element', Header);