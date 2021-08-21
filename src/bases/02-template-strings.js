
const nombre = 'cristian';
const apellido = 'suarez';

const nombreCompleto = `
${ nombre } 
${ apellido }`;

console.log(nombreCompleto);

function getSaludo(nombre){

    return ' hola ' + nombre;
}

console.log(getSaludo('samuel'));