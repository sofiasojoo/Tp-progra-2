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
    
select * from usuario;

insert into producto (idProducto,nombreProducto,descProducto, idUsuario)
	values (default,'Petal Swirl','', 5),
    (default,'Petal Frenzy','',1),
    (default,'Petal Bliss','',2),
    (default,'Petal Charm','',3),
    (default,'Blue Petal Promise','',4),
    (default,'Pink Petal Promise','',5),
    (default,'Squarely Berry','',1),
    (default,'Squarely Blacklight','',2),
    (default,'Middlesteel','',3),
    (default,'Pinkaround','',4);
select * from producto;
insert into comentario (idComentario,comentario, idUsuario, idProducto)
	values (default, '', 1, 1)