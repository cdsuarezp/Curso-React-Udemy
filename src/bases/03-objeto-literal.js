const persona = {
nombre: 'Tony',
apellido: 'Stark',
edad: 45,
direccion: {
    ciudad: 'new york',
    zip: 45548751,
    lat: 121.14654,
    lng: 34.22,
}
};

console.log( persona);
// crea un clon del objeto persona con otro espacio en memoria
const persona2 = {...persona};
persona2.nombre = 'peter';

console.log(persona2)
console.log(persona)