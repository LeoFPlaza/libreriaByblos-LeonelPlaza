// const modalContainer = document.querySelector(".modalCarrito");
// const botonComprar = document.querySelector(".buy-btn");
// const carritoBody = document.querySelector(".modal-dialog");
// const modalContainer = document.querySelector(".modalCarrito");
const footerCarrito = document.querySelector("#footerCarrito");
const itemsCarrito = document.querySelector("#itemsCarrito")
const templateCarrito = document.querySelector("#templateCarrito").content;
const templateFooterCarrito = document.querySelector("#templateFooterCarrito").content;

const buildCarrito = () => {
    console.log(carrito);
    Object.values(carrito).forEach(libroEnCarrito =>{
        itemsCarrito.innerHTML = '';
        templateCarrito.querySelector('th').textContent = libroEnCarrito.id;
        templateCarrito.querySelectorAll('td')[0].textContent = libroEnCarrito.titulo;
        templateCarrito.querySelectorAll('td')[1].textContent = libroEnCarrito.cantidad;
        templateCarrito.querySelector('span').textContent = libroEnCarrito.cantidad * parseInt(libroEnCarrito.price);
        templateCarrito.querySelector('.btn-danger').dataset.id = libroEnCarrito.id;
        
        const cloneProducto = templateCarrito.cloneNode(true);
        fragment.appendChild(cloneProducto);
    })
    itemsCarrito.appendChild(fragment);
}