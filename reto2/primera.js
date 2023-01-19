class Camion {
  constructor(capacidad, conductor) {
    this.capacidad = capacidad;
    this.pasajeros = 0;
    this.conductor = conductor;

    console.log(`Capacidad: ${this.capacidad}`);
  }

  subir(pasajeros) {
    let totalPasajeros = this.pasajeros + pasajeros;
    if (totalPasajeros <= this.capacidad) {
      this.pasajeros = totalPasajeros;
      console.log(
        `Abordaron: ${pasajeros}, Pasajeros a bordo: ${this.pasajeros}`
      );
    } else {
      let pasajerosLimite = this.capacidad - this.pasajeros;
      console.log(
        `El camion no tiene capacidad para tantos pasajeros, solo pueden abordar: ${pasajerosLimite} pasajeros`
      );
    }
  }

  bajar(pasajeros) {
    let totalPasajeros = this.pasajeros - pasajeros;

    if (totalPasajeros >= 0) {
      if (totalPasajeros === 0) {
        console.log("Han bajado todos los pasajeros");
        this.pasajeros = 0;
      } else {
        console.log(
          `Bajaron: ${pasajeros}, Pasajeros a bordo: ${totalPasajeros}`
        );
        this.pasajeros = totalPasajeros;
      }
    } else {
      console.log(
        `Error, no existe tal cantidad de pasajeros, compruebe el numero de pasajeros que bajaran`
      );
    }
  }

  setConductor(conductor) {
    this.conductor = conductor;
  }
}

class Conductor {
  constructor(nombre, licencia) {
    this.nombre = nombre;
    this.licencia = licencia;
  }
}

let main = () => {
  let conductorNombre = "Saul";
  let conductorLicencia = "GDL1";
  let conductor = new Conductor(conductorNombre, conductorLicencia);

  let camionCapacidad = 30;
  let camion = new Camion(camionCapacidad, conductor);

  camion.subir(10);
  camion.bajar(2);
  camion.subir(5);
  camion.bajar(1);
  camion.subir(12);
  camion.bajar(9);
  camion.subir(16);
};

main();
