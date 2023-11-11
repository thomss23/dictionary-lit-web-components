// font-dropdown-element.js
import { LitElement, html, css } from 'lit';

export class FontDropdown extends LitElement {
    static styles = css`
        .dropdown {
            border-radius: 10px;
            box-sizing: border-box; 
            position: absolute;
            top: 100%;
            left: 320px;
            width: 150px; 
            background-color: #FFFFFF;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1;
            padding: 10px;
        }

        .option {
            padding: 10px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .option:hover {
           color: #A445ED;
        }
    `;

    render() {
        return html`
            <div class="dropdown">
                <div class="option" @click="${() => this.selectFont('Font1')}">Font1</div>
                <div class="option" @click="${() => this.selectFont('Font2')}">Font2</div>
                <div class="option" @click="${() => this.selectFont('Font3')}">Font3</div>
            </div>
        `;
    }

    selectFont(font) {
        this.dispatchEvent(new CustomEvent('font-selected', { detail: font }));
    }
}

customElements.define('font-dropdown-element', FontDropdown);
