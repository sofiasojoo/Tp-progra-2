
const objetoProductos = {
    usuario: {
        email: "pablo.gomez@gmail.com",
        usuario: "pablo123",
        password:"pablo123",
        fechaNacimiento: "06/07/2000",
        DNI: 40000000,
        fotoPerfil: "https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D"
    },
    productos: [
        {
            imagen: "https://static.swatch.com/images/product/YLS236G/sa200/YLS236G_sa200_er005.png",
            nombre: "Petal Swirl",
            descripcion: "Este elegante reloj de acero inoxidable tiene una esfera amarilla cepillada al sol con un motivo floral impreso en amarillo claro, aguja horaria y minutero plateados que brillan en la oscuridad y segundero plateado.",
            comentarios: [{
                nombres: "Maria Ramírez",
                texto: "Excelente diseño y calidad. ¡Estos relojes son perfectos para cualquier ocasión! Me encanta cómo combinan estilo y durabilidad. Definitivamente una gran inversión.",
                imagen: "/images/users/pexels-photo-415829.webp"
            },]
        },
        {
            imagen: "https://static.swatch.com/images/product/YLS235G/sa200/YLS235G_sa200_er005.png",
            nombre: "Petal Frenzy",
            descripcion: "Este elegante reloj de acero inoxidable tiene una esfera azul cepillada al sol con un motivo floral impreso en azul claro, aguja horaria y minutero plateados que brillan en la oscuridad y segundero plateado. ",
            comentarios: [{
                nombres: "Juana Perez",
                texto: "La precisión de estos relojes es increíble. ¡Superaron mis expectativas! Además, el acabado es impecable. Se nota el trabajo detallado en cada pieza.",
                imagen: "/images/users/pexels-photo-762020.webp"
            },]
        },
        {
            imagen: "https://static.swatch.com/images/product/YLS237G/sa200/YLS237G_sa200_er005.png",
            nombre: "Petal Bliss",
            descripcion: "Este elegante reloj de acero inoxidable tiene una esfera gris cepillada al sol con un motivo floral impreso en blanco, aguja horaria y minutero plateados que brillan en la oscuridad y segundero plateado. ",
            comentarios: [{
                nombres: "Juliana Torres",
                texto: "Elegantes y funcionales, justo lo que buscaba. La comodidad y el estilo van de la mano. ¡Totalmente recomendados!",
                imagen: "/images/users/pexels-photo-773371.webp"
            },]
        },
        {
            imagen: "https://static.swatch.com/images/product/YLS234G/sa200/YLS234G_sa200_er005.png",
            nombre: "Petal Charm",
            descripcion: "Este elegante reloj de acero inoxidable tiene una esfera rosa cepillada al sol con un motivo floral impreso en blanco, aguja horaria y minutero plateados que brillan en la oscuridad y segundero plateado.",
            comentarios: [{
                nombres: "Martin Diaz",
                texto: "Un reloj que destaca por su originalidad y buen gusto. Perfecto para quienes buscan algo diferente pero con clase. ¡Me encanta!",
                imagen: "/images/users/pexels-photo-1222271.jpeg"
            },]
        },
        {
            imagen: "https://static.swatch.com/images/product/YLS235/sa200/YLS235_sa200_er005.png",
            nombre: "Blue Petal Promise",
            descripcion: "Este elegante reloj de acero inoxidable tiene una esfera azul cepillada al sol con un motivo floral impreso en azul claro, aguja horaria y minutero plateados que brillan en la oscuridad y segundero plateado.",
            comentarios: [{
                nombres: "Franca Herrera",
                texto: "Buena relación calidad-precio. No esperaba tanto por lo que pagué. Son resistentes y lucen mucho más caros de lo que cuestan. ¡Excelente compra!",
                imagen: "/images/users/pexels-photo-1239291.jpeg"
            },]
        },
        {
            imagen: "https://static.swatch.com/images/product/YLS234/sa200/YLS234_sa200_er005.png",
            nombre: "Pink Petal Promise",
            descripcion: "Este elegante reloj de acero inoxidable tiene una esfera rosa cepillada al sol con un motivo floral impreso en blanco, aguja horaria y minutero plateados que brillan en la oscuridad y segundero plateado.",
            comentarios: [{
                nombres: "Fernanda Castro",
                texto: "muy buen servicio y excelente calidad de producto, lo volveria a comprar!",
                imagen: "/images/users/pexels-photo-2104252.webp"
            },]
        },
        {
            imagen: "https://static.swatch.com/images/product/SO34R700/sa200/SO34R700_sa200_er005.png",
            nombre: "Squarely Berry",
            descripcion: "La caja cuadrada de color rosa oscuro mate de este reloj de Bioceramic está cubierta por un cristal de material de origen biológico de borde a borde que ofrece una vista lateral de la pista de minutos impresa en rosa claro.",
            comentarios: [{
                nombres: "Juan Vargas",
                texto: "excelente reloj!",
                imagen: "/images/users/pexels-photo-2128807.jpeg"
            },]
        },
        {
            imagen: "https://static.swatch.com/images/product/SO34N700/sa200/SO34N700_sa200_er005.png",
            nombre: "Squarely Blacklight",
            descripcion: "La caja cuadrada de color azul oscuro mate de este reloj de Bioceramic está cubierta por un cristal de material de origen biológico de borde a borde que ofrece una vista lateral de la pista de minutos impresa en azul claro.",
            comentarios: [{
                nombres: "Martin Navarro",
                texto: "Buenísimo por el precio. La correa es cómoda y no se despinta como otros que he tenido. Lo recomiendo.",
                imagen: "/images/users/pexels-photo-2379005.jpeg"
            },]
        },
        {
            imagen: "https://static.swatch.com/images/product/YLS468G/sa200/YLS468G_sa200_er005.png",
            nombre: "Middlesteel",
            descripcion: "Ni grande, ni pequeño: MIDDLESTEEL (YLS468G) tiene el tamaño perfecto y una esfera verde oscuro con apliques de Swatch y ventana de fecha. El brazalete de acero inoxidable va a juego con la caja.",
            comentarios: [{
                nombres: "Mateo Sánchez",
                texto: "Justo lo que buscaba: simple pero elegante. Va perfecto para el día a día y para ocasiones más formales.",
                imagen: "/images/users/pexels-photo-2380795.jpeg"
            },]
        },
        {
            imagen: "https://static.swatch.com/images/product/YLS455G/sa200/YLS455G_sa200_er005.png",
            nombre: "Pinkaround",
            descripcion: "Es tiempo de amar con PINKAROUND (YLS455G). La espectacular esfera rosa satinada con impresiones en blanco y gris incluye una ventana que muestra la fecha a las 3 para que no se te olvide nunca tu cita con la persona deseada.",
            comentarios: [{
                nombres: "Pedro Morales",
                texto: "La pila incluida duró más de lo que pensaba. El diseño es clásico y no pasa de moda, me encantó.",
                imagen: "/images/users/pexels-photo-3799786.webp"
            },]
        },
    ]
}

module.exports= objetoProductos