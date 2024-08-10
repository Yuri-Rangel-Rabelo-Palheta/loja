'use client';

import { useContext } from 'react';
import { useParams } from 'next/navigation';
import { produtos } from '../../../app/produtos/produtos';
import { CarrinhoContext } from '../../../context/CarrinhoContext'; // Importa o contexto do carrinho
import { useCarrinho } from '../../../components/Carrinho';

export default function ProductPage() {
  const { id } = useParams();
  const produto = produtos.find((p) => p.id === Number(id));

  //const { adicionarProduto } = useContext(CarrinhoContext); // Acessa a função para adicionar produtos ao carrinho
  const { adicionarProduto } = useCarrinho(); // Obtém a função de adicionar produto ao carrinho

  if (!produto) {
    return <div>Produto não encontrado</div>;
  }

  const handleAddToCart = () => {
    //adicionarProduto(produto); // Adiciona o produto ao carrinho
    adicionarProduto(produto); // Adiciona o produto ao carrinho
    
    console.log('Adicionado ao carrinho:', produto);

    alert(`${produto.nome} foi adicionado ao carrinho!`);
  };

  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      <p>Preço: R${produto.valor}</p>
      <button onClick={handleAddToCart}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}



/* 'use client';

import { useParams } from 'next/navigation';
import { produtos } from '../../../app/produtos/produtos';

export default function ProductPage() {
  const { id } = useParams();
  const produto = produtos.find((p) => p.id === Number(id));

  if (!produto) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      <p>Preço: R${produto.valor}</p>
      <button onClick={() => /* lógica para adicionar ao carrinho */ /*null}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
} */




/* 'use client';

import { useRouter } from 'next/router';
import Carrinho from '../../../components/Carrinho';
import { produtos } from '../../../app/produtos/produtos';


export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const produto = produtos.find((p) => p.id === Number(id));

  if (!produto) return <p>Produto não encontrado</p>;

  const adicionarAoCarrinho = () => {
    // Lógica para adicionar o produto ao carrinho
    // Exemplo: setProdutos([...produtos, produto])

    router.push('/carrinho');
    
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{produto.nome}</h1>
      <p className="mt-2 text-gray-600">{produto.descricao}</p>
      <p className="mt-4 text-green-600 font-semibold">R${produto.valor.toFixed(2)}</p>
      <button 
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded" 
        onClick={adicionarAoCarrinho}>
        Adicionar ao Carrinho
      </button>
      <Carrinho />
    </div>
  );
} */
