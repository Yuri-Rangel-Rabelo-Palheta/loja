'use client';
// src/app/components/Carrinho.tsx
import { useState, createContext, useContext, ReactNode, Key } from 'react';
import styles from '../app/styles/Carrinho.module.css';

// Tipo do produto
interface Produto {
  nome: string;
  valor: number;
}

// Contexto para gerenciar o carrinho globalmente
const CarrinhoContext = createContext<any>(null);

export const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const adicionarProduto = (produto: Produto) => {
    setProdutos([...produtos, produto]);
  };

  const removerProduto = (index: number) => {
    setProdutos(produtos.filter((_, i) => i !== index));
  };

  const valorTotal = produtos.reduce((total, produto) => total + produto.valor, 0);

  return (
    <CarrinhoContext.Provider value={{ produtos, adicionarProduto, removerProduto, valorTotal }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  return useContext(CarrinhoContext);
};

const Carrinho = () => {
  const { produtos, removerProduto, valorTotal } = useCarrinho();

  return (
    <div className={styles.container}>
      <button className={styles.cartButton}>
        <span role="img" aria-label="cart">🛒</span>
        <span>({produtos.length})</span>
      </button>
      {produtos.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          <ul className={styles.productList}>
            {produtos.map((produto: Produto, index: Key | number) => (
              <li key={index} className={styles.productItem}>
                <div className={styles.productDetails}>
                  <p className={styles.productName}>{produto.nome}</p>
                  <p className={styles.productPrice}>R$ {produto.valor.toFixed(2)}</p>
                  <button className={styles.removeButton} onClick={() => removerProduto(index)}>Remover</button>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.subtotal}>
            <p><strong>Subtotal:</strong> R$ {valorTotal.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrinho;


/* 'use client';
// src/app/components/Carrinho.tsx
import { useState, createContext, useContext, ReactNode, Key } from 'react';

import styles from '../../src/app/styles/Carrinho.module.css';

// Tipo do produto
interface Produto {
  nome: string;
  valor: number;
}

// Contexto para gerenciar o carrinho globalmente
const CarrinhoContext = createContext<any>(null);

export const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const adicionarProduto = (produto: Produto) => {
    setProdutos([...produtos, produto]);
  };

  const removerProduto = (index: number) => {
    setProdutos(produtos.filter((_, i) => i !== index));
  };

  const valorTotal = produtos.reduce((total, produto) => total + produto.valor, 0);

  return (
    <CarrinhoContext.Provider value={{ produtos, adicionarProduto, removerProduto, valorTotal }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  return useContext(CarrinhoContext);
};

const Carrinho = () => {
  const { produtos, removerProduto, valorTotal } = useCarrinho();

  return (
    <div style={styles.container}>
      <button style={styles.cartButton}>
        <span role="img" aria-label="cart">🛒</span>
        <span>({produtos.length})</span>
      </button>
      {produtos.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          <ul style={styles.productList}>
            {produtos.map((produto: Produto, index: Key | number) => (
              <li key={index} style={styles.productItem}>
                <div style={styles.productDetails}>
                  <p style={styles.productName}>{produto.nome}</p>
                  <p style={styles.productPrice}>R$ {produto.valor.toFixed(2)}</p>
                  <button style={styles.removeButton} onClick={() => removerProduto(index)}>Remover</button>
                </div>
              </li>
            ))}
          </ul>
          <div style={styles.subtotal}>
            <p><strong>Subtotal:</strong> R$ {valorTotal.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};


export default Carrinho;

 */

/* 'use client';
// src/app/components/Carrinho.tsx
import { useState, createContext, useContext, ReactNode, Key } from 'react';

// Tipo do produto
interface Produto {
  nome: string;
  valor: number;
}

// Contexto para gerenciar o carrinho globalmente
const CarrinhoContext = createContext<any>(null);

export const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const adicionarProduto = (produto: Produto) => {
    setProdutos([...produtos, produto]);
  };

  const removerProduto = (index: number) => {
    setProdutos(produtos.filter((_, i) => i !== index));
  };

  const valorTotal = produtos.reduce((total, produto) => total + produto.valor, 0);

  return (
    <CarrinhoContext.Provider value={{ produtos, adicionarProduto, removerProduto, valorTotal }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  return useContext(CarrinhoContext);
};

const Carrinho = () => {
  const { produtos, removerProduto, valorTotal } = useCarrinho();

  return (
    <div>
      <button>
        <span role="img" aria-label="cart">🛒</span>
        <span>({produtos.length})</span>
      </button>
      {produtos.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          <ul>
            {produtos.map((produto: Produto, index: Key | number) => (
              <li key={index}>
                {produto.nome} - R$ {produto.valor.toFixed(2)}
                <button onClick={() => removerProduto(index)}>Remover</button>
              </li>
            ))}
          </ul>
          <p><strong>Valor Total:</strong> R$ {valorTotal.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Carrinho;
 */