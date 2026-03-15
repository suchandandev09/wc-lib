---
description: Steps and code conventions required to author a new Web Component
---

# Creating a Lit Web Component

When creating a new web component or updating an existing one in this repository (`wc-lib`), you **must** adhere to the following steps and conventions to ensure styles build globally, components behave predictably in the Light DOM, and changes are well-tested.

## 1. Directory Structure
Create a dedicated folder for your component inside `src/components/`, e.g., `src/components/MyComponent/`.

Inside this folder, you must have:
- `MyComponent.ts`: The component logic.
- `MyComponent.scss`: The component styles.
- `MyComponent.stories.ts`: The Storybook documentation.
- `MyComponent.test.ts`: The unit test suite.

## 2. Component Logic (`MyComponent.ts`)
- Use the `@customElement('wc-[name]')` decorator to register the component.
- **Critical**: You must override `createRenderRoot()` to return `this` to disable Shadow DOM. This is required for global styles to properly cascade into the components.
- **Critical**: Because Shadow DOM is disabled, native `<slot>` elements **will not work**. You must capture the original `childNodes` of the element in `connectedCallback` and manually interpolate them into your `render()` template.

**Example `MyComponent.ts` Template:**
```typescript
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('wc-my-component')
export class WcMyComponent extends LitElement {
  // 1. Disable Shadow DOM
  protected createRenderRoot() {
    return this; 
  }

  // 2. Capture Light DOM slotted children manually
  private _originalChildren: Node[] = [];

  connectedCallback() {
    if (this._originalChildren.length === 0) {
      this._originalChildren = Array.from(this.childNodes);
    }
    super.connectedCallback();
  }

  @property({ type: String }) title = 'Default Title';

  render() {
    return html`
      <div class="my-component" part="wrapper">
        <h2>${this.title}</h2>
        <!-- 3. Render children directly instead of using <slot> -->
        <div class="content">
          ${this._originalChildren}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wc-my-component': WcMyComponent;
  }
}
```

## 3. Component Styles (`MyComponent.scss`)
- Use BEM-like class mapping or direct nested classes (e.g., `.my-component`).
- Always use CSS variables mapped from `src/styles/theme.scss` (e.g., `var(--bck-primary)`).

## 4. Tests (`MyComponent.test.ts`)
- **Required test creation**: Whenever you create a new component, you must create its accompanying test file to test the component behavior.
- **Required test updates**: If you change or update the behavior of an existing component, you must evaluate the existing test cases and update them to verify the modifications. We must ensure test coverage is maintained.

## 5. Registering Styles and Exports
You must expose your component to the library entry points:

1. Add your `.scss` file to `src/styles/global.scss`:
   ```scss
   @use '../components/MyComponent/MyComponent.scss';
   ```
2. Export your component logic from `src/index.ts`:
   ```typescript
   export * from './components/MyComponent/MyComponent';
   ```

## 6. Storybook Definitions (`MyComponent.stories.ts`)
Create stories representing different states. Use `wc-my-component` in the render function.

## 7. Verification
// turbo-all
Once you have created and exported the component, run the local builders to verify no compilation errors occur, and run the test suite to ensure the new tests are passing!
```bash
npm run build && npm run build-storybook
```
