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
        console.log(this.meaning)
        return html`
            <div class="type-container">
                    <div class="word-type">${this.meaning.partOfSpeech}</div>
                    <div class="separator"></div>
            </div>
             <p>Meaning</p>

            <ul>
                ${this.meaning.definitions.map((key) =>
                    html`
                    <li>${key.definition}</li>
                    ${key.example ? html`<p>"${key.example}"</p>` : ''}
                    `
                )}
            </ul>   
            
            ${this.meaning.synonyms.length > 0 
                ?
                 html`
                    <div>
                        <p>Synonyms</p>
                        ${this.meaning.synonyms.map(synonym => {
                            return html`<p>${synonym}</p>`
                        })}
                    </div>
                 `
                :
                ''
            }

            ${this.meaning.antonyms.length > 0 
                ?
                 html`
                    <div>
                        <p>Antonyms</p>
                        ${this.meaning.synonyms.map(antonym => {
                            return html`<p>${antonym}</p>`
                        })}
                    </div>
                 `
                :
                ''
            }
        `
    }
}

window.customElements.define('definition-element', Definition);
