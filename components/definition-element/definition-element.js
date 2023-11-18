import {LitElement, html} from 'lit';

import definitionStyles from './definition-element-light-styles'

export class Definition extends LitElement {


    static properties = {
        meaning: {type: Object}
    }

    constructor() {
        super();
        this.meaning = null;
    }

    static styles = [
        definitionStyles
    ]

    render() {
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
