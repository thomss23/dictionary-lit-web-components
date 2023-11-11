import {LitElement, html, css} from 'lit';

import './toggle-switch-element'
import './font-dropdown-element';

export class Header extends LitElement {

    static get styles() {
        return css`
                
        .header-container {
            display: flex;
            justify-content: space-between;
            margin-top: 35px;
            margin-bottom: 35px;
        }

        .logo {
            height: 30px;
            width: 30px;
        }

        .right {
            display: flex;
            align-items: center; 
        }

        .font-text {
            margin-right: 10px;
        }

        .arrow {
            height: 15px;
            width: 15px;
            margin-left: 5px;
            cursor: pointer;
        }

        .separator {
            border-right: 1px solid #e2e2e2;
            margin-right: 30px;
            margin-left: 20px;
            height:35px;
        }

        .toggle-switch-container {
            display: flex;
            align-items: center; 
        }

        .moon {
            height: 20px;
            width: 20px;
            margin-left: 10px;
        }

    `
    }

    static get properties() {
        return {
            isDropdownVisible: { type: Boolean },
            fontype: {type: String},
        };
    }

    constructor() {
        super();
        this.isDropdownVisible = false;
        this.fontType = "Font1";
    }

    toggleDropdown() {
        this.isDropdownVisible = !this.isDropdownVisible;
    }

    handleFontSelected(event) {
        const selectedFont = event.detail;
        this.fontType = selectedFont;
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