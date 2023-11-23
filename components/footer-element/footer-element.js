import {LitElement, html, css} from 'lit';

import {commonStyles} from './footer-element-common-styles'
import {lightStyles} from './footer-element-light-styles'
import {darkStyles} from './footer-element-dark-styles'

export class Footer extends LitElement {

    get styles() {
        return css`
            ${commonStyles}

            ${this.isDarkMode ? darkStyles : lightStyles}
        `;
    }

    static properties = {
        sourceURL : {type: String},
        isDarkMode: {type: Boolean}
    }

    constructor() {
        super();
        this.url = '';
    }

    render() {
        return html`
            <style>
                ${this.styles}
            </style>

            <div class="footer-container">
                <div class="separator"></div>
                <p> <span>Source:</span> <a href=${this.sourceURL}>${this.sourceURL}</a></p>
            </div>

        `
    }
}

window.customElements.define('footer-element', Footer);
