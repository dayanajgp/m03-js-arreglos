import { propiedades_venta, propiedades_alquiler } from "./propiedades.js";

let htmlVenta = "";

for (let i = 0; i < 3; i++) {
  let propiedad = propiedades_venta[i];

  let mensajeSmoke = "";
  let iconoSmoke = "";

  if (propiedad.smoke) {
    mensajeSmoke = "Permitido fumar";
    iconoSmoke = '<i class="fas fa-smoking"></i>';
  } else {
    mensajeSmoke = "No se permite fumar";
    iconoSmoke = '<i class="fas fa-smoking-ban"></i>';
  }

  let mensajePets = "";
  let iconoPets = "";

  if (propiedad.pets) {
    mensajePets = "Mascotas permitidas";
    iconoPets = '<i class="fas fa-paw"></i>';
  } else {
    mensajePets = "No se permiten mascotas";
    iconoPets = '<i class="fas fa-ban"></i>';
  }

  htmlVenta += `
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
        <div class="card-body">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
          <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo.toLocaleString("es-CL")}</p>
          <p class="${propiedad.smoke ? "text-success" : "text-danger"}">${iconoSmoke} ${mensajeSmoke}</p>
          <p class="${propiedad.pets ? "text-success" : "text-danger"}">${iconoPets} ${mensajePets}</p>
        </div>
      </div>
    </div>
  `;
}

let htmlAlquiler = "";

for (let i = 0; i < 3; i++) {
  let propiedad = propiedades_alquiler[i];

  let mensajeSmoke = "";
  let iconoSmoke = "";

  if (propiedad.smoke) {
    mensajeSmoke = "Permitido fumar";
    iconoSmoke = '<i class="fas fa-smoking"></i>';
  } else {
    mensajeSmoke = "No se permite fumar";
    iconoSmoke = '<i class="fas fa-smoking-ban"></i>';
  }

  let mensajePets = "";
  let iconoPets = "";

  if (propiedad.pets) {
    mensajePets = "Mascotas permitidas";
    iconoPets = '<i class="fas fa-paw"></i>';
  } else {
    mensajePets = "No se permiten mascotas";
    iconoPets = '<i class="fas fa-ban"></i>';
  }

  htmlAlquiler += `
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
        <div class="card-body">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
          <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo.toLocaleString("es-CL")}</p>
          <p class="${propiedad.smoke ? "text-success" : "text-danger"}">${iconoSmoke} ${mensajeSmoke}</p>
          <p class="${propiedad.pets ? "text-success" : "text-danger"}">${iconoPets} ${mensajePets}</p>
        </div>
      </div>
    </div>
  `;
}

document.querySelector("#propiedades-venta").innerHTML = htmlVenta;
document.querySelector("#propiedades-alquiler").innerHTML = htmlAlquiler;
