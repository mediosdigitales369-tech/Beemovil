# BeeMovil Website - Next.js Migration

Este proyecto es una migración del sitio web original de BeeMovil (PHP) a **Next.js 15+** con **TypeScript** y **Tailwind CSS**, optimizado para el despliegue en **Vercel**.

## Cambios Clave

- **Framework**: Migración de PHP/Bootstrap a Next.js (App Router).
- **Estilos**: Uso de Tailwind CSS para un diseño más moderno y responsivo.
- **Componentes**: El sitio ahora está modularizado en componentes React reutilizables.
- **SEO**: Implementación de metadatos dinámicos y optimización de fuentes con `next/font`.
- **Formulario de Contacto**: Migración de `enviocorreo.php` a una API Route en `/app/api/contact`.

## Estructura del Proyecto

- `app/`: Contiene las páginas y rutas de la API.
- `components/`: Componentes de la interfaz de usuario (Navbar, Hero, Contacto, etc.).
- `public/`: Activos estáticos (imágenes y fuentes heredadas del sitio original).

## Desarrollo Local

```bash
npm install
npm run dev
```

## Despliegue en Vercel

1. Sube este repositorio a GitHub.
2. Conecta el repositorio a Vercel.
3. Configura las variables de entorno para el envío de correos si es necesario (e.g., `EMAIL_USER`, `EMAIL_PASS`).

---
Originalmente desarrollado en 2009, migrado a React en 2026.
