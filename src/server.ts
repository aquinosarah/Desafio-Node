const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer();

server.listen(port, hostname, () => {
    new ProvaTesteComponent()
});

  class ProvaTesteComponent {
	listLivros: Array<Livro> = []
	 initLivrosLivros: number;
	constructor() { 
		this.initLivros()
		this.criarUmNovoLivro("Arquitetura Limpa", "Tecnologia");
		this.criarUmNovoLivro("Harry Potter e a Camara secreta", "Fantasia");
		this.criarUmNovoLivro("WildCards", "Esportes");
		this.criarUmNovoLivro("O Trono do Sol", "Fantasia")
		this.criarUmNovoLivro("O Trono do Sol", "Fantasia")
		console.log
		
	}

	initLivros(){
		// console.log("24" , this.listLivros);
		this.listLivros.push({ id: 0, nome: 'Código Limpo', genero: "Tecnologia" })
		this.listLivros.push({ id: 1, nome: 'Senhor do Anéis', genero: "Fantasia" })
		this.listLivros.push({ id: 2, nome: 'WildCards', genero: "Fantasia" })
		this.listLivros.push({ id: 3, nome: 'Harry Potter e o Prisioneiro de Azkaban', genero: "Fantasia" })
		this.listLivros.push({ id: 4, nome: 'Javascript de alto desempenho', genero: "Tecnologia" })
		this.listLivros.push({ id: 5, nome: 'O poder da ação', genero: "Administração" })
		console.log(this.listLivros)
	}

	criarUmNovoLivro(nome: string, genero: string){

		if (this.buscarLivro(nome, genero) === 0){  
			const novoLivro: Livro = {
				id: this.listLivros.length,
				nome: nome,
				genero: genero
			} 

			this.listLivros.push(novoLivro)
		} else {
			let mensagemErro = 'ja existe um Livro cadastrado sobre o nome e genero passados ';
			console.log(mensagemErro);
			
			/**
			 * Monte a mensagem de erro avisando que já existe um Livro cadastrado sobre o nome e genero passados
			 */
		}
	}

	buscarLivro(_livro: string, genero: string): number{
		let indiceLivro: number = -1
		console.info('Lista', this.listLivros)

		for (let index = 0; index < this.listLivros.length; index++) {

			console.log('posição', index)
			console.info('Livro posicionado', this.listLivros[index])

			const livro = this.listLivros[index]
			// if (livro.nome === nome && livro.genero === genero) {
			// 	return index;
			
			// }
		}
			/**
             * Implemente a validação onde retorne o Indice do Livro caso encontre um com mesmo nome e genero
             */
		
		return indiceLivro
	}

	listarLivrosFantasia(): any{ 
      let livrosFantasia: string[] = [];
	  for (let index = 0; index < this.listLivros.length; index++){
		 let Livros = this.listLivros[index];
		if (Livros.genero === "fantasia"){
			livrosFantasia.push(Livros.nome);
		}
	  }
	
		console.log("lista de livros de fantasia", livrosFantasia);
		
		
	
   }

		/**
		 * Retorne uma String contendo o nome de todos os Livros que são de fantasia.
		 */
	}


export interface Livro{
	id: number,
	nome: string,
	genero: string,
}

function getErrorMessage(ja: any) {
	throw new Error("Function not implemented.");
}

