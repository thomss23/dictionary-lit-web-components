import {LitElement, html, css} from 'lit';

import {commonStyles} from './error-element-common-styles'
import {lightStyles} from './error-element-light-styles'
import {darkStyles} from './error-element-dark-styles'


export class Error extends LitElement {

    get styles() {
        return css`
            ${commonStyles}

            ${this.isDarkMode ? darkStyles : lightStyles}
        `;
    }

    static properties = {
        error: {type: Object},
        isDarkMode : {type: Boolean}
    };

    constructor() {
        super();
        this.error = {};
    }

    render() {
        return html`

            <style>
                ${this.styles}
            </style>

            <div class="error-container">
                <div class="emoji">&#128533;</div>
                <h1>${this.error.title}</h1>
                <p>${this.error.message}${this.error.resolution}</p>
            </div>
        `

    }
}

customElements.define('error-element', Error);
