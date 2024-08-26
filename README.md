# Sustentación del Proyecto

## Introducción

Este proyecto es una aplicación web desarrollada como parte de un reto técnico para Rimac Seguros. La aplicación está construida utilizando **React** con **TypeScript** y **Vite** como herramienta de construcción. El objetivo principal es proporcionar una experiencia de usuario fluida y eficiente para la cotización de seguros.

## Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:

- **src/**: Contiene todo el código fuente de la aplicación.
  - **assets/**: Archivos estáticos como imágenes y fuentes.
  - **shared/**: Componentes, hooks, iconos, store y tipos compartidos.
    - **components/**: Componentes reutilizables como botones, checkboxes, inputs, etc.
    - **hooks/**: Hooks personalizados para manejar lógica de negocio.
    - **icons/**: Iconos utilizados en la aplicación.
    - **store/**: Estado global de la aplicación utilizando un store.
    - **types/**: Definiciones de tipos TypeScript.
  - **styles/**: Archivos SCSS para estilos globales y variables.
  - **views/**: Vistas principales de la aplicación, como cotización, home y resumen.

## Principales Componentes y Funcionalidades

- **Formulario**: Un formulario interactivo para la entrada de datos del usuario, utilizando componentes reutilizables como `Button`, `Checkbox`, `Input` y `SelectWithInput`.
- **Cotización**: Vista principal para la cotización de seguros, que incluye componentes como `CardTypeCotization` y `PlansList`.
- **Resumen**: Vista de resumen que muestra la información del plan de seguro seleccionado.

## Principios de Diseño y Buenas Prácticas

- **SOLID**: Se han aplicado principios SOLID para asegurar un código mantenible y extensible.
  - **Single Responsibility Principle**: Cada componente tiene una única responsabilidad.
  - **Open/Closed Principle**: Los componentes están diseñados para ser extendidos sin necesidad de modificar el código existente.
- **Clean Code**: Se ha seguido la filosofía de clean code para asegurar un código legible y fácil de entender.
- **Optimización de Rendimiento**: Uso de `React.memo` para evitar renderizados innecesarios y mejorar el rendimiento.

## Estilos y Responsividad

- **SCSS**: Se ha utilizado SCSS para manejar los estilos de manera modular y reutilizable.
- **Media Queries**: Se han implementado media queries para asegurar que la aplicación sea responsiva y se vea bien en diferentes tamaños de pantalla.

## Conclusión

Este proyecto demuestra la capacidad de construir una aplicación web moderna y eficiente utilizando las mejores prácticas de desarrollo. La estructura modular y el uso de principios SOLID aseguran que el código sea mantenible y escalable.
