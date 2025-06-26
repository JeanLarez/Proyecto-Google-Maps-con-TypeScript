import { faker } from "@faker-js/faker";
// Importa la librería faker para generar datos aleatorios (en este caso, nombres y ubicaciones).

import { Mappable } from "./CustomMap";
// Importa la interfaz Mappable, que define los requisitos para que una clase pueda ser usada por CustomMap.

// La clase User representa un usuario con nombre y ubicación.
// Implementa la interfaz Mappable, lo que permite que sus instancias sean agregadas al mapa.
export class User implements Mappable {
  name: string; // Nombre del usuario.
  location: {
    lat: number; // Latitud de la ubicación del usuario.
    lng: number; // Longitud de la ubicación del usuario.
  };
  color: string = "red"; // Propiedad requerida por la interfaz Mappable.

  constructor() {
    // Al crear un usuario, se le asigna un nombre y una ubicación aleatoria usando faker.
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  // Método requerido por la interfaz Mappable.
  // Devuelve el contenido HTML que se mostrará en el marcador del mapa cuando se haga clic.
  contentMarker(): string {
    return `<h1>User Name: ${this.name}</h1>`;
  }
}
