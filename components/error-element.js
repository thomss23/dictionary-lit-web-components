import {LitElement, html, css} from 'lit';


export class Error extends LitElement {

    static get styles() {
        return css`
            .error-container {
                width:100%;
                display:flex;
                justify-content: space-between;
                flex-direction: column;
                text-align: center;
            }

            .emodji {
                font-size: 45px;
            }
        `
    }
    
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
                <p>${this.error.message}.${this.error.resolution}</p>
            </div>
        `

    }
}

customElements.define('error-element', Error);
