# @corella/astro

Implementación oficial de **Corella Design System** para Astro. Diseñado para aprovechar la arquitectura de islas y el rendimiento "Zero-JS by default" de Astro.

---

## 📦 Instalación

```bash
pnpm add @corella/astro @corella/core-ui
```

No olvides [configurar Tailwind CSS](../README.md#configuración-del-proyecto) incluyendo la ruta de `@corella` en tu `content` config.

---

## 🌟 Filosofía Astro-First

Los componentes de este paquete son archivos `.astro` nativos. Esto significa:

1.  **Cero JavaScript en el cliente:** A menos que sea estrictamente necesario (hidaratación), los componentes renderizan HTML puro y estático.
2.  **Slots Potentes:** Aprovechamos los `named slots` de Astro para una composición flexible.
3.  **Ligereza:** Sin overhead de librerías de renderizado como React o Vue.

---

## 🚀 Componentes y Uso

### Button

```astro
---
import { Button } from "@corella/astro";
---

<Button variant="solid" color="primary" href="/contact">
  Contáctanos
</Button>
```
*Nota: Si pasas un `href`, el componente renderiza automáticamente un `<a>`, si no, un `<button>`.*

### Input

Usa slots nombrados para inyectar iconos o botones de acción sin complejidad extra.

```astro
---
import { Input } from "@corella/astro";
import SearchIcon from "../icons/Search.astro";
---

<Input placeholder="Buscar usuario..." floatingLabel>
  <!-- Slots Nombrados -->
  <SearchIcon slot="start-icon" class="w-5 h-5" />

  <button slot="end-action" class="text-xs font-bold text-primary">
    LIMPIAR
  </button>
</Input>
```

### Checkbox & Radio

Soporte completo para variantes visuales.

```astro
---
import { Checkbox, Radio } from "@corella/astro";
---

<!-- Clásico -->
<Checkbox label="Recordarme" />

<!-- Chip (Filtros) -->
<div class="flex gap-2">
  <Radio name="filter" variant="chip" label="Todos" checked />
  <Radio name="filter" variant="chip" label="Populares" />
</div>

<!-- Card (Tarjetas ricas) -->
<Radio name="shipping" variant="card" hideControl>
  <div class="flex justify-between w-full">
    <span>Envío Express</span>
    <span class="font-bold">$15.00</span>
  </div>
</Radio>
```

---

## 🧩 Integración

Puedes mezclar libremente componentes de `@corella/astro` con componentes de framework en tus "Islas" de Astro (`client:load`), pero recuerda que los componentes `.astro` son **solo de servidor**.

Si necesitas un componente interactivo dentro de una isla de React (ej. un formulario complejo validado en cliente), te recomendamos usar la versión de React (`@corella/react`) dentro de esa isla.

---

## 📄 Licencia

MIT © Corella Design System
