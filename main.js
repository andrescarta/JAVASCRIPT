// FASE 1
// Crea una array con tu nombre donde cada posición corresponda a una letra.
// Haz un bucle que recorra el array y muestre por consola cada una de las letras.

// FASE 1 RESUELTO
// var fullName = ["A", "N", "D", "R", "E", "S", "C", "A", "R", "T", "A"];
// function myName(someName){
//     for (var i = 0; i < someName.length; i++){
//         console.log(someName[i])
//     }
// }
// myName(fullName)

// --------------------------------------------------------------------------------

// FASE 2
// Al bucle, si la letra es una vocal imprime en la consola: 'VOCAL'. Sino, imprime: 'CONSONTANT'.
// Se puede hacer de diferentes formas:
// -Creando una nueva array que contenga las vocales (A, E, I, O, U) y comprobando si cada una de 
// las letras de tu nombre es en esta array con el método indexOf
// -Comprobar si cada una de las letras de tu nombre es igual a 'a', 'y', 'y', 'o', 'u' concatenando 
// las comprobaciones con ||

// FASE 3 RESULTADO MODO 1
// var fullName = ["A", "N", "D", "R", "E", "S", "C", "A", "R", "T", "A"];
// function myName(someName){
//     for (var i = 0; i < someName.length; i++){
//         var a = someName[i]
//         if (a == "A" || a == "E" || a == "I" || a == "O" || a == "U" ) {
//             console.log(a + " Vocal")
//         } else {
//         console.log(a + " Constant")
//         }
//     }
// }
// myName(fullName)

// FASE 3 RESULTADO MODO 2
// var fullName = ["A", "N", "D", "R", "E", "S", "C", "A", "R", "T", "A"];
// var vocals = ["A", "E", "I", "O", "U"]
// function myName(someName){
//     for (var i = 0; i < someName.length; i++){
//         var a = someName[i]
//         if (vocals.indexOf(a,0)!=-1) {
//             console.log(a + " Vocal")
//         } else {
//         console.log(a + " Constant")
//         }
//     }
// }
// myName(fullName)

// --------------------------------------------------------------------------------

// Extra: Si encuentras un numero, muestra por pantalla: 'Los nombres de personas no contienen números!'.
// Pista: Mira la función isNaN

// var fullName = ["A", "N", "D", "R", "E", "S", "C", "A", "R", "T", "A", 32];
// var vocals = ["A", "E", "I", "O", "U"]
// function myName(someName){
//     for (var i = 0; i < someName.length; i++){
//         var a = someName[i]
//         if (vocals.indexOf(a,0)!=-1) {
//             console.log(a + " Vocal")
//         } else if (isNaN(a)== false){
//             console.log(a + " Los nombres de personas no contienen números!")
//         } else {
//         console.log(a + " Constant")
//         }
//     }
// }
// myName(fullName)

// --------------------------------------------------------------------------------

// FASE 3
// Piensa una forma para almacenar tanto las letras del array como el número de veces 
// que aparecen e Impleméntalo.
// Pista: Map

// FASE 3 RESUELTO POR MI
// var fullName = ["A", "N", "D", "R", "E", "S", "C", "A", "R", "T", "A"];
//     fName = new Map();

//     function countLetters(someName){
//         for (var i = 0; i < someName.length; i++){
//             if (fName.get(someName[i]) != undefined){
//                 fName.set (someName[i], fName.get(someName[i])+1)
//             } else {
//             fName.set (someName[i], 1)
//             }
//         }
//     }
// countLetters(fullName)
// console.log(fName)

// FASE 3 CORRECCION DE JORDI
// var fullName = ["A", "N", "D", "R", "E", "S", "C", "A", "R", "T", "A"];
//     fName = new Map();

//     function countLetters(someName){
//         for (var i = 0; i < someName.length; i++){            
//             let counter=fName.get(someName[i])
//             if (counter == undefined) counter=0;
//             fName.set (someName[i], counter+1);
//         }
//     }
// countLetters(fullName)
// console.log(fName)

// --------------------------------------------------------------------------------

// FASE 4
// Crea una array con tu apellido donde cada posición corresponda a una letra.
// Pasa de las dos arrays a una sola. Además, añade una posición con un espacio 
// vacío entre la primera y la segunda. Es decir, antes tenías las arrays name y 
// surname y ahora sólo tienes una que se llamará fullname.
    // Fullname: [ 'N', 'A', 'M', 'E', '', 'S', 'U', 'R', 'N', 'A', 'M', 'E']
    // Pista: Utilice esta función (entiende que está haciendo)
    // var myFullName = [];
    // myFullName.push (... myName);

// FASE 4 RESPUESTA
// var andres = ["A", "N", "D", "R", "E", "S"];
// var carta = ["C", "A", "R", "T", "A"];
// var fullName;
// function displeyFullName(firstName, lastName){
//     firstName.push(" ");
//     fullName = firstName.concat(lastName)
// }
// displeyFullName(andres, carta)
// console.log(fullName)