import {LitElement, html, css} from 'lit';



export class Footer extends LitElement {

    static properties = {
        sourceURL : {type: String}
    }

    constructor() {
        super();
        this.url = '';
    }

    static get styles() {
        return css`
            .separator {
                /* needs to be adjusted depending on the final font size of the word type */
                margin-top: 13px; 
                border-top: 1px solid #e2e2e2;
                width: 88%;
            }
            
            a {
                text-decoration: none;
                color: grey;
            }
        
        `
    }

    render() {
        return html`
            <div>
                <div class="separator"></div>
                <p>Source: <a href=${this.sourceURL}>${this.sourceURL}</a></p>
            </div>

        `
    }


}

window.customElements.define('footer-element', Footer);
