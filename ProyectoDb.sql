CREATE SCHEMA proyecto;
USE proyecto;

CREATE TABLE usuario(
	idUsuario int primary key auto_increment,
    nombreUsuario varchar(30) not null,
    contrasenia varchar(15) not null,
    fechaNacimiento date not null,
    mail varchar(30) not null,
    telefono int,
    fotoPerfil varchar(100)
);

alter table usuario  
	add createdAt timestamp default current_timestamp,
    add updatedAt timestamp default current_timestamp on update current_timestamp,
    add deletedAt timestamp null on update current_timestamp;
    
alter table usuario
	modify idUsuario int unsigned auto_increment,
    modify telefono bigint;
    
CREATE TABLE producto(
	idProducto int unsigned primary key auto_increment,
    idUsuario int unsigned,
    nombreProducto varchar(20) not null,
    fotoProducto varchar(100),
    descProducto varchar(200) not null,
    
    createdAt timestamp default current_timestamp,
    updatedAt timestamp default current_timestamp on update current_timestamp,
    deletedAt timestamp null on update current_timestamp,
    foreign key (idUsuario) references usuario(idUsuario)
);

alter table producto
	modify descProducto varchar(500) not null;

CREATE TABLE comentario(
	idComentario int unsigned primary key auto_increment,
    comentario varchar(200) not null,
    idUsuario int unsigned,
    idProducto int unsigned,
    
    createdAt timestamp default current_timestamp,
    updatedAt timestamp default current_timestamp on update current_timestamp,
    deletedAt timestamp null on update current_timestamp,
    foreign key (idUsuario) references usuario(idUsuario),
    foreign key (idProducto) references producto(idProducto)
);

insert into usuario (idUsuario,nombreUsuario,contrasenia,fechaNacimiento,mail,telefono)
	values (default,'Francesco Scaglioni', 'fran123', '2002/04/27', 'francesco@gmail.com', 91169829261),
	(default, 'Juan Perez', 'juan123', '1996/01/01', 'juan@gmail.com', '91176568987'),
    (default,'Martina Diaz', 'mar321', '2004/12/31', 'martina@gmail.com', '91182933434'),
    (default,'Franco Fernandez', 'fer456', '2000/01/01', 'fernando@gmail.com', '91143568635'),
    (default, 'Julieta Ramirez', 'Juli012', '1999/06/05', 'juli@gmail.com', '91112345678');
    

insert into producto (idProducto,nombreProducto,descProducto, idUsuario)
	values (default,'Petal Swirl','Este elegante reloj de acero inoxidable tiene una esfera amarilla cepillada al sol con un motivo floral impreso en amarillo claro, aguja horaria y minutero plateados que brillan en la oscuridad y segundero plateado.', 5),
    (default,'Petal Frenzy','Este elegante reloj de acero inoxidable tiene una esfera azul cepillada al sol con un motivo floral impreso en azul claro, aguja horaria y minutero plateados que brillan en la oscuridad y segundero plateado.',1),
    (default,'Petal Bliss','Este elegante reloj de acero inoxidable tiene una esfera gris cepillada al sol con un motivo floral impreso en blanco, aguja horaria y minutero plateados que brillan en la oscuridad y segundero plateado.',2),
    (default,'Petal Charm','Este elegante reloj de acero inoxidable tiene una esfera rosa cepillada al sol con un motivo floral impreso en blanco, aguja horaria y minutero plateados que brillan en la oscuridad y segundero plateado.',3),
    (default,'Blue Petal Promise','Este elegante reloj de acero inoxidable tiene una esfera azul cepillada al sol con un motivo floral impreso en azul claro, aguja horaria y minutero plateados que brillan en la oscuridad y segundero plateado.',4),
    (default,'Pink Petal Promise','Este elegante reloj de acero inoxidable tiene una esfera rosa cepillada al sol con un motivo floral impreso en blanco, aguja horaria y minutero plateados que brillan en la oscuridad y segundero plateado.',5),
    (default,'Squarely Berry','La caja cuadrada de color rosa oscuro mate de este reloj de Bioceramic está cubierta por un cristal de material de origen biológico de borde a borde que ofrece una vista lateral de la pista de minutos impresa en rosa claro.',1),
    (default,'Squarely Blacklight','La caja cuadrada de color azul oscuro mate de este reloj de Bioceramic está cubierta por un cristal de material de origen biológico de borde a borde que ofrece una vista lateral de la pista de minutos impresa en azul claro.',2),
    (default,'Middlesteel','Ni grande, ni pequeño: MIDDLESTEEL (YLS468G) tiene el tamaño perfecto y una esfera verde oscuro con apliques de Swatch y ventana de fecha. El brazalete de acero inoxidable va a juego con la caja.',3),
    (default,'Pinkaround','Es tiempo de amar con PINKAROUND (YLS455G). La espectacular esfera rosa satinada con impresiones en blanco y gris incluye una ventana que muestra la fecha a las 3 para que no se te olvide nunca tu cita con la persona deseada.',4);

insert into comentario (idComentario,comentario, idUsuario, idProducto)
	values (default, 'muy buen producto', 1, 1),
    (default, 'excelente reloj!', 2, 1),
    (default, 'me encanto!', 3, 1),
    (default, 'muy buen producto', 1, 2),
    (default, 'excelente reloj!', 2, 2),
    (default, 'me encanto', 3, 2),
    (default, 'muy buen producto', 1, 3),
    (default, 'excelente reloj', 2, 3),
    (default, 'me encanto', 3, 3),
    (default, 'muy buen producto', 1, 3),
    (default, 'excelente reloj', 2, 3),
    (default, 'me encanto', 3, 3),
    (default, 'muy buen producto', 1, 4),
    (default, 'excelente reloj', 2, 4),
    (default, 'me encanto', 3, 4),
    (default, 'muy buen producto', 1, 5),
    (default, 'excelente reloj', 2, 5),
    (default, 'me encanto', 3, 5),
    (default, 'muy buen producto', 1, 6),
    (default, 'excelente reloj', 2, 6),
    (default, 'me encanto', 3, 6),
    (default, 'muy buen producto', 1, 7),
    (default, 'excelente reloj', 2, 7),
    (default, 'me encanto', 3, 7),
    (default, 'muy buen producto', 1, 8),
    (default, 'excelente reloj', 2, 8),
    (default, 'me encanto', 3, 8),
    (default, 'muy buen producto', 1, 9),
    (default, 'excelente reloj', 2, 9),
    (default, 'me encanto', 3, 9),
    (default, 'muy buen producto', 1, 10),
    (default, 'excelente reloj', 2, 10),
    (default, 'me encanto', 3, 10);
    