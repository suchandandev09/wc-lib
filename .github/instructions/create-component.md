---
description: Use these instructions when creating or updating Lit web components in this repository.
applyTo: 'src/components/**,src/styles/global.scss,src/index.ts'
---

# Lit Web Component Rules

Follow these requirements for all component work in this repo.

## 1) Component Folder Structure
Create each component under `src/components/<ComponentName>/` with these files:
- `<ComponentName>.ts`
- `<ComponentName>.scss`
- `<ComponentName>.stories.ts`
- `<ComponentName>.test.ts`

## 2) Component Logic (`.ts`)
- Register with `@customElement('wc-[name]')`.
- Override `createRenderRoot()` and return `this` to disable Shadow DOM.
- Because Shadow DOM is disabled, do not rely on native `<slot>` behavior.
- Capture original `childNodes` in `connectedCallback()` and render those nodes manually in `render()`.

## 3) Styles (`.scss`)
- Use clear component-scoped classes (BEM-like naming is preferred).
- Use CSS variables from `src/styles/theme.scss` rather than hard-coded theme colors.

## 4) Tests (`.test.ts`)
- New component: add tests with the component.
- Updated behavior: review and update existing tests to cover the changes.

## 5) Exports And Global Style Registration
- Add the component stylesheet to `src/styles/global.scss` using `@use`.
- Export the component from `src/index.ts`.

## 6) Storybook
- Add stories for representative states.
- Use the real custom element tag (`wc-[name]`) in story rendering.

## 7) Verification
After component changes, run:

```bash
npm run test
npm run build
npm run build-storybook
```