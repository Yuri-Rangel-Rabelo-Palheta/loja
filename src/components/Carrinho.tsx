'use client';
// src/app/components/Carrinho.tsx
import { useState, createContext, useContext, AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react';

// Contexto para gerenciar o carrinho globalmente
const CarrinhoContext = createContext<any>(null);

export const CarrinhoProvider = ({ children }: { children: React.ReactNode }) => {
  const [produtos, setProdutos] = useState<any[]>([]);

  const adicionarProduto = (produto: any) => {
    setProdutos([...produtos, produto]);
  };

  return (
    <CarrinhoContext.Provider value={{ produtos, adicionarProduto }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  return useContext(CarrinhoContext);
};

const Carrinho = () => {
  const { produtos } = useCarrinho();

  return (
    <div>
      <button>
        <span role="img" aria-label="cart">🛒</span>
        <span>({produtos.length})</span>
      </button>
      {produtos.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {produtos.map((produto: { nome: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }, index: Key | null | undefined) => (
            <li key={index}>{produto.nome}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carrinho;


/* 'use client';

// src/app/components/Carrinho.tsx
import { useState } from 'react';

const Carrinho = () => {
  const [produtos, setProdutos] = useState<any[]>([]);

  const adicionarProduto = (produto: any) => {
    setProdutos([...produtos, produto]);
  };

  return (
    <div>
      <button>
        <span role="img" aria-label="cart">🛒</span>
        <span>({produtos.length})</span>
      </button>
      {produtos.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {produtos.map((produto, index) => (
            <li key={index}>{produto.nome}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carrinho;
 */

