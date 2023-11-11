import {LitElement, html, css} from 'lit';

import './definition-element'

export class Content extends LitElement {

    static get styles() {
        return css`
            .content-container {
                width:100%;
                display:flex;
                justify-content: space-between;
            }
            
            img {
                cursor: pointer;
            }
        `
    }

    constructor() {
        super();
    }


    render() {
        return html`
            <div class="content-container">
                <div>
                    <h1>keyboard</h1>
                    <p>/kibɔd/</p>
                </div>
                <img src='/assets/images/icon-play.svg'/>
            </div>
            <!-- TODO: make it dynamic based on API data -->
            <definition-element></definition-element>
            <definition-element></definition-element>
        `;
    }


}

window.customElements.define('content-element', Content);
