const { computeHeadingLevel } = require("@testing-library/react");

const personajes = ['goku','vegeta','trunks'];

const [,p2] = personajes;

console.log(p2);


const retornaArreglo = () => {
    return ['ABC',123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);


const help = ( valor ) => {
    return [valor, () => {console.log('hola mundo')}];

}

const [nombre, setNombre] = help('Goku');

console.log( nombre  );
setNombre();