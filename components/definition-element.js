import {LitElement, html, css} from 'lit';

export class Definition extends LitElement {


    static properties = {
        meaning: {type: Object}
    }

    constructor() {
        super();
        this.meaning = null;
    }

    static get styles() {


        return css`
            .type-container {
                display: flex;
                justify-content: space-between;
            }

            .word-type{
                font-size: 30px;
            }
            .separator {
                /* needs to be adjusted depending on the final font size of the word type */
                margin-top: 13px; 
                border-top: 1px solid #e2e2e2;
                width: 88%;
            }

            li {
                padding: 5px;
            }

            p {
                margin: 0;
            }
        `
    }

    render() {

        console.log(this.meaning);
        return html`

        <div class="type-container">
                <div class="word-type">${this.meaning.partOfSpeech}</div>
                <div class="separator"></div>
        </div>

        <p>Meaning</p>

        <ul>
            ${this.meaning.definitions.map((key) =>
                html`<li>${key.definition}</li>`
            )}
        </ul>
        `
    }
}

window.customElements.define('definition-element', Definition);
