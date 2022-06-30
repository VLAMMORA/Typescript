"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangulo = void 0;
console.log("hola");
const objetoapi = {
    Elmachote: ""
};
const Heroes = {
    Cartuchos: 0,
    Nombre: "",
    ArtesMarciales: []
};
const Marvel = {
    Cartuchos: 0,
    Nombre: "",
    ArtesMarciales: []
};
//Funciones 
function Saludar() {
    alert("Hola Mundo");
}
function Saludaratods(objeto) {
}
let Saludarnuevamente = function () {
};
// Arrows Functions 
//Forma 1 
const saludar = () => {
};
//Forma2 
const Holamundo = (nombre) => nombre.toUpperCase();
//Forma 3
function activar(nombre, edad, poder, arma = "Telearaña") {
    alert("holad");
}
activar("Batman", 15);
class Rectangulo {
    constructor(altura, base) {
        this.altura = altura;
        this.base = base;
    }
    getresult(a, b) { return 200; }
    ;
    saludar() { console.log("asas"); }
    ;
}
exports.Rectangulo = Rectangulo;
