'use client';

import Link from 'next/link';

interface ProdutoProps {
  id: number;
  nome: string;
  descricao: string;
  valor: number;
}

export default function Produto({ id, nome, descricao, valor }: ProdutoProps) {
  return (
    <Link href={`/produtos/${id}`}>
      <div className="cursor-pointer border p-4 rounded hover:shadow-md transition-shadow">
        <h2 className="font-bold text-lg">{nome}</h2>
        <p className="text-sm text-gray-600">{descricao}</p>
        <p className="text-green-600 font-semibold">R${valor.toFixed(2)}</p>
      </div>
    </Link>
  );
}


/* import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export default function Produto(props: { produto: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) {
    return (
        <div>
            <h1>Página de Produtos</h1>

            <h2>{props.produto}</h2>
        </div>
    );
}    */