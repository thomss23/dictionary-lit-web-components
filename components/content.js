import {LitElement, html, css} from 'lit';

import './word-definition'

export class Content extends LitElement {

    static get styles() {
        return css`
            .content-container {
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
            <img src='/assets/images/icon-played.svg'/>

            <!-- TODO: make it dynamic based on API data -->
            <word-definition></word-definition>
            <word-definition></word-definition>
        `;
    }


}

window.customElements.define('content-element', Content);
