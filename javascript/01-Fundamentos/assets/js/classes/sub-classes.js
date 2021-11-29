class Persona {

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log(this.nombre); //undefined
        console.log('Hola, soy un método estatico');
    }

    //Inicialización propiedades de clase
    nombre = '';
    codigo = '';
    frase = '';
    comida='';
    //Método que se va a ejecutar cuando se instancia Persona
    constructor( nombre='Sin nombre', codigo='Sin  código', frase='No tiene' ) {
        this.nombre = nombre;
        this.codigo=codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita(){
        return `La comida favorita de: ${this.nombre} es ${this.comida}`;
    }


    quienSoy(){
        console.log(`Soy ${this.nombre} y mi idenntidad es: ${this.codigo}`);
    }

    miFrase(){
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}
class Heroe extends Persona{
   
    clan='NO tiene';

    constructor(nombre, codigo, frase){
        super(nombre, codigo,frase);
        this.clan='Avengers'; 
    }
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi idenntidad es: ${this.codigo}`);
        quienSoy();
    }
}

const spiderman = new Heroe('Santiago', 'Pepinillo Rick', 'Soy un Pepinillooo!');
// const spiderman = new Heroe();
console.log(spiderman);
spiderman.quienSoy()