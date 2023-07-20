// HTTP local usando o módulo 'http' do Node.js. O servidor é configurado para ouvir conexões na porta 3000 

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer();

server.listen(port, hostname, () => {
    new ProvaTesteComponent();
});
//  esse código define uma classe ProvaTesteComponent que possui uma lista de livros e um método
//  de criação de novos livros .  
export class ProvaTesteComponent {
    listLivros: Array<Livro> = [];

    constructor() {
        this.initLivros();
        this.criarUmNovoLivro("Arquitetura Limpa", "Tecnologia");
        this.criarUmNovoLivro("Harry Potter e a Câmara Secreta", "Fantasia");
        this.criarUmNovoLivro("WildCards", "Fantasia");
        this.criarUmNovoLivro("O Trono do Sol", "Fantasia");
        this.criarUmNovoLivro("O Trono do Sol", "Fantasia");
        console.log(this.listarLivrosFantasia());
    }

//  função initLivros() adiciona seis livros à lista listLivros, sendo três livros de gênero "Fantasia"
//  e três livros de gênero "Tecnologia" (um livro de administração também).
    initLivros() {
        this.listLivros.push({ id: 0, nome: 'Código Limpo', genero: "Tecnologia" });
        this.listLivros.push({ id: 1, nome: 'Senhor dos Anéis', genero: "Fantasia" });
        this.listLivros.push({ id: 2, nome: 'WildCards', genero: "Fantasia" });
        this.listLivros.push({ id: 3, nome: 'Harry Potter e o Prisioneiro de Azkaban', genero: "Fantasia" });
        this.listLivros.push({ id: 4, nome: 'Javascript de alto desempenho', genero: "Tecnologia" });
        this.listLivros.push({ id: 5, nome: 'O poder da ação', genero: "Administração" });
    }
//  Verifica se já existe um livro com o mesmo nome e gênero usando a função 
    criarUmNovoLivro(nome: string, genero: string): void {
        if (this.buscarLivro(nome, genero) === -1) {
            const novoLivro: Livro = {
                id: this.listLivros.length,
                nome: nome,
                genero: genero,
            };

            this.listLivros.push(novoLivro);
        } else {
            console.log(`Livro '${nome}' do gênero '${genero}' já está cadastrado.`);
            /**
			 * Monte a mensagem de erro avisando que já existe um Livro cadastrado sobre o nome e genero passados
			 */
        }
    }
//  classe permite buscar o índice de um livro com base no nome e gênero e listar os nomes dos livros
//  de gênero "fantasia" presentes na lista de livros.
    buscarLivro(nome: string, genero: string): number {
        for (let index = 0; index < this.listLivros.length; index++) {
            const livro = this.listLivros[index];
            if (livro.nome === nome && livro.genero === genero) {
                return index;
            }
        }
        		/**
             * Implemente a validação onde retorne o Indice do Livro caso encontre um com mesmo nome e genero
             */
        return -1;
    }
// a função pega a lista completa de livros, filtra apenas 
//aqueles que pertencem ao gênero "Fantasia" e retorna uma única string com os nomes desses livros separados por vírgula.
 
    listarLivrosFantasia(): string {
        const livrosFantasia: string[] = this.listLivros
            .filter((livro) => livro.genero === "Fantasia")
            .map((livro) => livro.nome);

        return livrosFantasia.join(",");
        /**
		 * Retorne uma String contendo o nome de todos os Livros que são de fantasia.
		 */
    }
}

export interface Livro {
    id: number;
    nome: string;
    genero: string;
}

