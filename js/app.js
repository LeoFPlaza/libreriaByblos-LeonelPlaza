const productGroup = document.querySelector("#productGroup");
const cardTemplate = document.querySelector("#cardTemplate").content;
const libros = [
  {
    "id": "1",
    "titulo": "Bajo la misma estrella",
    "autor": "John Green",
    "precio": 2300,
    "cover": "https://res.cloudinary.com/dqloye1ik/image/upload/v1662171790/Byblos/libro1_jtbyhq.jpg",
  }, {
    "id": "2",
    "titulo": "La chica de la nieve",
    "autor": "Javier Castillo",
    "precio": 2600,
    "cover": "https://res.cloudinary.com/dqloye1ik/image/upload/v1662171791/Byblos/libro2_ij7v8m.webp",
  }, {
    "id": "3",
    "titulo": "Roma soy yo, la verdadera historia de Julio Cesar",
    "autor": "Santiago Posteguillo",
    "precio": 3100,
    "cover": "https://res.cloudinary.com/dqloye1ik/image/upload/v1662171792/Byblos/libro4_wendzp.jpg",
  }, {
    "id": "4",
    "titulo": "Los cuentos de la criada",
    "autor": "Margaret Atwood",
    "precio": 4300,
    "cover": "https://res.cloudinary.com/dqloye1ik/image/upload/v1662171791/Byblos/libro5_qegrxj.jpg",
  }, {
    "id": "5",
    "titulo": "Cuentos de hadas",
    "autor": "Charles Perrault",
    "precio": 1600,
    "cover": "https://res.cloudinary.com/dqloye1ik/image/upload/v1662171792/Byblos/libro6_uptimh.jpg",
  }, {
    "id": "6",
    "titulo": "Cumbres Borrascosas",
    "autor": "Emily bronte",
    "precio": 2540,
    "cover": "https://res.cloudinary.com/dqloye1ik/image/upload/v1662171792/Byblos/libro7_vjkois.jpg",
  }, {
    "id": "7",
    "titulo": "La bestia",
    "autor": "Carmen Mola",
    "precio": 3000,
    "cover": "https://res.cloudinary.com/dqloye1ik/image/upload/v1662171791/Byblos/libro3_h9kmqq.jpg",
  }

];
const fragment = document.createDocumentFragment();
let user = "leoPlaza";
let password = "Password123";
let carrito = {};
const addCarrito = e => {
  //console.log(e.target);
  if(e.target.classList.contains("card-img-top")){
    carritoPush(e.target.parentElement);
  }
  e.stopPropagation()
}

productGroup.addEventListener("click", (e) => {
  addCarrito(e);
});

const carritoPush = obj => {

  const libroEnCarrito = {
    id: obj.querySelector("img").dataset.id,
    titulo: obj.querySelector(".title").textContent,
    price: obj.querySelector(".price").getAttribute("valor"),
    cantidad : 1
  }
  if(carrito.hasOwnProperty(libroEnCarrito.id)){
    libroEnCarrito.cantidad = carrito[libroEnCarrito.id].cantidad + 1;
  }

  carrito[libroEnCarrito.id]={...libroEnCarrito}
  console.log(carrito);

}

const cards = jsonLibros => {
  jsonLibros.forEach(libro => {
    //console.log(libro.titulo);
    cardTemplate.querySelector(".title").textContent = libro.titulo;
    cardTemplate.querySelector(".price").textContent = "$ "+libro.precio;
    cardTemplate.querySelector(".price").setAttribute ("valor", libro.precio);
    cardTemplate.querySelector("img").setAttribute("src", libro.cover);
    cardTemplate.querySelector("img").setAttribute("alt", libro.titulo);
    cardTemplate.querySelector("img").dataset.id = libro.id;

    const clone = cardTemplate.cloneNode(true);
    fragment.appendChild(clone);
  });
  productGroup.appendChild(fragment);
}



//cardHTML();
function logIn() {
  let usrInput = document.getElementById("user").value;
  let passInput = document.getElementById("password").value;
  if (usrInput !== user, passInput !== password) {
    console.log("Usuario: " + usrInput + "\n" + "pass: " + passInput);
  } else {
    console.log("por ahora solo llega hasta aca :) ");
    console.log("Usuario: " + usrInput + "\n" + "pass: " + passInput);
  }
}

cards(libros);