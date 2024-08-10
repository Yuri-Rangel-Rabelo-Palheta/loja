'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

// Definição da interface para um produto
interface Produto {
  id: number;
  nome: string;
  descricao: string;
  valor: number;
}

// Definição da interface para o contexto do carrinho
interface CarrinhoContextType {
  produtos: Produto[];
  adicionarProduto: (produto: Produto) => void;
  removerProduto: (id: number) => void;
}

// Criação do contexto do carrinho com um valor padrão
export const CarrinhoContext = createContext<CarrinhoContextType>({
  produtos: [],
  adicionarProduto: () => {},
  removerProduto: () => {},
});

// Definição do componente `CarrinhoProvider` que envolverá a aplicação
export const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  // Função para adicionar um produto ao carrinho
  const adicionarProduto = (produto: Produto) => {
    setProdutos((prevProdutos) => [...prevProdutos, produto]);
    console.log('Adicionado ao carrinho carrinho context:', produto);
  };

  // Função para remover um produto do carrinho pelo ID
  const removerProduto = (id: number) => {
    setProdutos((prevProdutos) => prevProdutos.filter(produto => produto.id !== id));
  };

  // Valores e funções fornecidos pelo contexto
  return (
    <CarrinhoContext.Provider value={{ produtos, adicionarProduto, removerProduto }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

// Hook personalizado para facilitar o uso do contexto
export const useCarrinho = () => useContext(CarrinhoContext);
