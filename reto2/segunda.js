class Factura {
  constructor(idCliente, total) {
    this.idCliente = idCliente;
    this.total = total;
    this.estado = "pendiente";
  }

  cobrar() {
    this.estado = "Pagada";
  }

  imprimir() {
    console.log(`
    ---Datos de factura---
    Cliente: ${this.idCliente}
    Total: ${this.total}
    Estado: ${this.estado}

    ${
      this.estado == "Pagada"
        ? "La tienda le agradece su compra."
        : "Por favor verifique su pago"
    }
    `);
  }
}

let main = () => {
  const listaDeClientes = [
    {
      nombre: "Maria",
      email: "maria@test.com",
      telefono: "1234567890",
      idCliente: new Date().getTime(),
    },
    {
      nombre: "Catherine",
      email: "catherine@test.com",
      telefono: "0987654321",
      idCliente: new Date().getTime(),
    },
    {
      nombre: "Fernando",
      email: "fernando@test.com",
      telefono: "5678904321",
      idCliente: new Date().getTime(),
    },
  ];
  let total = 1500;
  let idCliente = listaDeClientes.find(
    (cliente) => cliente.email === "maria@test.com"
  ).idCliente;

  let factura = new Factura(idCliente, total);
  factura.imprimir();
  factura.cobrar();
  factura.imprimir();
};

main();
