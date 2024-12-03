//exercicio 1 


interface Produto{
    id:number
    nome:string
    preco:number
}

class ItemLoja implements Produto{
    public id:number
    public nome:string
    public preco:number

    constructor(  id:number,nome:string,preco:number){
        this.id = id
        this.nome = nome
        this.preco = preco
    }

}

const loja = new ItemLoja (1,'escova',9.99)

console.log('id: ',loja.id,'nome:',loja.nome,'preço: ',loja.preco);

// exercicio 2


interface Documentos{
    titulo:string
    conteudo:string
    exibir(): string
}

class Texto implements Documentos{
    public titulo:string
    public conteudo: string

    constructor(titulo:string,conteudo:string){
        this.conteudo = conteudo
        this.titulo = titulo
    }
    
    exibir(): string {
        return ` Titulo ${this.titulo} , conteudo ${this.conteudo}`
    }
}

const texto = new Texto('caixa','gato')

console.log(texto.exibir());

// exercicio 3
interface ProdutoLoja {
    codigo:number
    nome:string
}
class Loja {
    private produto : ProdutoLoja[] = []  

    adicionarProduto(produto: ProdutoLoja): void {
        this.produto.push(produto);
      }
    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produto.find(produto => produto.codigo === codigo);
    }
}

const loja1 = new Loja();

loja1.adicionarProduto({ codigo: 1, nome: 'Produto A' });
loja1.adicionarProduto({ codigo: 2, nome: 'Produto B' });

const produto = loja1.buscarProdutoPorCodigo(1);
if (produto) {
  console.log(`Produto encontrado: ${produto.nome}`);
} else {
  console.log('Produto não encontrado');
}

// exercicio 4



interface Livro {
    titulo:string
    autor:string
    disponivel:boolean
}
class Biblioteca{

    private livros: Livro[] = []

    adicionarLivro (livros: Livro): void{
        this.livros.push(livros)
    }
    buscarLivrosDisponiveis(){
        return this.livros.filter(livro => livro.disponivel);
    }
}

const biblioteca = new Biblioteca();

biblioteca.adicionarLivro({ titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', disponivel: true });
biblioteca.adicionarLivro({ titulo: '1984', autor: 'George Orwell', disponivel: false });
biblioteca.adicionarLivro({ titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', disponivel: true });
biblioteca.adicionarLivro({ titulo: 'Dom Casmurro', autor: 'Machado de Assis', disponivel: true });

const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
console.log('Livros Disponíveis:');

livrosDisponiveis.forEach(livro => {
  console.log(`${livro.titulo} de ${livro.autor}`);
});

// exericico5 


interface LivroBiblioteca {
    titulo:string
    autor:string
    genero:string
    disponivel:boolean
}
class BibliotecaGestao{

    private livros: LivroBiblioteca[] = []

    adicionarLivro(livro: LivroBiblioteca): void {
        this.livros.push(livro);
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[]{
        return this.livros.filter(livro => livro.genero.toUpperCase() === genero.toUpperCase()); 
    }
    buscarPorAutor(autor: string): LivroBiblioteca[]{
        return this.livros.filter(livro => livro.autor.toUpperCase() === autor.toUpperCase());
    }
    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.disponivel).sort((a,b) => a.titulo.localeCompare(b.titulo))
    }
}

const biblioteca1 = new BibliotecaGestao();

biblioteca1.adicionarLivro({ titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', genero: 'Fantasia', disponivel: true });
biblioteca1.adicionarLivro({ titulo: '1984', autor: 'George Orwell', genero: 'Distopia', disponivel: false });
biblioteca1.adicionarLivro({ titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', genero: 'Fantasia', disponivel: true });
biblioteca1.adicionarLivro({ titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling', genero: 'Fantasia', disponivel: true });

console.log('filtrados por genero: ');
console.log(biblioteca1.filtrarPorGenero('fantasia'));
console.log('-------------------------------------------------------------------------------');

console.log('filtrados por autor: ');
console.log(biblioteca1.buscarPorAutor('george orwell'));

console.log('-------------------------------------------------------------------------------');

console.log('Disponiveis e ordenados: ');
console.log(biblioteca1.obterLivrosDisponiveisOrdenados());