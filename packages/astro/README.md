# @corella/astro

Astro components for the Corella Design System.

## Installation

```bash
npm install @corella/astro @corella/core-ui
# or
pnpm add @corella/astro @corella/core-ui
# or
yarn add @corella/astro @corella/core-ui
```

## Usage

### FilterChip Component

```astro
---
import { FilterChip } from '@corella/astro';
---

<FilterChip isActive={true}>
  Active Chip
</FilterChip>

<FilterChip isActive={false}>
  Inactive Chip
</FilterChip>
```

### With Custom Classes

```astro
---
import { FilterChip } from '@corella/astro';
---

<FilterChip isActive={true} class="custom-class">
  Custom Styled Chip
</FilterChip>
```

## Components

- **FilterChip**: Interactive chip component for filtering and selection

## Features

- 🚀 Built for Astro
- 🎨 Styled with Tailwind CSS
- 📦 Tree-shakeable exports
- 🎯 TypeScript support
- ⚡ Zero JavaScript by default

## Peer Dependencies

- Astro ^4.0.0

## License

MIT © German Aviles
