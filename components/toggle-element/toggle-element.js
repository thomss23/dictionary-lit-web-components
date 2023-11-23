import {LitElement, html} from 'lit';

import toggleStyles from './toggle-element-light-styles'

export class ToggleSwitch extends LitElement {
    
    static styles = [
        toggleStyles
    ]

    // TODO: need to fix this as searching for a word when in night mode
    // resets the slider to the initial position
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