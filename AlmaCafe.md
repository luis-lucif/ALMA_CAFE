# Proyecto: Menú Digital "Alma Café & Resto"
**Objetivo:** Aplicación web mobile-first escaneable por QR para visualizar cartas en PDF.
**Despliegue:** GitHub -> Vercel.

## 🎨 Paleta de Colores (Extraída del Logo)
* **Background (Fondo):** `#F9F4EB` (Crema Suave - Transmite calidez y limpieza).
* **Primary Text (Texto Principal/Logo):** `#231A12` (Marrón Oscuro Café - Contraste elegante y legible).
* **Accent 1 (Detalles/Botones):** `#B57B5A` (Cobre Orgánico - Para llamadas a la acción y bordes).
* **Accent 2 (Hojas/Detalles Secundarios):** `#5D6556` (Verde Salvia Oscuro - Para iconos o estados hover).
* **Accent 3 (Tonos claros):** `#D1B49D` (Arena Cálida - Para fondos de tarjetas o botones secundarios).

## 🔤 Tipografía Recomendada (Google Fonts)
* **Títulos / Logo:** `Playfair Display` o `Lora` (Tipografía Serif elegante).
* **Cuerpo / Botones:** `Inter` o `Montserrat` (Tipografía Sans-serif limpia para máxima legibilidad en móviles).

---

## 🤖 PROMPT PARA ANTIGRAVITY 2.0

**Copia y pega el siguiente texto en Antigravity 2.0:**

Actúa como un Desarrollador Frontend Senior y Diseñador UX/UI experto. Tu tarea es inicializar y codificar una aplicación web para el menú digital de una cafetería llamada "Alma Café & Resto". 

La aplicación será accedida mediante un código QR, por lo que el diseño DEBE ser estrictamente Mobile-First, responsivo, sumamente intuitivo y elegante.

### Stack Tecnológico Requerido:
- Framework: Next.js (App Router).
- Estilos: Tailwind CSS.
- Animaciones: Framer Motion.
- Iconos: Lucide React (o Heroicons).

### Guía de Diseño (UI/UX):
- **Estilo:** Orgánico, premium, cálido y minimalista.
- **Tipografía:** Usa una fuente Serif (ej. Playfair Display) para el título principal/saludo, y una Sans-serif (ej. Inter) para los botones y la interfaz.
- **Paleta de Colores (configura esto en el tailwind.config):**
  - bg-cream: `#F9F4EB` (Fondo principal)
  - text-coffee: `#231A12` (Texto principal)
  - accent-copper: `#B57B5A` (Botones principales, bordes)
  - accent-sage: `#5D6556` (Iconos o detalles)
  - accent-sand: `#D1B49D` (Fondos secundarios/hover)

### Estructura de la Aplicación (Single Page):
1. **Header:** - Logo de la marca (deja un placeholder o un componente de texto estilizado que diga "ALMA Café & Resto" con un pequeño icono de taza de café o rama de hojas).
   - Un mensaje de bienvenida cálido (ej. "Descubre nuestros sabores").

2. **Menú de Navegación (Grid/Lista de Botones):**
   - Deben existir 5 botones principales: "Desayuno", "Almuerzo", "Merienda", "Combos", y "Tragos".
   - Cada botón debe ser grande, fácil de tocar con el pulgar (min 48px de alto), con bordes redondeados (rounded-2xl o full) y un icono representativo de Lucide React al lado del texto.
   - **Funcionalidad:** Cada botón debe ser una etiqueta `<a>` que apunte a un archivo PDF estático alojado en la carpeta `/public` (ej. `/pdf/desayuno.pdf`), abriéndose en una nueva pestaña (`target="_blank"`).

3. **Animaciones y Efectos (con Framer Motion):**
   - Staggered Fade-In: Al cargar la página, el logo debe aparecer primero, seguido de los botones del menú apareciendo uno por uno en cascada desde abajo.
   - Micro-interacciones: Al presionar (tap) o hacer hover en los botones, estos deben tener una escala de rebote sutil (`whileTap={{ scale: 0.95 }}`) y un cambio de color o elevación de sombra.
   - Un efecto sutil de fondo: Implementa un pequeño patrón botánico o gradiente radial súper suave en el fondo que dé sensación de profundidad.

4. **Footer:**
   - Redes sociales de la cafetería (Instagram/WhatsApp).
   - "Desarrollado con ❤️ para Alma".

Por favor, genera el código completo para:
1. Las configuraciones base (Tailwind config, layout.tsx con las fuentes).
2. El componente principal (page.tsx) con toda la lógica de Framer Motion implementada y el diseño estructurado.
3. Asegúrate de que el código esté listo para subirse a GitHub y ser desplegado en Vercel sin errores.