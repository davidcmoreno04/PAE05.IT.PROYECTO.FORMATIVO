// PRODUCTOS
const productos = [
    // Celulares
    {
        id: "1",
        titulo: "Celular OPPO Find X9 Pro 5G",
        imagen: "https://cdn.idealo.com/folder/Product/208320/9/208320970/s11_produktbild_max/oppo-find-x9-pro-5g.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 2400000
    },
    {
        id: "2",
        titulo: "Celular Samsung Galaxy Z Flip 4 5G",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq7PRDh4u9D391HPgd283A71__T4UMdiTGvg&s",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 5400000
    },
    {
        id: "3",
        titulo: "Celular Xiaomi Redmi Note 14 5G",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZGvxsd4XscAeyEZ1ArLYw9tlqzxPv2Bk0Q&s",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 4800000
    },
    {
        id: "4",
        titulo: "Celular Iphone 4 8GB Black 4G",
        imagen: "https://i.ebayimg.com/00/s/MTUwMFgxNTAw/z/36kAAOSwXVdduJ13/$_57.JPG?set_id=8800005007",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 750000
    },
    
    // Computadores
    {
        id: "PC1",
        titulo: "COUGAR FV150 RGB - Mid Tower Dual Chamber",
        imagen: "https://cougargaming.com/_cgrwdr_/wwdpp/wp-content/uploads/2024/07/FV150_Pink_01.jpg",
        categoria: {
            nombre: "Computadores",
            id: "computadores"
        },
        precio: 500000
    },
    {
        id: "PC2",
        titulo: "COUGAR FV267 RGB - Mid Tower Dual Chamber",
        imagen: "https://cougargaming.com/_cgrwdr_/wwdpp/wp-content/uploads/2024/07/FV150_B_01.jpg",
        categoria: {
            nombre: "Computadores",
            id: "computadores"
        },
        precio: 500000
    },
    {
        id: "PC3",
        titulo: "Workstation Prebuilt Threadripper Pc 5th",
        imagen: "https://www.punchtechnology.co.uk/wp-content/uploads/2020/01/fractal-meshify-2xl.jpg",
        categoria: {
            nombre: "Computadores",
            id: "computadores"
        },
        precio: 4500000
    },
    {
        id: "PC4",
        titulo: "DarkFlash C285MP M-ATX Dual Chamber",
        imagen: "https://ezpctech.com.au/cdn/shop/files/202505120032486.jpg?v=1747377199&width=2048",
        categoria: {
            nombre: "Computadores",
            id: "computadores"
        },
        precio: 3000000
    },
    // Accesorios
    {
        id: "AC1",
        titulo: "Glorious Gaming GMMK 2-65 Percent Keyboard",
        imagen: "https://m.media-amazon.com/images/I/71zR+YOTGRL._AC_SL1500_.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 250000
    },
    {
        id: "AC2",
        titulo: "COUGAREGY K-906 Keyboard Multimedia",
        imagen: "https://www.nextmarteg.com/wp-content/uploads/2025/02/COUGAREGY-K-906-RGB-Computer-Keyboard-Beige-1-scaled.webp",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 250000
    },
    {
        id: "AC3",
        titulo: "MelGeek Mojo68 Pink Transparent Mechanical ",
        imagen: "https://www.melgeek.com/cdn/shop/products/MOJO68_Mechanical_Keyboard_Christian.jpg?v=1763551365",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 350000
    },
    {
        id: "AC4",
        titulo: "MCHOSE Ace 68 Turbo Aluminum Hall Effect ",
        imagen: "https://www.mchose.store/cdn/shop/files/mchose-official-mchose-ace-68-turbo-full-aluminum-esports-hall-effect-keyboard-1208801357.jpg?v=1764070921",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 450000
    }
    
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {


    contenedorProductos.innerHTML = "";


    productosElegidos.forEach(producto => {

        // 🟢 MODIFICACIÓN CLAVE AQUÍ: Formatear el precio
        const precioFormateado = producto.precio.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP', // Cambiar a la moneda de tu país si es diferente (ej: 'USD', 'MXN', 'CLP')
            minimumFractionDigits: 0 // Evita que aparezcan ".00"
        });


        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${precioFormateado}</p> 
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;


        contenedorProductos.append(div);
    })


    actualizarBotonesAgregar();
}


cargarProductos(productos);


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {


        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");


        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }


    })
});


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");


    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}


let productosEnCarrito;


let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);


    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }


    actualizarNumerito();


    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}