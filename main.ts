console.log("hola")

interface Machote {

    Elmachote:string
}




const objetoapi:Machote ={
    Elmachote: ""
}



interface ISpiderman{

    Cartuchos:number;
    Nombre?:string;
    ArtesMarciales:string[]

}


const Heroes:ISpiderman = {
    Cartuchos: 0,
    Nombre: "",
    ArtesMarciales: []
}



const Marvel:ISpiderman ={
    Cartuchos: 0,
    Nombre: "",
    ArtesMarciales: []
}


//Funciones 
function Saludar() {
    alert("Hola Mundo")
}

function Saludaratods(objeto:ISpiderman) {
    
}

let Saludarnuevamente= function () {
    
}
// Arrows Functions 



//Forma 1 
const saludar = () =>{


}

//Forma2 
const Holamundo = (nombre:string) => nombre.toUpperCase()  ;


//Forma 3
 function activar(nombre:string,edad:number,poder?:string ,arma:string="Telearaña"):void {
    alert("holad")
 }

 activar("Batman",15)


 interface IRectangulo{

    altura:number
    base:number
    getresult:(a:number ,b:number)=> number //String //proceso return
    saludar:()=>void

 }



export class Rectangulo implements IRectangulo {
    altura: number;
    base: number;
  
  constructor(altura:number , base:number){
    this.altura=altura
    this.base =base
  } 
    getresult(a: number, b: number):number{ return 200;} ;
    saludar():void { console.log("asas")};
    

 }


 