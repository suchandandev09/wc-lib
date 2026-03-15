import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'


/**
 * An example atomic button element.
 *
 * @slot - This element has a slot for button content
 * @csspart button - The button element
 */
@customElement('wc-button')
export class WcButton extends LitElement {
  protected createRenderRoot() {
    return this; // Disable Shadow DOM to use global styles
  }

  private _originalChildren: Node[] = [];

  connectedCallback() {
    // Capture original light DOM children before first render to use in place of <slot>
    if (this._originalChildren.length === 0) {
      this._originalChildren = Array.from(this.childNodes);
    }
    super.connectedCallback();
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
        ${this._originalChildren}
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wc-button': WcButton
  }
}
