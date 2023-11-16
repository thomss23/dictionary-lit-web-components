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

    _playPhonetic() {
        const audio = this.shadowRoot.getElementById("myAudio");
        const image = this.shadowRoot.querySelector('img');

        //TODO: try to do this somehow using a state variable
        audio.addEventListener('playing', () => {
            image.src = '/assets/images/icon-played.svg';
        });
      
        audio.addEventListener('ended', () => {
            image.src = '/assets/images/icon-play.svg';
        });

        console.log(audio.src)
        if (audio.paused) {
            audio.play()

        } else {
            audio.paused();
        }


    }

    render() {
        const dataWithMostMeanings = this._retrieveResultWithMostMeaningsFromData(this.data);
        const allPhonetics = this.data.flatMap(element => element.phonetics);
        const audioData = allPhonetics.find(phonetic => phonetic.audio !== '');        

        return html`
            <div class="content-container">
                <div>
                    <h1>${dataWithMostMeanings.word}</h1>
                    <p>${dataWithMostMeanings.phonetic}</p>
                </div>
                ${audioData ? html`<img @click=${this._playPhonetic} src='/assets/images/icon-play.svg'/><audio src=${audioData.audio} id="myAudio"></audio>
` : ''}
            </div>
            ${repeat(
                    dataWithMostMeanings.meanings,
                    (element) => element.partOfSpeach,
                    (element) => html`
                    <definition-element .meaning=${element}></definition-element>
                `
            )}

            <footer-element .sourceURL=${dataWithMostMeanings.sourceUrls[0]}></footer-element>

        `;
    }


}

window.customElements.define('content-element', Content);
