import {LitElement, html, css} from 'lit';
import {repeat} from 'lit/directives/repeat.js';

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

    static properties = {
        data: {type: Object}
    };


    constructor() {
        super();
        this.data = null
    }

    _retrieveResultWithMostMeaningsFromData(data) {

        return data.sort((a,b) => {
            const meaningsA = a.meanings.length;
            const meaningsB = b.meanings.length;

            if (meaningsA < meaningsB) {
                return 1;
            } else if (meaningsA > meaningsB) {
                return -1;
            }

            return 0;
        })[0];

    }


    render() {
        const dataWithMostMeanings = this._retrieveResultWithMostMeaningsFromData(this.data);
        //TODO:this doesn't work correctly, need to fix
        const audioData = this.data.map((element) => element.phonetics).find((phonetic) => phonetic.audio != '');
        
        console.log(this.data);
        console.log(audioData);

        return html`
            <div class="content-container">
                <div>
                    <h1>${dataWithMostMeanings.word}</h1>
                    <p>${dataWithMostMeanings.phonetic}</p>
                </div>
            <!-- TODO: Check this later to make the image play an audio 
            https://stackoverflow.com/questions/47754451/html-how-to-play-and-pause-audio-when-clicking-an-image -->
                ${audioData ? html`<img src='/assets/images/icon-play.svg'/>` : ''}
            </div>

            ${repeat(
                    dataWithMostMeanings.meanings,
                    (element) => element.partOfSpeach,
                    (element) => html`
                    <definition-element .meaning=${element}></definition-element>
                `
            )}
        `;
    }


}

window.customElements.define('content-element', Content);
