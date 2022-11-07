const productGroup = document.querySelector("#productGroup");
const CardTemplate = document.querySelector("#cardTemplate").content;
const libros = [
  {
    "titulo": "Bajo la misma estrella",
    "autor": "John Green",
    "precio": 2300,
    "cover": "https://res.cloudinary.com/dqloye1ik/image/upload/v1662171790/Byblos/libro1_jtbyhq.jpg",
  }, {
    "titulo": "La chica de la nieve",
    "autor": "Javier Castillo",
    "precio": 2600,
    "cover": "https://res.cloudinary.com/dqloye1ik/image/upload/v1662171791/Byblos/libro2_ij7v8m.webp",
  }, {
    "titulo": "Roma soy yo, la verdadera historia de Julio Cesar",
    "autor": "Santiago Posteguillo",
    "precio": 3100,
    "cover": "https://res.cloudinary.com/dqloye1ik/image/upload/v1662171792/Byblos/libro4_wendzp.jpg",
  }, {
    "titulo": "Los cuentos de la criada",
    "autor": "Margaret Atwood",
    "precio": 4300,
    "cover": "https://res.cloudinary.com/dqloye1ik/image/upload/v1662171791/Byblos/libro5_qegrxj.jpg",
  }, {
    "titulo": "Cuentos de hadas",
    "autor": "Charles Perrault",
    "precio": 1600,
    "cover": "https://res.cloudinary.com/dqloye1ik/image/upload/v1662171792/Byblos/libro6_uptimh.jpg",
  }, {
    "titulo": "Cumbres Borrascosas",
    "autor": "Emily bronte",
    "precio": 2540,
    "cover": "https://res.cloudinary.com/dqloye1ik/image/upload/v1662171792/Byblos/libro7_vjkois.jpg",
  }, {
    "titulo": "La bestia",
    "autor": "Carmen Mola",
    "precio": 3000,
    "cover": "https://res.cloudinary.com/dqloye1ik/image/upload/v1662171791/Byblos/libro3_h9kmqq.jpg",
  }

];
const fragment = document.createDocumentFragment();
let user = "leoPlaza";
let password = "Password123";


function logIn() {
  let usrInput = document.getElementById("user").value;
  let passInput = document.getElementById("password").value;
  if (usrInput === user, passInput === password) {
    console.log("aca estamos :) ");
    console.log("Si, entro con Usuario: " + usrInput + "\n" + "pass: " + passInput);
  } else {
    console.log("Usuario: " + usrInput + "\n" + "pass: " + passInput);
  }
}


const cards = jsonLibros => {
  jsonLibros.forEach(libro => {
    //console.log(libro.titulo);
    CardTemplate.querySelector(".card-text").textContent = libro.titulo + " - " + libro.autor;
    CardTemplate.querySelector("img").setAttribute("src", libro.cover)    
    CardTemplate.querySelector("img").setAttribute("alt", libro.titulo)    


    const clone = CardTemplate.cloneNode(true);
    fragment.appendChild(clone);
  });
  productGroup.appendChild(fragment);
}

//cardHTML();
cards(libros);