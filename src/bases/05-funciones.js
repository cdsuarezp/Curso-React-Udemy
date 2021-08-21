//funciones en JS

const saludar = function(nombre){
    return ' hola ' + nombre;
}


const saludar2=(nombre) => {
    return ' hola ' + nombre;
}
const saludar3=(nombre) => ' hola ' + nombre;


console.log(saludar3('goku'));


const getUsuarioActivo = (nombre) => (
    {
        uid: 'ABC567',
        username: nombre
    }
);

console.log(getUsuarioActivo('Cristian'));