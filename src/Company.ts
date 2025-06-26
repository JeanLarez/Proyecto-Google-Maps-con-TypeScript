import { faker } from "@faker-js/faker";
// Importa la librería faker para generar datos aleatorios (en este caso, nombres de empresas y ubicaciones).

import { Mappable } from "./CustomMap";
// Importa la interfaz Mappable, que define los requisitos para que una clase pueda ser usada por CustomMap.

// La clase Company representa una empresa con nombre, frase y ubicación.
// Implementa la interfaz Mappable, lo que permite que sus instancias sean agregadas al mapa.
export class Company implements Mappable {
  companyName: string; // Nombre de la empresa.
  catchPhrase: string; // Frase característica de la empresa.
  location: {
    lat: number; // Latitud de la ubicación de la empresa.
    lng: number; // Longitud de la ubicación de la empresa.
  };
  color: string = "red"; // Propiedad requerida por la interfaz Mappable.

  constructor() {
    // Al crear una empresa, se le asigna un nombre, una frase y una ubicación aleatoria usando faker.
    (this.companyName = faker.company.name()),
      (this.catchPhrase = faker.company.catchPhrase()),
      (this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude()),
      });
  }

  // Método requerido por la interfaz Mappable.
  // Devuelve el contenido HTML que se mostrará en el marcador del mapa cuando se haga clic.
  contentMarker(): string {
    return `<h1>Company Name: ${this.companyName}</h1>
                <h3>Catch Phrase: ${this.catchPhrase}</h3>`;
  }
}
