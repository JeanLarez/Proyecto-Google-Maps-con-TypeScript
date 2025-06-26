// Definimos una interfaz llamada Mappable. 
// Cualquier clase que implemente esta interfaz puede ser utilizada por CustomMap para agregar un marcador al mapa.
// Esto es un ejemplo del patrón de diseño "interface segregation" y "programar hacia una interfaz".
export interface Mappable {
  // location define la latitud y longitud del objeto.
  location: {
    lat: number;
    lng: number;
  };

  // Método que debe devolver el contenido que se mostrará en el marcador (InfoWindow).
  contentMarker(): string;

  // color es solo un ejemplo de propiedad adicional que puede tener la clase.
  color: string;
}

// Clase CustomMap: encapsula la lógica para interactuar con Google Maps.
// Permite agregar marcadores de cualquier objeto que implemente la interfaz Mappable.
export class CustomMap {
  // googleMap es una instancia privada del mapa de Google.
  private googleMap: google.maps.Map;

  // El constructor recibe el id del div donde se renderizará el mapa.
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1, // Nivel de zoom inicial.
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  // Método para agregar un marcador al mapa.
  // Recibe cualquier objeto que implemente la interfaz Mappable.
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    // Al hacer click en el marcador, se abre una ventana de información (InfoWindow)
    // con el contenido que devuelve el método contentMarker() del objeto.
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.contentMarker(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
