import {LitElement, html} from 'lit';

import footerStyles from './footer-element-light-styles'

export class Footer extends LitElement {

    static styles = [
        footerStyles
    ]

    static properties = {
        sourceURL : {type: String}
    }

    constructor() {
        super();
        this.url = '';
    }

    render() {
        return html`
            <div class="footer-container">
                <div class="separator"></div>
                <p>Source: <a href=${this.sourceURL}>${this.sourceURL}</a></p>
            </div>

        `
    }


}

window.customElements.define('footer-element', Footer);
