// Clases base que siempre se aplican
const BASE_CLASSES = "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300";
// Clases específicas para el estado activo
const ACTIVE_CLASSES = "bg-[--corella-color-primary] text-[--corella-color-primary-content] shadow-md hover:bg-[--corella-color-primary-hover]";
// Clases específicas para el estado inactivo
const INACTIVE_CLASSES = "bg-[--corella-color-base] text-[--corella-color-neutral] hover:text-[--corella-color-primary] hover:bg-[--corella-color-base-hover]";
/**
 * Función pura que calcula las clases CSS para el FilterChip.
 * @param isActive - Si el chip debe mostrarse como activo.
 * @returns Una cadena de clases Tailwind CSS.
 */
export function getChipClasses(isActive) {
    // Concatena las clases base con las clases de estado
    const stateClasses = isActive ? ACTIVE_CLASSES : INACTIVE_CLASSES;
    return `${BASE_CLASSES} ${stateClasses}`;
}
