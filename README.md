# Corella Design System

Un sistema de diseño modular y agnóstico de framework, construido con arquitectura de monorepo para máxima flexibilidad y reutilización.

## 📋 Descripción

**Corella** es un sistema de diseño ligero y altamente optimizado que proporciona componentes de UI consistentes y personalizables para múltiples frameworks. Está diseñado con una arquitectura de tres capas:

- **`@corella/core-ui`**: Núcleo agnóstico con estilos base y lógica compartida
- **`@corella/react`**: Wrapper de componentes React
- **`@corella/astro`**: Wrapper de componentes Astro

Esta arquitectura permite:
- ✨ **Portabilidad**: Usa los mismos estilos en diferentes frameworks
- 🎯 **Tree-shaking**: Importa solo lo que necesitas
- 🚀 **Optimización**: Diseño modular para mejor rendimiento
- 🎨 **Personalización**: Tematización mediante CSS Variables
- 📦 **ESM**: Soporte completo para módulos ES

## 🏗️ Arquitectura del Proyecto

```
velvet-telescope/
├── packages/
│   ├── core-ui/          # Núcleo agnóstico (estilos + lógica)
│   ├── react/            # Componentes React
│   └── astro/            # Componentes Astro
├── storybook/            # Documentación de componentes
├── package.json          # Configuración raíz del monorepo
├── pnpm-workspace.yaml   # Configuración de workspaces
└── turbo.json            # Configuración de Turborepo
```

## 🚀 Instalación

### Prerrequisitos

- **Node.js**: >= 18.0.0
- **pnpm**: 9.0.0 (recomendado)

### Instalación del Monorepo

```bash
# Clonar el repositorio
git clone https://github.com/Agercho/corella.git
cd corella

# Instalar dependencias
pnpm install
```

### Usar Corella en tu Proyecto

#### Con React

```bash
pnpm add @corella/react
```

```jsx
import { FilterChip } from '@corella/react';

function App() {
  return (
    <FilterChip
      label="Ejemplo"
      selected={false}
      onClick={() => console.log('clicked')}
    />
  );
}
```

#### Con Astro

```bash
pnpm add @corella/astro
```

```astro
---
import { FilterChip } from '@corella/astro';
---

<FilterChip label="Ejemplo" selected={false} />
```

## 🛠️ Comandos Disponibles

### Comandos Raíz (Monorepo)

```bash
# Desarrollo - Ejecuta todos los paquetes en modo watch
pnpm run dev

# Build - Construye todos los paquetes
pnpm run build

# Storybook - Ejecuta Storybook en modo desarrollo
pnpm run storybook

# Linting - Ejecuta linter en todos los paquetes
pnpm run lint

# Formateo - Formatea código con Prettier
pnpm run format

# Limpieza - Limpia archivos generados
pnpm run clean
```

### Comandos por Paquete

```bash
# Trabajar solo en core-ui
cd packages/core-ui
pnpm run dev          # Modo watch
pnpm run build        # Build

# Trabajar solo en React
cd packages/react
pnpm run dev          # Modo watch
pnpm run build        # Build

# Trabajar solo en Astro
cd packages/astro
pnpm run dev          # Modo watch
pnpm run build        # Build
pnpm run check        # Verificación de tipos Astro
```

## ⚙️ Configuración

### Configuración de Tailwind CSS

Corella utiliza Tailwind CSS con CSS Variables para tematización. Para usar los estilos en tu proyecto:

1. **Instala Tailwind CSS** en tu proyecto:

```bash
pnpm add -D tailwindcss postcss autoprefixer
```

2. **Configura `tailwind.config.js`**:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@corella/**/*.{js,ts,jsx,tsx}' // Importante
  ],
  theme: {
    extend: {
      // Personaliza tus colores, fuentes, etc.
    },
  },
  plugins: [],
}
```

3. **Importa los estilos base** (si están disponibles):

```css
@import '@corella/core-ui/styles';
```

### Configuración de TypeScript

El proyecto usa TypeScript 5.0+. La configuración base está en `tsconfig.json` en la raíz:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

Cada paquete extiende esta configuración según sus necesidades.

### Configuración de Turborepo

El monorepo usa Turborepo para optimizar builds y cacheo. La configuración está en `turbo.json`:

- **Build**: Ejecuta builds con dependencias en orden
- **Dev**: Modo watch sin cacheo
- **Clean**: Limpia archivos generados

### Variables de Entorno

Actualmente no se requieren variables de entorno. Si tu proyecto necesita configuración adicional, crea un archivo `.env` en la raíz:

```bash
# .env (ejemplo)
NODE_ENV=development
```

## 📦 Estructura de Paquetes

### @corella/core-ui

Núcleo agnóstico del sistema de diseño.

**Características:**
- Estilos base con Tailwind CSS
- Lógica compartida entre frameworks
- CSS Variables para tematización
- Sin dependencias de framework

**Exports:**
```js
import { /* utilidades */ } from '@corella/core-ui';
```

### @corella/react

Componentes React que consumen `@corella/core-ui`.

**Características:**
- Componentes React tipados con TypeScript
- Props intuitivas y documentadas
- Soporte para React 18+

**Componentes disponibles:**
- `FilterChip`: Chip de filtro interactivo

### @corella/astro

Componentes Astro que consumen `@corella/core-ui`.

**Características:**
- Componentes `.astro` nativos
- Integración perfecta con Astro 4+
- Renderizado del lado del servidor

**Componentes disponibles:**
- `FilterChip`: Chip de filtro

## 📚 Storybook

Storybook está configurado para documentar y probar componentes visualmente.

```bash
# Ejecutar Storybook
pnpm run storybook

# Build de Storybook
cd storybook
pnpm run build-storybook
```

Storybook estará disponible en `http://localhost:6006`

## 🔧 Desarrollo

### Agregar un Nuevo Componente

1. **Crear el componente en `core-ui`** (si tiene lógica compartida):

```bash
cd packages/core-ui/src
# Crear archivos de estilos/lógica
```

2. **Crear wrapper en React**:

```bash
cd packages/react/src
# Crear componente React
```

3. **Crear wrapper en Astro**:

```bash
cd packages/astro/src
# Crear componente Astro
```

4. **Documentar en Storybook**:

```bash
cd storybook/src
# Crear stories para el componente
```

### Workflow de Desarrollo

1. **Ejecuta el modo desarrollo**:
```bash
pnpm run dev
```

2. **Ejecuta Storybook** en otra terminal:
```bash
pnpm run storybook
```

3. **Realiza cambios** en los paquetes - se recargarán automáticamente

4. **Verifica** los cambios en Storybook

## 🤝 Contribución

### Convenciones de Código

- **TypeScript**: Todo el código debe estar tipado
- **Prettier**: Usa `pnpm run format` antes de commit
- **Naming**:
  - Componentes: PascalCase (`FilterChip`)
  - Archivos: kebab-case para utilidades, PascalCase para componentes
  - CSS: BEM cuando sea apropiado

### Proceso de Contribución

1. Crea una rama desde `main`
2. Realiza tus cambios
3. Ejecuta `pnpm run format` y `pnpm run lint`
4. Crea un Pull Request

## 📄 Licencia

[Especificar licencia - MIT, Apache, etc.]

## 🙋 Soporte

Para preguntas, problemas o sugerencias:
- Abre un issue en GitHub
- [Agregar información de contacto si aplica]

---

**Hecho con ❤️ por el equipo de Corella**
