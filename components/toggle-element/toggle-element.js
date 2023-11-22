import {LitElement, html} from 'lit';

import toggleStyles from './toggle-element-light-styles'

export class ToggleSwitch extends LitElement {
    
    static styles = [
        toggleStyles
    ]


    handleToggle() {
        const event = new CustomEvent('toggle-mode', {
          bubbles: true,
          composed: true,
        });
        this.dispatchEvent(event);
    }
    

    render() {
        return html`
            <label class="switch">
            <input type="checkbox" @change="${this.handleToggle}">
            <span class="slider round"></span>
        </label>
        `
    }


}

window.customElements.define('toggle-switch-element', ToggleSwitch);