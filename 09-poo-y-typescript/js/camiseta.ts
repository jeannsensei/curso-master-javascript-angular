//Interface para exigir que exista

interface CamisetaBase{
    setColor(color);
    getColor();
}

//Decorador

function estampar(logo:string) {
    return function (target: Function) {
        target.prototype.estampacion = function ():void {
            console.log("Camiseta estampada con el logo de: "+logo)
        }
    }
}

// Clase (molde del objeto)
@estampar('Gucci Gang')
class Camiseta implements CamisetaBase{
  //Propiedades (caracteristicas del objeto)
  public color: string ="";
  public modelo: string = "";
  public marca: string = "";
  public talla: string = "";
  public precio: number = 0;
    
  // Constructor
  constructor(color:string, modelo:string, marca:string, talla:string, precio:number){
      this.color = color;
      this.modelo = modelo;
      this.marca = marca;
      this.talla = talla;
      this.precio = precio;
  }


  // Métodos (funciones o acciones que hará el objeto)
    public setColor(color:string){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }
}

// var camiseta = new Camiseta("rojo","manga larga","nike","1",14);
 
// camiseta.cambiarColor("Rojo");
// // camiseta.getColor();

// // var playera = new Camiseta();

// // playera.cambiarColor("Azul");


// console.log(camiseta);    


//Clase hija

class Sudadera extends Camiseta{
    public capucha: boolean;
    
    setCapucha(capucha){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}



var camiseta = new Camiseta ("lalala", "lalalla2", "lalala3", "lalala4", 12)

console.log(camiseta);
camiseta.estampacion();


var sudadera_nike = new Sudadera("rojo", "manga larga", "tommy","kek",12);
sudadera_nike.setCapucha("true");
sudadera_nike.setColor("gris");
console.log(sudadera_nike);