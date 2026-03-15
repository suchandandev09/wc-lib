import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * An atomic icon element utilizing Tabler Icons Webfont.
 *
 * @csspart icon - The underlying icon tag
 */
@customElement('wc-icon')
export class WcIcon extends LitElement {
  protected createRenderRoot() {
    return this; // Disable Shadow DOM so the global tabler-icons webfont styles apply
  }

  // We do not need the children slot handling logic here since we only render an <i> tag

  /**
   * The name of the tabler icon (e.g. 'home', 'settings')
   */
  @property({ type: String }) name = '';

  /**
   * The size of the icon (useful to map to font sizes).
   */
  @property({ type: Number }) size = 24;

  /**
   * The color of the icon. Leave empty to inherit color.
   */
  @property({ type: String }) color = '';

  render() {
    if (!this.name) return html``;

    const style = `
      ${this.size ? `font-size: ${this.size}px;` : ''}
      ${this.color ? `color: ${this.color};` : ''}
    `;

    return html`
      <i 
        class="icon ti ti-${this.name}" 
        style="${style.trim()}" 
        part="icon" 
        aria-hidden="true"
      ></i>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wc-icon': WcIcon;
  }
}
