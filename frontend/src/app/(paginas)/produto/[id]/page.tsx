import { produtos } from "@/core";
import Image from "next/image";

export default function PaginaProduto(props: any) {
  const id = +props.params.id;
  const produto = produtos.find((produto) => produto.id === id);

  return (
    <div>
      PRODUTO:
      <div className="w-full h-48 relative">
        <Image
          src={produto?.imagem || ""}
          fill
          className="object-contain"
          alt="Imagem do Produto"
        />
      </div>
      {produto?.nome}
    </div>
  );
}
