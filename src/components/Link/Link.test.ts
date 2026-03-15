import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { html, render } from 'lit';
import './Link';
import type { WcLink } from './Link';

describe('wc-link', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
  });

  it('renders default link properties', async () => {
    render(html`<wc-link href="https://example.com">Visit</wc-link>`, container);
    
    const wcLink = container.querySelector('wc-link') as WcLink;
    await wcLink.updateComplete;

    const anchor = wcLink.querySelector('a');
    expect(anchor).toBeTruthy();
    expect(anchor?.getAttribute('href')).toBe('https://example.com');
    expect(anchor?.getAttribute('target')).toBe('_self');
    expect(anchor?.textContent?.trim()).toBe('Visit');
  });

  it('renders with correct target', async () => {
    render(html`<wc-link href="https://lit.dev" target="_blank">Lit</wc-link>`, container);
    
    const wcLink = container.querySelector('wc-link') as WcLink;
    await wcLink.updateComplete;

    const anchor = wcLink.querySelector('a');
    expect(anchor?.getAttribute('target')).toBe('_blank');
  });
});
