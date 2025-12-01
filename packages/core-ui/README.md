# @corella/core-ui

Framework-agnostic core UI utilities for the Corella Design System.

## Installation

```bash
npm install @corella/core-ui
# or
pnpm add @corella/core-ui
# or
yarn add @corella/core-ui
```

## Usage

This package provides framework-agnostic utility functions for generating CSS classes and managing component styles.

### Example: FilterChip Classes

```javascript
import { getChipClasses } from '@corella/core-ui';

const activeClasses = getChipClasses(true);
const inactiveClasses = getChipClasses(false);
```

## Features

- 🎨 Framework-agnostic design utilities
- 🔧 Pure functions for class generation
- 📦 Tree-shakeable exports
- 🎯 TypeScript support

## CSS Variables

Corella uses CSS custom properties for theming:

```css
--corella-color-primary
--corella-color-primary-content
--corella-color-primary-hover
--corella-color-base
--corella-color-base-hover
--corella-color-neutral
```

## License

MIT © German Aviles
