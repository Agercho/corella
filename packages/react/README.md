# @corella/react

Implementación oficial de **Corella Design System** para React. Este paquete envuelve la lógica de estilos de `@corella/core-ui` en componentes React idiomáticos, totalmente tipados y accesibles.

---

## 📦 Instalación

```bash
pnpm add @corella/react @corella/core-ui
```

Asegúrate de haber configurado [Tailwind CSS y los estilos globales](../README.md#configuración-del-proyecto) en tu proyecto raíz.

---

## 🚀 Componentes Disponibles

### Button

Un componente de botón versátil con soporte para múltiples variantes y estados.

```tsx
import { Button } from "@corella/react";

export const MyAction = () => (
  <div className="flex gap-2">
    <Button variant="solid" color="primary">Guardar</Button>
    <Button variant="outline" color="error">Eliminar</Button>
    <Button variant="ghost" size="small">Cancelar</Button>
  </div>
);
```

### Input

Campos de entrada de texto con soporte avanzado para iconos, etiquetas flotantes y acciones integradas.

```tsx
import { Input } from "@corella/react";
import { IconSearch } from "./icons";

export const SearchBar = () => (
  <Input
    placeholder="Buscar..."
    floatingLabel={true}
    startIcon={<IconSearch />}
    helperText="Presiona Enter para buscar"
  />
);
```

### Checkbox & Radio

Componentes de selección con soporte para variantes clásicas, modo "tarjeta" y modo "chip".

#### Básico
```tsx
import { Checkbox, Radio } from "@corella/react";

<Checkbox label="Acepto los términos" />
<Radio name="gender" label="Otro" />
```

#### Variante Card (Tarjeta)
Ideal para selecciones ricas visualmente.

```tsx
<Radio
  variant="card"
  hideControl
  name="plan"
  label="Pro Plan"
>
  <span className="text-gray-500 text-sm">Todo ilimitado por $20/mes.</span>
</Radio>
```

#### Variante Chip (Filtros)
Ideal para listas de categorías o filtros rápidos.

```tsx
<div className="flex gap-2">
  <Checkbox variant="chip" label="React" color="info" defaultChecked />
  <Checkbox variant="chip" label="Astro" color="warning" />
</div>
```

---

## 🛠️ TypeScript

Todos los componentes exportan sus interfaces de props para facilitar la extensión.

```tsx
import type { ButtonProps } from "@corella/react";

const MyCustomButton = (props: ButtonProps) => {
  return <Button {...props} className="shadow-xl" />;
};
```

## 🔌 Integración con Frameworks

### Next.js (App Router)
Corella funciona perfectamente con React Server Components (RSC) por defecto, ya que la mayoría de los componentes son puramente presentacionales. Para componentes interactivos (que usan `useState` o `useRef` internamente, como `Checkbox` con indeterminado), Corella ya incluye la directiva `"use client"` donde es necesario.

### Vite / CRA
Importa los estilos en tu `main.tsx` o `App.tsx` y usa los componentes directamente.

---

## 📄 Licencia

MIT © Corella Design System
