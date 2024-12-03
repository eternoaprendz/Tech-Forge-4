
class ContaBancaria{

   public titular:string;
    public saldo: number;

constructor (titular: string, saldo: number,){

this.titular=titular;
this.saldo=1000;
}
  sacar(valor: number): void {
    this.saldo -= valor;
    console.log()   
}
}
//exercício 2
class  livro {
    titulo : string
    autor : string
    paginas : number
    lido : boolean

    constructor(titulo:string,autor:string,paginas:number,lido:boolean){
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
        this.lido = lido
    }

    foiLido(){
        console.log('Este livro foi lido');
        this.lido = true
    }
}

const o_principe = new livro("1532", "o_principe", 160, false);

console.log(o_principe.foiLido())

//exercício 3

class Produto {
    nome : string;
    preco : number;
    quantiedade : number;
    
    constructor(nome:string,preco:number,quantiedade:number){
    this.nome = nome
    this.preco = preco
    this.quantiedade = quantiedade
    }

    valorEstoque(){
        return `Valor total do estoque é de ${this.preco * this.quantiedade}`
    }
}

let produto = new Produto ('mouse',160,52)
console.log(produto.valorEstoque());
//exercício 4

class Temperatura{
    celsius : number

    constructor(celssius : number){
        this.celsius = celssius
    }

    cFahrenheit(){
        return `a conversão para Fahrenheit é ${1.8*this.celsius+32}F`
    }
    cKelvin(){
        return `a conversão para Kelvin é ${this.celsius+273}K`
    }
}
let temperatura = new Temperatura(36)

console.log(temperatura.cFahrenheit());
console.log(temperatura.cKelvin());

//exercício 5
class Agenda {
    compromissos: string[] = [];

    constructor(compromissos: string[] = []) {
        this.compromissos = compromissos;
    }

    adicionarCompromisso(compromisso: string) {
        this.compromissos.push(compromisso);
    }

    listarCompromissos() {
        return this.compromissos;
    }
}

let minhaAgenda = new Agenda();

minhaAgenda.adicionarCompromisso("Reunião às 10h");
minhaAgenda.adicionarCompromisso("Dentista às 14h");

console.log(minhaAgenda.listarCompromissos());






































