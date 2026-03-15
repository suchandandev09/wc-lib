import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * An inline link element.
 *
 * @slot - This element has a slot for text content
 * @csspart link - The native anchor element
 */
@customElement('wc-link')
export class WcLink extends LitElement {
  protected createRenderRoot() {
    return this; // Disable Shadow DOM to use global styles
  }

  private _originalChildren: Node[] = [];

  connectedCallback() {
    if (this._originalChildren.length === 0) {
      this._originalChildren = Array.from(this.childNodes);
    }
    super.connectedCallback();
  }

  /**
   * The URL the link should point to.
   */
  @property({ type: String }) href = '#';

  /**
   * Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>).
   */
  @property({ type: String }) target?: '_self' | '_blank' | '_parent' | '_top';

  render() {
    return html`
      <a class="link" href="${this.href}" target="${this.target || '_self'}" part="link">
        ${this._originalChildren}
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wc-link': WcLink;
  }
}
