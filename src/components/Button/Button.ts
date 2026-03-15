import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'


/**
 * An example atomic button element.
 *
 * @slot - This element has a slot for button content
 * @csspart button - The button element
 */
@customElement('wl-button')
export class WlButton extends LitElement {
  protected createRenderRoot() {
    return this; // Disable Shadow DOM to use global styles
  }

  /**
   * The button's theme variant (primary, secondary).
   */
  @property({ type: String }) variant = 'primary'

  /**
   * The button's size (small, medium, large).
   */
  @property({ type: String }) size = 'medium'

  render() {
    return html`
      <button class="btn ${this.variant} ${this.size}" part="button">
        <slot></slot>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wl-button': WlButton
  }
}
