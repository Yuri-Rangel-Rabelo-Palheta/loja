import Produto from '../../components/Produto';
import { produtos } from '../../app/produtos/produtos';

export default function ProdutosPage() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Lista de Produtos</h1>
        <div className="flex flex-wrap -m-2">
          {produtos.map((produto, index) => (
            <Produto
                  key={index}
                  nome={produto.nome}
                  descricao={produto.descricao}
                  valor={produto.valor} id={produto.id}            />
          ))}
        </div>
      </div>
    );
  }
