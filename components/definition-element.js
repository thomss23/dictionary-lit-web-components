import {LitElement, html, css} from 'lit';

export class Definition extends LitElement {

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
        return html`

        <div class="type-container">
                <div class="word-type">noun</div>
                <div class="separator"></div>
        </div>

        <p>Meaning</p>

        <ul>
            <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
            <li>A component of many instruments including the piano, organ, and harpsichord consisting 
                of usually black and white keys that cause different tones to be produced when struck.
            </li>
            <li>A device with keys of a musical keyboard, used to control electronic sound-producing devices 
                which may be built into or separate from the keyboard device.
            </li>
        </ul>
        `
    }
}

window.customElements.define('definition-element', Definition);
