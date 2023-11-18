import {LitElement, html} from 'lit';

import '../toggle-element/toggle-element'
import '../font-dropdown-element/font-dropdown-element';
import headerStyles from './header-element-light-styles';


export class Header extends LitElement {

    static styles = [
        headerStyles,
    ]

    static properties =  {
        isDropdownVisible: { type: Boolean },
        fontType: {type: String},
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
            <div class="header-container">
                <img class="logo" src='/assets/images/logo.svg'/> 

                <div class="right">
                    <div class="font-text">${this.fontType}</div>
                    <img @click="${this.toggleDropdown}" class="arrow" src='/assets/images/icon-arrow-down.svg'/>  
                    <div class="separator"></div>
                    <div class="toggle-switch-container">
                        <toggle-switch-element></toggle-switch-element>
                        <img class="moon" src='/assets/images/icon-moon.svg'/>  
                    </div>
                    ${this.isDropdownVisible ? html`<font-dropdown-element @font-selected="${this.handleFontSelected}"></font-dropdown-element>` : ''}
                </div>
            </div>
        `;
    }

}

window.customElements.define('header-element', Header);