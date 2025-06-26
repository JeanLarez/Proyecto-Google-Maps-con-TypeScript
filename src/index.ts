/// <reference types="@types/google.maps" />
// Esta línea le dice a TypeScript que use las definiciones de tipos de Google Maps,
// lo que permite autocompletado y validación de tipos para la API de Google Maps.

import { User } from "./User";
// Importa la clase User, que representa un usuario con ubicación y otros datos.

import { Company } from "./Company";
// Importa la clase Company, que representa una empresa con ubicación y otros datos.

import { CustomMap } from "./CustomMap";
// Importa la clase CustomMap, que encapsula la lógica para mostrar un mapa y agregar marcadores.

// Creamos una instancia de User y Company.
// Ambas clases implementan la interfaz Mappable, lo que les permite ser usadas por CustomMap.
const user = new User();
const company = new Company();

// Creamos una instancia de CustomMap, pasando el id del div donde se mostrará el mapa.
const customMap = new CustomMap("map");

// Agregamos los marcadores al mapa usando los métodos definidos en CustomMap.
// Gracias a la interfaz Mappable, tanto user como company pueden ser agregados.
customMap.addMarker(user);
customMap.addMarker(company);
