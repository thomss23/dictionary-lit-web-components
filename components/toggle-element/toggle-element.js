import {LitElement, html} from 'lit';

import toggleStyles from './toggle-element-light-styles'

export class ToggleSwitch extends LitElement {
    
    static styles = [
        toggleStyles
    ]

    render() {
        return html`
            <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
        </label>
        `
    }


}

window.customElements.define('toggle-switch-element', ToggleSwitch);