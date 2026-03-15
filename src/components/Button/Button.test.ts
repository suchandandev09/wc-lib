import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { html, render } from 'lit';
import './Button';
import type { WcButton } from './Button';

describe('wc-button', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
  });

  it('renders default button properties', async () => {
    render(html`<wc-button>Click me</wc-button>`, container);
    
    const wcButton = container.querySelector('wc-button') as WcButton;
    await wcButton.updateComplete;

    const button = wcButton.querySelector('button');
    expect(button).toBeTruthy();
    expect(button?.classList.contains('primary')).toBe(true);
    expect(button?.classList.contains('medium')).toBe(true);
    expect(button?.textContent?.trim()).toBe('Click me');
  });

  it('renders with correct variant', async () => {
    render(html`<wc-button variant="secondary">Secondary</wc-button>`, container);
    
    const wcButton = container.querySelector('wc-button') as WcButton;
    await wcButton.updateComplete;

    const button = wcButton.querySelector('button');
    expect(button?.classList.contains('secondary')).toBe(true);
  });
});
