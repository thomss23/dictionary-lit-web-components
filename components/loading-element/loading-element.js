import {LitElement, html} from 'lit';

import {loadingStyles} from './loading-element-styles'

export class LoadingElement extends LitElement {

    static styles = [
        loadingStyles
    ]

    render() {
        return html`
        <div class="lds-ring">
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
        </div>
        `
    }
}

window.customElements.define('loading-element', LoadingElement);