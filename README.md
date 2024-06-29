# Sistema de Informacion Aps V2.0 Tesis De Grado

Este proyecto es un sistema de información diseñado para la caracterización y gestión de datos relacionados con la atención primaria en salud. El sistema proporciona una plataforma eficiente y moderna para la recopilación, análisis y visualización de datos de salud, facilitando la toma de decisiones y la mejora de los servicios de atención primaria.

![Logo de mi proyecto](present.png)

# Tecnologías Utilizadas

Frontend: React.js

Backend: Django REST Framework

Base de Datos: PostgreSQL


# Características Principales

Interfaz de Usuario Intuitiva: Utilizando React.js, la interfaz es fácil de usar y está diseñada para mejorar la experiencia del usuario.

API RESTful: Desarrollada con Django REST Framework, la API proporciona endpoints robustos y seguros para la gestión de datos.

Autenticación y Autorización: Implementación de mecanismos de seguridad para proteger los datos y garantizar el acceso controlado.

Gestión de Datos de Salud: Funcionalidades para la entrada, actualización y visualización de datos de pacientes y servicios de salud.

Reportes y Análisis: Generación de reportes y análisis de datos para apoyar la toma de decisiones.

![Logo de mi proyecto](phoneOne.png)

Este proyecto fue colaborativo realizado por Esteban y Daniel Villota @Daniel Villota

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
