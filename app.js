// hello.init(
//   {
//     "google": "awesome-byblos-v01"
//   }
// );
const productGroup = document.querySelector("#productGroup");
const cardTemplate = document.querySelector("#cardTemplate").content;
const fragment = document.createDocumentFragment();
let user = "leoPlaza";
let password = "Password123";
let userNav = localStorage.getItem('usuario');


const fetchData = async () => {
  try {
    const res = await fetch('libros.json');
    const data = await res.json();
    cards(data);
  }catch (err){
    console.log(err);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
  if (localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'));
    buildCarrito();
  }
})


const cards = jsonLibros => {
  jsonLibros.forEach(libro => {
    console.log(libro);
    cardTemplate.querySelector(".title").textContent = libro.titulo;
    cardTemplate.querySelector(".precio").textContent = "$ " + libro.precio;
    cardTemplate.querySelector(".precio").setAttribute("valor", libro.precio);
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

  passInput !== password ? console.log("Usuario: " + usrInput + "\n" + "pass: " + passInput) : this.userNav = localStorage.setItem('userLS', usrInput);

}

// hello.on('auth.login', function(auth) {

// 	// Call user information, for the given network
// 	hello(auth.network).api('me').then(function(r) {
// 		// Inject it into the container
// 		var label = document.getElementById('profile_' + auth.network);
// 		if (!label) {
// 			label = document.createElement('div');
// 			label.id = 'profile_' + auth.network;
// 			document.getElementById('profile').appendChild(label);
// 		}
// 		label.innerHTML = '<img src="' + r.thumbnail + '" /> Hey ' + r.name;
// 	});
// });

// hello.init({
// 	google: GOOGLE_CLIENT_ID
// }, {redirect_uri: 'redirect.html'});

productGroup.addEventListener("click", (e) => {
  addCarrito(e);
});