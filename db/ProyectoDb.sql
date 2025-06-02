DROP SCHEMA proyecto_db;
CREATE SCHEMA proyecto_db;
USE proyecto_db;

CREATE TABLE usuarios(
	idUsuario int unsigned primary key auto_increment,
    nombreUsuario varchar(30) not null,
    contrasenia varchar(250) not null,
    fechaNacimiento date not null,
    mail varchar(30) not null,
    telefono bigint,
    fotoPerfil varchar(100),
    
	createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp,
	deletedAt timestamp null on update current_timestamp
	
);
    
CREATE TABLE productos(
	idProducto int unsigned primary key auto_increment,
    idUsuario int unsigned,
    nombreProducto varchar(20) not null,
    fotoProducto varchar(100),
    descProducto varchar(500) not null,
    
    createdAt timestamp default current_timestamp,
    updatedAt timestamp default current_timestamp on update current_timestamp,
    deletedAt timestamp null on update current_timestamp,
    foreign key (idUsuario) references usuarios(idUsuario)
);

CREATE TABLE comentarios(
	idComentario int unsigned primary key auto_increment,
    comentario varchar(200) not null,
    idUsuario int unsigned,
    idProducto int unsigned,
    
    createdAt timestamp default current_timestamp,
    updatedAt timestamp default current_timestamp on update current_timestamp,
    deletedAt timestamp null on update current_timestamp,
    
    foreign key (idUsuario) references usuarios(idUsuario),
    foreign key (idProducto) references productos(idProducto)
);

insert into usuarios (nombreUsuario,contrasenia,fechaNacimiento,mail,telefono, fotoPerfil)
	values ('Francesco Scaglioni', 'fran123', '2002-04-27', 'francesco@gmail.com', 91169829261, '/images/users/pexels-photo-1222271.jpeg'),
	('Juan Perez', 'juan123', '1996-01-01', 'juan@gmail.com', '91176568987','/images/users/pexels-photo-1239291.jpeg'),
    ('Martina Diaz', 'mar321', '2004-12-31', 'martina@gmail.com', '91182933434','/images/users/pexels-photo-773371.webp'),
    ('Franco Fernandez', 'fer456', '2000-01-01', 'fernando@gmail.com', '91143568635','/images/users/pexels-photo-2379005.jpeg'),
    ('Julieta Ramirez', 'Juli012', '1999-06-05', 'juli@gmail.com', '91112345678','/images/users/pexels-photo-2104252.webp');
    

insert into productos (nombreProducto, fotoProducto, descProducto, idUsuario)
	values ('Petal Swirl', 'Reloj1.png','Este elegante reloj de acero inoxidable tiene una esfera amarilla cepillada al sol con un motivo floral impreso en amarillo claro, aguja horaria y minutero plateados que brillan en la oscuridad y segundero plateado.', 5),
    ('Petal Frenzy', 'Reloj2.png', 'Este elegante reloj de acero inoxidable tiene una esfera azul cepillada al sol con un motivo floral impreso en azul claro, aguja horaria y minutero plateados que brillan en la oscuridad y segundero plateado.',1),
    ('Petal Bliss', 'Reloj3.png','Este elegante reloj de acero inoxidable tiene una esfera gris cepillada al sol con un motivo floral impreso en blanco, aguja horaria y minutero plateados que brillan en la oscuridad y segundero plateado.',2),
    ('Petal Charm', 'Reloj4.png','Este elegante reloj de acero inoxidable tiene una esfera rosa cepillada al sol con un motivo floral impreso en blanco, aguja horaria y minutero plateados que brillan en la oscuridad y segundero plateado.',3),
    ('Blue Petal Promise', 'Reloj5.png','Este elegante reloj de acero inoxidable tiene una esfera azul cepillada al sol con un motivo floral impreso en azul claro, aguja horaria y minutero plateados que brillan en la oscuridad y segundero plateado.',4),
    ('Pink Petal Promise', 'Reloj6.png','Este elegante reloj de acero inoxidable tiene una esfera rosa cepillada al sol con un motivo floral impreso en blanco, aguja horaria y minutero plateados que brillan en la oscuridad y segundero plateado.',5),
    ('Squarely Berry', 'Reloj7.png','La caja cuadrada de color rosa oscuro mate de este reloj de Bioceramic está cubierta por un cristal de material de origen biológico de borde a borde que ofrece una vista lateral de la pista de minutos impresa en rosa claro.',1),
    ('Squarely Blacklight', 'Reloj8.png','La caja cuadrada de color azul oscuro mate de este reloj de Bioceramic está cubierta por un cristal de material de origen biológico de borde a borde que ofrece una vista lateral de la pista de minutos impresa en azul claro.',2),
    ('Middlesteel', 'Reloj9.png','Ni grande, ni pequeño: MIDDLESTEEL (YLS468G) tiene el tamaño perfecto y una esfera verde oscuro con apliques de Swatch y ventana de fecha. El brazalete de acero inoxidable va a juego con la caja.',3),
    ('Pinkaround', 'Reloj0.png','Es tiempo de amar con PINKAROUND (YLS455G). La espectacular esfera rosa satinada con impresiones en blanco y gris incluye una ventana que muestra la fecha a las 3 para que no se te olvide nunca tu cita con la persona deseada.',4);

insert into comentarios (comentario, idUsuario, idProducto)
	values ('Excelente diseño y calidad. ¡Estos relojes son perfectos para cualquier ocasión! Me encanta cómo combinan estilo y durabilidad. Definitivamente una gran inversión.', 1, 1),
    ('La precisión de estos relojes es increíble. ¡Superaron mis expectativas! Además, el acabado es impecable. Se nota el trabajo detallado en cada pieza.', 2, 1),
    ('Elegantes y funcionales, justo lo que buscaba. La comodidad y el estilo van de la mano. ¡Totalmente recomendados!', 3, 1),
    ('Un reloj que destaca por su originalidad y buen gusto. Perfecto para quienes buscan algo diferente pero con clase. ¡Me encanta!', 4, 2),
    ('Buena relación calidad-precio. No esperaba tanto por lo que pagué. Son resistentes y lucen mucho más caros de lo que cuestan. ¡Excelente compra!', 5, 2),
    ('muy buen servicio y excelente calidad de producto, lo volveria a comprar!', 1, 2),
    ('Buenísimo por el precio. La correa es cómoda y no se despinta como otros que he tenido. Lo recomiendo.', 5, 3),
    ('Justo lo que buscaba: simple pero elegante. Va perfecto para el día a día y para ocasiones más formales.', 2, 3),
    ('La pila incluida duró más de lo que pensaba. El diseño es clásico y no pasa de moda, me encantó.', 3, 3),
    ('Diseño sofisticado y materiales de alta calidad. Es un reloj que se adapta tanto al trabajo como a una salida elegante. ¡Muy conforme!', 1, 4),
	('Sorprendida por lo bien que se ve en persona. Es liviano pero robusto, y el mecanismo funciona a la perfección. Lo uso todos los días.', 2, 4),
    ('Lo compré como regalo y fue un éxito total. El empaque es muy lindo y el reloj tiene un brillo especial. ¡Muy recomendado!', 3, 5),
    ('Excelente relación precio-calidad. No solo es bonito, también mantiene la hora con gran precisión. Ideal para uso diario.', 4, 5),
    ('Gran atención al detalle. El segundero se mueve suavemente y el cristal no se raya con facilidad. Me sorprendió gratamente.', 5, 6),
    ('Un clásico moderno. Tiene una estética que no pasa de moda y se siente premium al usarlo. Perfecto para coleccionistas.', 1, 6),
    ('Increíble lo bien que queda con todo. Desde ropa casual hasta algo más formal. Se volvió parte de mi estilo.', 2, 7),
    ('Es más lindo que en las fotos. Me gustó tanto que estoy pensando en comprar otro modelo de la misma marca.', 3, 7),
    ('Elegancia y simplicidad. Un reloj que transmite sobriedad sin dejar de ser llamativo. Muy feliz con la compra.', 4, 8),
	('Funciona perfecto y tiene buena resistencia al agua, ideal para quienes se mueven mucho. No decepciona.', 5, 8),
	('Se nota que está hecho para durar. Llevo meses usándolo sin problemas y sigue como nuevo. Muy recomendable.', 1, 9),
	('Hermoso y funcional. Es cómodo, se ajusta bien a la muñeca y el diseño minimalista lo hace muy versátil.', 2, 9),
	('Este reloj es una joya. El acabado metálico es impecable y llama la atención por donde voy. ¡Vale cada centavo!', 3, 10),
	('De lo mejor que he comprado últimamente. Superó mis expectativas en todos los sentidos. ¡Cinco estrellas!', 4, 10);