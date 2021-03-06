import getHeroeById from "./bases/08-imp-exp";



// const promesa = new Promise( (resolve,reject) => {
//     setTimeout( () => {
            
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         // reject('no se pudo encontrar el heroe');
//     }, 2000)
// });

// promesa.then( (heroe) => {
//     console.log(heroe);
// })
// .catch(err => console.log(err));


const  getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve,reject) => {
        setTimeout( () => {
                
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            }else{
                reject('no se pudo encontrar el heroe');
            }
                        
        }, 2000)
    });

}

getHeroeByIdAsync(2)
    .then( console.log)
    .catch(console.warn);

