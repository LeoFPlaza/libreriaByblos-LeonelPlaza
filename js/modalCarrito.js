let carrito = {};
const footerCarrito = document.querySelector("#footerCarrito");
const itemsCarrito = document.querySelector("#itemsCarrito")
const templateCarrito = document.querySelector("#templateCarrito").content;
const templateFooterCarrito = document.querySelector("#templateFooterCarrito").content;

const carritoPush = obj => {

    const libroEnCarrito = {
        id: obj.querySelector("img").dataset.id,
        titulo: obj.querySelector(".title").textContent,
        precio: obj.querySelector(".precio").getAttribute("valor"),
        cantidad: 1
    }
    if (carrito.hasOwnProperty(libroEnCarrito.id)) {
        libroEnCarrito.cantidad = carrito[libroEnCarrito.id].cantidad + 1;
    }

    carrito[libroEnCarrito.id] = { ...libroEnCarrito }
    buildCarrito();

}


const addCarrito = (e) => {
    //console.log(e.target);
    if (e.target.classList.contains("card-img-top")) {
        carritoPush(e.target.parentElement);
        console.log(e.target.dataset);
        Toastify({
            text: "agregaste "+ e.target.alt + " a tu carrito",
            duration: 3000,
            style: {
                background: "linear-gradient(315deg, #7f23f7, #40117e)",
              },
        }).showToast();
    }
    e.stopPropagation()
}

const buildCarrito = () => {
    itemsCarrito.innerHTML = '';
    // console.log(carrito);
    Object.values(carrito).forEach(libroEnCarrito => {
        //console.log(libroEnCarrito)
        templateCarrito.querySelector('th').textContent = libroEnCarrito.id;
        templateCarrito.querySelectorAll('td')[0].textContent = libroEnCarrito.titulo;
        templateCarrito.querySelectorAll('td')[1].textContent = libroEnCarrito.cantidad;
        templateCarrito.querySelector('span').textContent = libroEnCarrito.cantidad * parseInt(libroEnCarrito.precio);
        templateCarrito.querySelector('.fa-trash-alt').dataset.id = libroEnCarrito.id;

        const cloneProducto = templateCarrito.cloneNode(true);
        fragment.appendChild(cloneProducto);
    })
    itemsCarrito.appendChild(fragment);

    footerTablaCarrito();
    localStorage.setItem('carrito', JSON.stringify(carrito));

}

const footerTablaCarrito = () => {
    //footerCarrito.innerHTML = '';
    const precioTotalCarrito = Object.values(carrito).reduce((accum, { cantidad, precio }) => accum + cantidad * precio, 0);

    Object.keys(carrito).length === 0 ? footerCarrito.innerHTML = ` <th scope="row" colspan="5"> No hay libros en tu carrito</th> ` :
        footerCarrito.innerHTML = `                                    
        <th scope="row" colspan="1"> Total</th>
        <th scope="row" colspan="2"></th>
        <th scope="row" colspan="1"> $`+ precioTotalCarrito + `</th>
        <th scope="row" colspan="1"></th>
        `;

        const vaciarCarrito = document.querySelector(".vaciarCarrito");
        vaciarCarrito.addEventListener('click', () =>{
            carrito = {};
            buildCarrito();
            // console.log(carrito);
            return carrito;
        })
    // console.log(precioTotalCarrito);
}

const btnDelete = e => {
    if (e.target.classList.contains('fa-trash-alt')){
        const elementoCarrito = carrito[e.target.dataset.id];
        elementoCarrito.cantidad--
         console.log(elementoCarrito)

        if(elementoCarrito.cantidad === 0){
            delete carrito[e.target.dataset.id];
            Toastify({
                text: "Quitaste "+ elementoCarrito.titulo,
                duration: 3000,
                style: {
                    background: "linear-gradient(315deg, #b60000, #f0170f)",
                  },
            }).showToast();
    
        }else{
            Toastify({
                text: "Eliminaste una copia de " + elementoCarrito.titulo,
                duration: 3000,
                style: {
                    background: "linear-gradient(315deg, #b60000, #f0170f)",
                  },
            }).showToast();
        };
        buildCarrito();
    }
    e.stopPropagation();

    //console.log(carrito);
}

itemsCarrito.addEventListener('click', e => {
    btnDelete(e);
})