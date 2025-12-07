# @corella/core-ui

El corazón del **Sistema de Diseño Corella**. Este paquete es **agnóstico de framework** y contiene toda la lógica de estilos, tokens de diseño y definiciones de variantes que alimentan a las implementaciones de React, Astro y otros futuros frameworks.

---

## 🎯 Propósito y Alcance

El objetivo de `@corella/core-ui` es actuar como la **única fuente de verdad** para la apariencia visual del sistema.

### Responsabilidades:
- Definir variables CSS globales (Colores, Espaciado, Radios).
- Exportar funciones utilitarias (`getVariantClasses`) para generar cadenas de clases de Tailwind.
- Mantener la consistencia visual entre plataformas.

## 📦 Instalación

Normalmente no instalarás este paquete directamente a menos que estés construyendo un adaptador para un nuevo framework o necesites acceso directo a los tokens.

```bash
pnpm add @corella/core-ui
```

## 🎨 Sistema de Estilos

Corella utiliza una combinación de **Tailwind CSS** para utilidades atómicas y **CSS Variables** para tokens semánticos de tiempo de ejecución.

### Importar Estilos Globales
Para que los componentes se rendericen correctamente, debes importar el CSS base en la raíz de tu aplicación:

```css
/* En tu main.css o app.tsx */
import "@corella/core-ui/styles.css";
```

### Variables CSS (Theming)
Los colores se definen semánticamente para permitir cambios de tema fáciles (por ejemplo, modo oscuro) sin cambiar el código de los componentes.

| Variable | Uso |
| :--- | :--- |
| `--corella-color-primary` | Color principal de marca. |
| `--corella-color-secondary` | Color secundario/complementario. |
| `--corella-color-base` | Fondos de superficie (blanco/oscuro). |
| `--corella-color-neutral` | Grises para bordes y textos secundarios. |
| `--corella-color-error` | Estados de error y validación. |

## 🛠️ Utilidades de Estilo

Este paquete exporta funciones puras que aceptan un objeto de configuración (props) y devuelven cadenas de clases optimizadas.

### Ejemplo: `getButtonClasses`

Esta función encapsula toda la complejidad de las variantes de botones.

```typescript
import { getButtonClasses } from "@corella/core-ui";

const classes = getButtonClasses({
  variant: "solid", // solid | outline | ghost
  color: "primary", // primary | secondary | error...
  size: "medium",   // small | medium | large
  fullWidth: false,
  disabled: false
});

// Retorna string: "px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 ..."
```

### Ejemplo: `getSelectionClasses`

Maneja la lógica compartida para Checkbox y Radio, incluyendo variantes complejas como "Card" o "Chip".

```typescript
import { getSelectionClasses } from "@corella/core-ui";

const { container, input, indicator } = getSelectionClasses({
  type: "checkbox",
  variant: "card",
  hideControl: true, // Para modo "tile" sin input visible
  checked: true
});
```

## 🧩 Estructura del Paquete

```
core-ui/
├── src/
│   ├── styles/
│   │   ├── globals.css         # Definición de variables CSS
│   │   ├── getButtonClasses.ts # Lógica de botones
│   │   ├── getInputClasses.ts  # Lógica de inputs
│   │   └── getSelectionClasses.ts # Lógica de selectores
│   └── index.ts                # Punto de entrada
└── dist/                       # Salida compilada
```

---

## 🤝 Uso en Nuevos Frameworks

Si deseas portar Corella a un nuevo framework (ej. Vue o Svelte):

1.  Instala `@corella/core-ui`.
2.  Importa la función generadora correspondiente (ej. `getButtonClasses`).
3.  Crea tu componente Vue/Svelte pasando las props a esta función.
4.  Aplica las clases resultantes a los elementos HTML nativos.

¡Cero duplicación de estilos!
