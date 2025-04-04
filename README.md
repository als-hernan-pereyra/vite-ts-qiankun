# Plantilla de Proyecto Vite + TypeScript + Qiankun para Microfrontends

Este es un **boilerplate de microfrontends** que utiliza **Qiankun** para implementar una arquitectura de microfrontends. Qiankun se basa en **single-spa** y ofrece una solución eficiente para construir aplicaciones de microfrontends escalables, mantenibles y listas para producción.

Actualmente, esta versión solo soporta el funcionamiento del **microfrontend React**. La configuración para cargar los microfrontends **Vue** y **Svelte** aún está pendiente.

---

## Estructura del Proyecto

# at shell app
cd /shel
npm run dev 
- **Aplicación Shell**: La aplicación principal que actúa como orquestadora y carga los diferentes microfrontends.
- **Microfrontend React**: Un microfrontend construido con React, listo para integrarse en la aplicación Shell.
- **Microfrontends Vue y Svelte**: Las configuraciones de estos microfrontends aún están pendientes.

---

## Empezando

Sigue los siguientes pasos para ejecutar localmente el **Microfrontend React** y la **Aplicación Shell**.

### Paso 1: Configurar el Microfrontend React

1. Navega al directorio `react-microfrontend`:
    ```bash
    cd react-microfrontend
    ```

2. Instala las dependencias necesarias:
    ```bash
    npm install
    ```

3. Construye el microfrontend React:
    ```bash
    npm run build
    ```

4. Sirve el microfrontend React construido:
    ```bash
    npx http-server ./dist -p 3001 --cors
    ```

   Esto ejecutará el microfrontend React en `http://localhost:3001`.

---

### Paso 2: Configurar la Aplicación Shell

1. Navega al directorio `shell`:
    ```bash
    cd shell
    ```

2. Instala las dependencias necesarias para la aplicación Shell:
    ```bash
    npm install
    ```

3. Inicia la aplicación Shell:
    ```bash
    npm run dev
    ```

   Esto arrancará la aplicación Shell en `http://localhost:3000`.

---

## Configuraciones Pendientes

- **Microfrontend Vue**: La configuración de **Vite** para ejecutar el microfrontend **Vue** en la aplicación Shell aún está pendiente.
- **Microfrontend Svelte**: La configuración de **Vite** para ejecutar el microfrontend **Svelte** en la aplicación Shell también está pendiente.

Una vez agregadas estas configuraciones, podrás cargar los microfrontends **Vue** y **Svelte** en la aplicación Shell junto con el microfrontend **React**.

---

## Notas

- El framework **Qiankun** cargará dinámicamente los microfrontends dentro de la aplicación Shell según la ruta activa y las reglas de enrutamiento configuradas.
- Si deseas agregar más microfrontends, sigue el ejemplo del microfrontend React. Necesitarás configurar sus builds e integraciones en el registro de microfrontends de la aplicación Shell.
- Asegúrate de **ejecutar los microfrontends en puertos diferentes** para evitar conflictos (React en `3001`, Vue en `3002`, etc.).
- El problema de **CORS** se resuelve utilizando el flag `--cors` al servir los microfrontends.

---

## Mejoras Futuras

- Agregar la capacidad de cargar los microfrontends **Vue** y **Svelte** en la aplicación Shell.
- Implementar una gestión de estado global compartido para la comunicación entre los microfrontends.
- Optimizar la carga de los microfrontends utilizando lazy loading y otras técnicas de rendimiento.
- Añadir pruebas para la integración de los microfrontends.

---
