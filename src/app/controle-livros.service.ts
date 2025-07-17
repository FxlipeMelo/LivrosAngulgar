import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'O Pequeno Principe', resumo: 'Resumo', autores: ['Antoine de Saint-Exupéry']},
    { codigo: 2, codEditora: 2, titulo: 'Romeu e Julieta', resumo: 'Resumo', autores: ['William Shakespeare']},
    { codigo: 3, codEditora: 3, titulo: 'Dom Quixote de La mancha', resumo: 'Resumo', autores: ['Miguel de Cervantes']}
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maxCodigo = this.livros.length > 0
      ? Math.max(...this.livros.map(l => l.codigo))
      : 0;

    livro.codigo = maxCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }


}
