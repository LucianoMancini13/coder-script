let saludar = prompt("Hola, ¿cómo estás? Vamos a tomarte el pedido. Indicanos por favor cual es tu nombre");
console.log(saludar)

let bebida = prompt(
    "Selecciona tu bebida\n1-Café\n2-Café con Leche\n3-Té\n4-Chocolate"
);

while (bebida > "4") {

    if (bebida <= "4") {

        switch (bebida) {
            case "1":
                console.log("Seleccionaste Café");
                break;
            case "2":
                console.log("Seleccionaste Café con Leche");
                break;
            case "3":
                console.log("Seleccionaste Té");
                break;
            case "4":
                console.log("Seleccionaste Chocolate");
                break;
        }
    }
    else
        alert("No es una opción válida.")
        bebida = prompt(
            "Vuelve a seleccionar tu bebida\n1-Café\n2-Café con Leche\n3-Té\n4-Chocolate"
        );
}

let comida = prompt("¿Deseas algo para comer? \n1-medialunas\n2-sacramento\n3-galletitas\n4-solo la bebida")

while (comida > "4" ) {

    if (comida <= "4") {

        switch (comida) {
            case "1":
                console.log("medialunas");
                break;
            case "2":
                console.log("sacramento");
                break;
            case "3":
                console.log("galletitas");
                break;
            case "4":
                console.log("solo la bebida");
                break;
        }
    }
    else
        alert("No es una opción válida.")
        comida = prompt(
            "Vuelve a seleccionar tu comida \n1-medialunas\n2-sacramento\n3-galletitas\n4-solo la bebida"
        );
}
//Function constructora

/*function Producto(id, nombre, precio){
this.id = id;
this.nombre = nombre;
this.precio = precio;
}

//productos
const producto1 = new Producto(1, "café",200);
const producto2 = new Producto(2, "café con leche",220);
const producto3 = new Producto(3, "té",150);
const producto4 = new Producto(4, "chocolate",200);


function pedido(bebida, comida) {
    if (comida < "4") {
        console.log("Vas a llevar " + bebida + " más " + comida);
    }
    else {
        console.log("Vas a llevar " + bebida);
    }
}
let pedido = bebida + comida
console.log(compra)*/



