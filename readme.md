# Maps App - TypeScript Design Pattern Demo

Este proyecto forma parte del curso **"Typescript: The Complete Developer's Guide"** de Stephen Grider en Udemy.

## Descripción

La aplicación demuestra cómo aplicar un patrón de diseño basado en interfaces en TypeScript. El objetivo es mostrar cómo diferentes clases (`User` y `Company`) pueden adaptarse a una clase genérica (`CustomMap`) mediante la implementación de una interfaz común (`Mappable`). Así, ambas clases pueden interactuar con el mapa de Google Maps de manera flexible y escalable.

## Características

- Uso de **TypeScript** para tipado estricto y autocompletado.
- Integración con **Google Maps JavaScript API**.
- Generación de datos aleatorios usando la librería **faker**.
- Ejemplo práctico del principio de "programar hacia una interfaz" y "interface segregation".
- Código modular y comentado para facilitar el aprendizaje.

## Estructura del Proyecto

```
maps/
├── src/
│   ├── Company.ts
│   ├── CustomMap.ts
│   ├── User.ts
│   └── index.ts
├── index.html
└── README.md
```

## Instalación

1. Clona el repositorio o descarga los archivos.
2. Instala las dependencias necesarias:
   ```
   npm install
   ```
3. Asegúrate de tener una clave válida de Google Maps API y reemplázala en el archivo `index.html` si es necesario.

## Uso

1. Compila los archivos TypeScript a JavaScript:
   ```
   npx tsc
   ```
2. Abre `index.html` en tu navegador.
3. Verás un mapa con marcadores generados aleatoriamente para usuarios y empresas.

## Notas

- El archivo `index.html` carga directamente los archivos TypeScript como módulos para fines educativos. En un entorno real, deberías compilar primero a JavaScript.
- Este proyecto es solo para fines de aprendizaje y demostración de patrones de diseño en TypeScript.

## Créditos

Curso: [Typescript: The Complete Developer's Guide](https://www.udemy.com/course/typescript-the-complete-developers-guide/)  
Instructor: **Stephen