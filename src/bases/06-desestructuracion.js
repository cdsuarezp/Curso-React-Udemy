//desestructuracion
// asignacion desestructurante

const persona = {
    nombre : 'Tony',
    edad: 45,
    clave: 'ironman',
};

const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);


const avenger = ({clave, nombre, edad, rango = 'capitan'}) => {
    console.log(nombre,edad,rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.322,
            lng: 71.235,
        }
    }

}



const {nombreClave, anios,latlng:{lat, lng}} = avenger(persona);


console.log(nombreClave, anios);
console.log(lat,lng);