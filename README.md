# Desafío 4 - Inmobiliaria

Este repositorio contiene el desarrollo del **Desafío 4 - Inmobiliaria** del módulo de **Introducción a JavaScript**.

## Objetivo

Practicar el uso de **arreglos de objetos, ciclos, interpolación, `innerHTML` y condicionales** para renderizar dinámicamente propiedades inmobiliarias en distintas páginas.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Bootstrap
- Font Awesome

## Estructura

```text
desafio-4-inmobiliaria/
├── index.html
├── propiedades_venta.html
├── propiedades_alquiler.html
├── README.md
└── assets/
    ├── css/
    │   └── estilos.css
    ├── img/
    │   └── img-main.jpeg
    └── js/
        ├── propiedades.js
        ├── index.js
        ├── venta.js
        └── alquiler.js
```

## Explicación de los ejercicios

### 1. Página principal

`index.html` muestra como máximo **3 propiedades en venta y 3 en alquiler**. Los botones permiten acceder a las páginas donde se muestran todas las propiedades.

### 2. Arreglos de propiedades

En `propiedades.js` se crean los arreglos `propiedades_venta` y `propiedades_alquiler`, con **4 objetos cada uno** y las propiedades solicitadas en el desafío.

### 3. Renderización dinámica

Los archivos JavaScript recorren los arreglos y utilizan **ciclos, interpolación e `innerHTML`** para generar las tarjetas de propiedades.

### 4. Condicionales

Los atributos `smoke` y `pets` se evalúan mediante `if` para mostrar el mensaje e ícono correspondiente según esté permitido o prohibido.

### 5. Módulos

Se utiliza `export` e `import` para compartir los arreglos entre los distintos archivos JavaScript. Las páginas cargan sus scripts con `type="module"`.
