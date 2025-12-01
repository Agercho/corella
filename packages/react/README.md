# @corella/react

React components for the Corella Design System.

## Installation

```bash
npm install @corella/react @corella/core-ui
# or
pnpm add @corella/react @corella/core-ui
# or
yarn add @corella/react @corella/core-ui
```

## Usage

### FilterChip Component

```tsx
import { FilterChip } from '@corella/react';

function MyComponent() {
  const [active, setActive] = useState(false);

  return (
    <FilterChip
      isActive={active}
      onClick={() => setActive(!active)}
    >
      Click me
    </FilterChip>
  );
}
```

## Components

- **FilterChip**: Interactive chip component for filtering and selection

## Features

- ⚛️ Built with React 18
- 🎨 Styled with Tailwind CSS
- 📦 Tree-shakeable exports
- 🎯 Full TypeScript support
- ♿ Accessible by default

## Peer Dependencies

- React ^18.0.0
- React DOM ^18.0.0

## License

MIT © German Aviles
