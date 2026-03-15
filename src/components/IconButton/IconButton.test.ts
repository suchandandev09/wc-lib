import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { html, render } from 'lit';
import './IconButton';
import type { WcIconButton } from './IconButton';

describe('wc-icon-button', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
  });

  it('renders a button element with primary class by default', async () => {
    render(html`<wc-icon-button ariaLabel="Test"></wc-icon-button>`, container);
    
    const wcIconButton = container.querySelector('wc-icon-button') as WcIconButton;
    await wcIconButton.updateComplete;

    const button = wcIconButton.querySelector('button');
    expect(button).toBeTruthy();
    expect(button?.classList.contains('primary')).toBe(true);
    expect(button?.getAttribute('aria-label')).toBe('Test');
    expect(button?.getAttribute('title')).toBe('Test');
  });

  it('renders a wc-icon when name property is passed', async () => {
    render(html`<wc-icon-button name="home" ariaLabel="Home"></wc-icon-button>`, container);
    
    const wcIconButton = container.querySelector('wc-icon-button') as WcIconButton;
    await wcIconButton.updateComplete;

    const wcIcon = wcIconButton.querySelector('wc-icon');
    expect(wcIcon).toBeTruthy();
    expect(wcIcon?.getAttribute('name')).toBe('home');
  });

  it('renders proper variant classes', async () => {
    render(html`<wc-icon-button variant="ghost" ariaLabel="Delete"></wc-icon-button>`, container);
    
    const wcIconButton = container.querySelector('wc-icon-button') as WcIconButton;
    await wcIconButton.updateComplete;

    const button = wcIconButton.querySelector('button');
    expect(button?.classList.contains('ghost')).toBe(true);
  });

  it('renders slotted light DOM fallback content', async () => {
    render(html`<wc-icon-button ariaLabel="Custom"><span class="custom-slot">Hello</span></wc-icon-button>`, container);
    
    const wcIconButton = container.querySelector('wc-icon-button') as WcIconButton;
    await wcIconButton.updateComplete;

    const slotContent = wcIconButton.querySelector('.custom-slot');
    expect(slotContent).toBeTruthy();
    expect(slotContent?.textContent).toBe('Hello');
  });
});
