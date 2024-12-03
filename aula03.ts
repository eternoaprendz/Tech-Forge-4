//exercici0 1
class Veiculo{
    mover(){
        return `Veico esta se movendo`
    }
}
class Carro extends Veiculo{
    mover(){
        return `O carro está dirigindo`
    }
}
class Bicicleta extends Veiculo{
    mover(){
        return `A bicicleta está pedalando`
    }
}

let carro = new Carro
let bicicleta = new Bicicleta

carro.mover()
bicicleta.mover()
//exercici0 2
class FormaGeometrica {
    protected Pi: number = 3.14159;

    calcularArea(): string {
        return "Metodo calcularArea nao implementado.";
    }
}
class Quadrado extends FormaGeometrica {
    private lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }
    calcularArea(): string {
        const A = this.lado * this.lado;
        return `A area do seu quadrado e ${A}`;
    }
}
class Circulo extends FormaGeometrica {
    private raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    calcularArea(): string {
        const A = this.Pi * (this.raio * this.raio);
        return `A area do seu circulo e ${A}`;
    }
}

class Triangulo extends FormaGeometrica {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): string {
        const A = (this.base * this.altura) / 2;
        return `A area do seu triangulo e ${A}`;
    }
}

function imprimirAreas(figuras: FormaGeometrica[]): string[] {
    return figuras.map((figura) => figura.calcularArea());
}

const figuras: FormaGeometrica[] = [
    new Quadrado(5),
    new Circulo(10),
    new Triangulo(6, 4)
];

let areas = imprimirAreas(figuras);
console.log(areas);
//exercici0 3

class Pagamento {
    processar(): string {
        return "Processando pagamento...";
    }
}

class PagamentoBoleto extends Pagamento {
    private numeroCorreto: number = 373129834;
    private numeroDeCartao: number;

    constructor(numeroDeCartao: number) {
        super();
        this.numeroDeCartao = numeroDeCartao;
    }

    processar(): string {
        if (this.numeroCorreto === this.numeroDeCartao) {
            return "Número de cartão correto.";
        } else {
            return "Número de cartão errado.";
        }
    }
}

class PagamentoCartao extends Pagamento {
    private numeroCartao: number;

    constructor(numeroCartao: number) {
        super();
        this.numeroCartao = numeroCartao;
    }

    processar(): string {
        if (this.numeroCartao.toString().length === 16) {
            return "Pagamento com cartão processado com sucesso.";
        } else {
            return "Número do cartão inválido.";
        }
    }
}

const pagamentoBoleto = new PagamentoBoleto(373129834);
console.log(pagamentoBoleto.processar());

const pagamentoCartao = new PagamentoCartao(1234567812345678);
console.log(pagamentoCartao.processar());
//exercici0 4

class Animal {
    private energia: number;

    constructor() {
        this.energia = 100;
    }

    comer(incremento: number): void {
        this.energia += incremento;
    }

    statusEnergia(): string {
        return `Energia: ${this.energia}`;
    }
}

class Leao extends Animal {
    caçar(): void {
        this.comer(-30);
        this.comer(50);
    }

    statusEnergia(): string {
        return `Leão - ${super.statusEnergia()}`;
    }
}

class Passaro extends Animal {
    seAlimentar(): void {
        this.comer(20);
    }

    statusEnergia(): string {
        return `Pássaro - ${super.statusEnergia()}`;
    }
}

const leao = new Leao();
leao.caçar();
console.log(leao.statusEnergia());

const passaro = new Passaro();
passaro.seAlimentar();
console.log(passaro.statusEnergia());
//exercici0 5

class Funcionario {
    protected nome: string;
    protected salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    calcularBonus(tipo: string): number {
        if (tipo === "Gerente") {
            return this.salario * 0.10;
        } else if (tipo === "Operario") {
            return this.salario * 0.05;
        }
        return 0;
    }

    calcularSalarioComBonus(tipo: string): number {
        return this.salario + this.calcularBonus(tipo);
    }
}

const gerente = new Funcionario("Alice", 5000);
const operario = new Funcionario("Bob", 3000);

console.log(`Salário do Gerente com bônus: ${gerente.calcularSalarioComBonus("Gerente")}`);
console.log(`Salário do Operário com bônus: ${operario.calcularSalarioComBonus("Operario")}`);