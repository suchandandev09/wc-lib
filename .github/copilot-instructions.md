# wc-lib Workspace Instructions

These instructions apply to all code changes in this repository.

## Project Summary
- This is a Lit-based web component library built with Vite and TypeScript.
- Components are authored in Light DOM (Shadow DOM disabled) to allow global styling.
- Published outputs are generated under dist as library JS bundles plus style.css.

## Tech Stack
- Runtime: lit 3.x
- Build: Vite 8 + TypeScript 5
- Testing: Vitest 4 in browser mode using Playwright
- Documentation: Storybook 10 with docs, a11y, and vitest addons
- Styling: SCSS with global theme variables

## Source Layout
- Component source: src/components/<ComponentName>/
- Global styles and design tokens: src/styles/
- Library entrypoint and exports: src/index.ts
- Storybook docs pages: src/docs/
- Storybook config: .storybook/
- Generated outputs: dist/ and storybook-static/

## Component Authoring Rules
- Register custom elements with the wc- prefix via @customElement('wc-name').
- For wc-lib components, override createRenderRoot() and return this.
- Since Shadow DOM is disabled, do not use native slot behavior.
- If component content must include children, capture childNodes in connectedCallback and render them manually.
- Keep component APIs property-driven and typed using Lit decorators.
- Prefer existing design tokens from src/styles/theme.scss over hard-coded colors and spacing.

## Required Component File Set
- <ComponentName>.ts
- <ComponentName>.scss
- <ComponentName>.stories.ts
- <ComponentName>.test.ts
- <ComponentName>.docs.mdx

## Integration Steps For New Components
- Add stylesheet import to src/styles/global.scss using @use.
- Export component from src/index.ts.
- Ensure stories use the real custom element tag.
- Add or update tests whenever behavior changes.

## Testing Conventions
- Use lit render helpers and wait for updateComplete before assertions.
- Validate default behavior first, then variant and attribute-driven behavior.
- For accessibility-sensitive components, verify required attributes such as aria-label.

## Storybook Conventions
- Use typed meta objects with satisfies Meta.
- Do not use `tags: ['autodocs']` in story files.
- Keep stories focused on interactive examples and controls.
- Store technical documentation in `<ComponentName>.docs.mdx` near the component.
- Each component `.docs.mdx` must include a `General Overview` section and a `Technical Details` section.
- Keep stories representative of real usage, including variants and custom content paths.

## Build And Verification
- Run npm run test after behavior changes.
- Run npm run build after API or style changes.
- Run npm run build-storybook after story or docs changes.

## Editing Boundaries
- Do not edit generated files in dist/ or storybook-static/ directly.
- Do not edit node_modules/.
- Keep changes focused and consistent with existing naming and file organization.

## Documentation Sync
- If component APIs or usage change, update corresponding component `.docs.mdx` and relevant docs in src/docs/.
- Keep release notes in src/docs/4-Release-History.mdx aligned with meaningful user-facing changes.
