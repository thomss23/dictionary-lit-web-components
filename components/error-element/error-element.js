import {LitElement, html} from 'lit';

import errorStyles from './error-element-light-styles'

export class Error extends LitElement {

    static styles = [
        errorStyles
    ]
    
    static properties = {
        error: {type: Object}
    };

    constructor() {
        super();
        this.error = {};
    }

    render() {
        return html`
            <div class="error-container">
                <div class="emoji">&#128533;</div>
                <h1>${this.error.title}</h1>
                <p>${this.error.message}${this.error.resolution}</p>
            </div>
        `

    }
}

customElements.define('error-element', Error);
