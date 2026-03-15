import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { html, render } from 'lit';
import './Icon';
import type { WcIcon } from './Icon';

describe('wc-icon', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
  });

  it('renders nothing when name is empty', async () => {
    render(html`<wc-icon></wc-icon>`, container);
    
    const wcIcon = container.querySelector('wc-icon') as WcIcon;
    await wcIcon.updateComplete;

    expect(wcIcon.querySelector('i')).toBeNull();
  });

  it('renders correctly with given name and size', async () => {
    render(html`<wc-icon name="home" size="32"></wc-icon>`, container);
    
    const wcIcon = container.querySelector('wc-icon') as WcIcon;
    await wcIcon.updateComplete;

    const iTag = wcIcon.querySelector('i');
    expect(iTag).toBeTruthy();
    expect(iTag?.classList.contains('ti')).toBe(true);
    expect(iTag?.classList.contains('ti-home')).toBe(true);
    // Note: Style mapping in Lit template trims and formats the space.
    expect(iTag?.style.fontSize).toBe('32px');
  });

  it('renders correctly with given color', async () => {
    render(html`<wc-icon name="user" color="red"></wc-icon>`, container);
    
    const wcIcon = container.querySelector('wc-icon') as WcIcon;
    await wcIcon.updateComplete;

    const iTag = wcIcon.querySelector('i');
    expect(iTag?.style.color).toBe('red');
  });
});
