import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../Icon/Icon'; // Ensure Icon is bundled/available

/**
 * An atomic button specifically for icons without text labels.
 *
 * @csspart button - The underlying button tag
 */
@customElement('wc-icon-button')
export class WcIconButton extends LitElement {
  protected createRenderRoot() {
    return this; // Disable Shadow DOM to use global styles
  }

  // Manually map light DOM children to render any slotted elements or raw SVG fallbacks if needed
  private _originalChildren: Node[] = [];

  connectedCallback() {
    if (this._originalChildren.length === 0) {
      this._originalChildren = Array.from(this.childNodes);
    }
    super.connectedCallback();
  }

  /**
   * The name of the Tabler icon (e.g. 'settings', 'user')
   */
  @property({ type: String }) name = '';

  /**
   * The button's theme variant (primary, secondary, ghost).
   */
  @property({ type: String }) variant = 'primary';

  /**
   * Accessible text alternative for the icon button (e.g., 'Settings'). Mandatory for a11y.
   */
  @property({ type: String }) ariaLabel = '';

  render() {
    return html`
      <button 
        class="icon-btn ${this.variant}" 
        part="button" 
        aria-label="${this.ariaLabel}"
        title="${this.ariaLabel}"
      >
        ${this.name ? html`<wc-icon name="${this.name}"></wc-icon>` : this._originalChildren}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wc-icon-button': WcIconButton;
  }
}
