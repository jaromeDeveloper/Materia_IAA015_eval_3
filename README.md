# Curso intensivo de Programación Web Front — Evaluación Final

Resumen profesional  
Repositorio con la landing page de la evaluación final: una sola página estática, responsiva y accesible que contiene información del curso, módulos y un formulario de inscripción con validación personalizada.

Objetivo de la evaluación
- Entregar una landing page funcional en un único archivo HTML con estilos y comportamiento JS.
- Cumplir adaptabilidad visual (móvil y escritorio).
- Implementar validación de formulario que impida envíos incompletos y marque visualmente campos inválidos.

Estructura del proyecto
- index.html — Marca semántica (header, main, sections, footer) y formulario de registro.
- styles.css — Variables CSS, estilos base, componentes y media queries para responsividad.
- script.js — Validaciones y lógica de interacción (marcado visual de campos inválidos).
- assets/ — (opcional) imágenes, íconos y fuentes.
- README.md — Documentación (este archivo).

Requisitos y consideraciones del entorno
- Navegador moderno (Chrome, Edge, Firefox, Safari).
- No requiere servidor, aunque es recomendable servirlo localmente para pruebas (CORS y rutas relativas).

Cómo ejecutar localmente (Windows — PowerShell o CMD)
- Abrir la carpeta del proyecto 
- Despues abrir una terminal en PowerShell y ejecutar: ( el origen es sobre la carpeta del proyecto, donde se encuentra index.html)
  ```powershell
  python -m http.server 8000
  ```
  Abrir en el navegador: http://localhost:8000

- Alternativa rápida: usar la extensión Live Server en Visual Studio Code.

Comportamiento y validaciones del formulario
- Todos los campos son obligatorios (atributo `required` presente).
- El formulario mantiene `novalidate` para que la validación sea controlada por `script.js`.
- Validaciones implementadas:
  - Nombre: no vacío.
  - Correo: formato válido (input type="email" + validación JS).
  - Teléfono: solo dígitos; `inputmode="numeric"`, `pattern="\d+"` y comprobación JS con /^\d+$/.
  - Modalidad: opción seleccionada.
  - Aceptación de términos: checkbox marcado.
- Feedback visual:
  - Campos inválidos reciben la clase `.invalid` que aplica borde y sombra naranja y `aria-invalid="true"`.
  - Se enfoca automáticamente el primer campo inválido.
  - Mensajes globales en `#mensajeFormulario` con `role="status"` y `aria-live="polite"`.

Responsividad y accesibilidad
- Enfoque móvil‑primero: estilos base para móvil y media queries (ej. 768px) para ajustes de tablet/escritorio.
- Uso de unidades fluidas (`clamp`, `vw`, `rem`) para tipografía y contenedores.
- Elementos semánticos y atributos ARIA donde aplica (labels, aria-labelledby, role, aria-live, focus-visible).
- Tamaños de objetivo táctiles adecuados para botones y controles.

Criterios de evaluación (checklist)
- [ ] Página de una sola ruta (sí).
- [ ] Funciona en navegador sin errores JS visibles.
- [ ] Diseño responsivo: probado en móvil y escritorio.
- [ ] Formulario con validación y bloqueo de envío si faltan datos.
- [ ] Feedback visual claro (clase `.invalid`).
- [ ] Campo teléfono acepta solo números.
- [ ] Accesibilidad básica aplicada (labels, ARIA, focus).

Mejoras recomendadas (pos evaluación)
- Quitar `novalidate` si se desea combinar validación nativa con mensajes personalizados.
- Permitir formatos telefónicos regionales (espacios, guiones, prefijo internacional) ajustando la expresión regular.
- Separar CSS/JS en /src y agregar pipeline de build (esbuild/parcel) para producción.
- Añadir tests unitarios para funciones de validación (Jest) y linting (ESLint/Stylelint).
- Optimizar imágenes (WebP) y configurar CI/CD para despliegue en Netlify / Vercel.

Contacto
- Autor del proyecto: Web Front Academy (informes@cursowebfront.com)
- Fecha: 2026

---
