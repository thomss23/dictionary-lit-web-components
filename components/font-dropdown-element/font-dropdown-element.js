import { LitElement, html } from 'lit';

import dropdownStyles from './font-dropdown-element-light-styles'

export class FontDropdown extends LitElement {

    static styles = [
        dropdownStyles
    ]

    render() {
        return html`
            <div class="dropdown">
                <div class="option" @click="${() => this.selectFont('Sans Serif')}">Sans Serif</div>
                <div class="option" @click="${() => this.selectFont('Serif')}">Serif</div>
                <div class="option" @click="${() => this.selectFont('Mono')}">Mono</div>
            </div>
        `;
    }

    selectFont(font) {
        this.dispatchEvent(new CustomEvent('font-selected', { detail: font }));
    }
}

customElements.define('font-dropdown-element', FontDropdown);
