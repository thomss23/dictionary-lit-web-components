import {LitElement, html, css} from 'lit';
import {repeat} from 'lit/directives/repeat.js';

import '../definition-element/definition-element'
import '../loading-element/loading-element'

import {commonStyles} from './content-element-common-styles'
import {lightStyles} from './content-element-light-styles'
import {darkStyles} from './content-element-dark-styles'

export class Content extends LitElement {

    get styles() {
        return css`
            ${commonStyles}

            ${this.isDarkMode ? darkStyles : lightStyles}
        `;
    }

    static properties = {
        data: {type: Object},
        isLoading : {type: Boolean},
        isDarkMode: {type: Boolean},
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
            image.src = './dist/assets/images/icon-played.svg';
        });
      
        audio.addEventListener('ended', () => {
            image.src = './dist/assets/images/icon-play.svg';
        });

        if (audio.paused) {
            audio.play()

        } else {
            audio.paused();
        }
    }

    render() {

        if (this.isLoading) {
            return html`<style>${this.styles}</style><loading-element></loading-element>`
        }

        const dataWithMostMeanings = this._retrieveResultWithMostMeaningsFromData(this.data);
        const allPhonetics = this.data.flatMap(element => element.phonetics);
        const audioData = allPhonetics.find(phonetic => phonetic.audio !== '');        

        return html`
            <style>
                ${this.styles}
            </style>

            <div class="content-container">
                <div>
                    <h1>${dataWithMostMeanings.word}</h1>
                    <p id="phonetic">${dataWithMostMeanings.phonetic}</p>
                </div>
                ${audioData ? html`<img @click=${this._playPhonetic} src='./dist/assets/images/icon-play.svg'/><audio src=${audioData.audio} id="myAudio"></audio>
` : ''}
            </div>
            ${repeat(
                    dataWithMostMeanings.meanings,
                    (element) => element.partOfSpeach,
                    (element) => html`
                    <definition-element .isDarkMode=${this.isDarkMode} .meaning=${element}></definition-element>
                `
            )}

            <footer-element .isDarkMode=${this.isDarkMode} .sourceURL=${dataWithMostMeanings.sourceUrls[0]}></footer-element>

        `;
    }


}

window.customElements.define('content-element', Content);
