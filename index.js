const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const btnBuscar = document.querySelector(".btn-buscar")
const inputBuscar = document.querySelector(".input-buscar")
const resultadoCointainer = document.querySelector(".pizzas-grid")

const buscarPizza = (id) => {
  return pizzas.find((pizza) => pizza.id === id)
}

const renderizarResultado = (pizza) => {
  if (!pizza) {
    return resultadoCointainer.innerHTML = `
      <div class="pizza-card">
          <div class="card-imagen">
            <img src="./img/lupa.svg" />
          </div>
          <div class="card-contenido">
            <h2 class="card-nombre">No se encontraron resultados con ese ID</h2>
          </div>
        </div>
    `
  } else {
    return resultadoCointainer.innerHTML = `
        <div class="pizza-card">
          <div class="card-imagen">
            <img src=${pizza.imagen} />
            <span class="card-id">ID: ${pizza.id}</span>
          </div>
          <div class="card-contenido">
            <h2 class="card-nombre">${pizza.nombre}</h2>
            <div class="card-ingredientes">
            ${pizza.ingredientes.map((ingrediente) => {
                return `<span class="ingrediente">${ingrediente}</span>`
              }).join("")}
            </div>
            <div class="card-footer">
              <span class="card-precio">$${pizza.precio}</span>
              <button class="btn-agregar">Agregar al carrito</button>
            </div>
          </div>
        </div>
    `
  }
}

const botonBuscarPizza = () => {
  let valorInput = Number(inputBuscar.value)
  if (!valorInput) {
    return alert("No se proporcionó ID")
  }
  inputBuscar.value = ""
  return renderizarResultado(buscarPizza(valorInput))
}

const iniciar = () => {
  btnBuscar.addEventListener("click", botonBuscarPizza)
  
}

iniciar()
