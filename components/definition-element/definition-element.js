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

            <div class="definition-container">

                <div class="type-container">
                        <div class="word-type">${this.meaning.partOfSpeech}</div>
                        <div class="separator"></div>
                </div>
                <p id="meaning">Meaning</p>
                <ul>
                    ${this.meaning.definitions.map((key) =>
                        html`
                        <li>${key.definition}</li>
                        ${key.example ? html`<p class="example">"${key.example}"</p>` : ''}
                        `
                    )}
                </ul>   

                ${this.meaning.synonyms.length > 0 
                    ?
                    html`
                    <div class="main-container">
                        <p>Synonyms</p>
                        <div class="alternatives-container">
                            ${this.meaning.synonyms.map((synonym, key) => {
                                if (key < 4)
                                return html`<p class="alternative">${synonym}</p>`
                            })}
                        </div>
                    </div>
                    `
                    :
                    ''
                }
            
                ${this.meaning.antonyms.length > 0 
                    ?
                    html`
                        <div class="main-container">
                            <p>Antonyms</p>
                            <div class="alternatives-container">
                                ${this.meaning.antonyms.map((antonym, key) => {
                                    if (key < 4)
                                    return html`<p class="alternative">${antonym}</p>`
                                })}
                            </div>
                        </div>

                    `
                    :
                    ''
                }


            </div>

        `
    }
}

window.customElements.define('definition-element', Definition);
