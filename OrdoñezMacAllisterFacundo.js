// Ejercicio Entregable Nro. 1


class Usuario {
    constructor(nombre, apellido, libro, mascota){
        this.nombre = "nombre"
        this.apellido = "apellido"
        this.libro = "libro"
        this.mascota = "mascota"
    }

GetFullName() {
    return `${this.nombre} ${this.apellido}`;
}

Getmascota() {
    this.mascota.push(mascota);
}

CountMascotas() {
    return this.mascota.length;
}
    

addBook( nombre, autor) {
    this.libros.push({nombre, autor})

}

GetBookNames() {
    return this.libros.map(l => l.nombre);
}

}
let usuario = new Usuario(
    'Gordon',
    'Freeman',
    [
        { nombre: '1984', autor: 'George Orwell' },
        { nombre: 'El Lobo Estepario', autor: 'Herman Hesse' },
        { nombre: 'Cancion de Hielo y Fuego', autor: 'George R. R. Martin' }
    ],
    [ 'Tornado', 'Lassie', 'Beethoven']
);
 
console.log('Imprimiendo resultado...');

console.log('Nombre completo: ', usuario.getFullName());

console.log('Cantidad de mascotas: ', usuario.countMascotas());

console.log('Agregando una mascota...');

usuario.addMascota('Flipper');

console.log('Cantidad de mascotas: ', usuario.countMascotas());

console.log('Libros: ', usuario.getBookNames());

console.log('Agregando  \'Juego de Abalorios\' a los libros...');

usuario.addBook('Demian', 'Herman Hesse')

console.log('Libros: ', usuario.getBookNames());