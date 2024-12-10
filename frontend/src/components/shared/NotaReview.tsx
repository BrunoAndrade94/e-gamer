import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";

export interface NotaReviewProps {
  nota: number;
  tamanho?: number;
}

export default function NotaReview(props: NotaReviewProps) {
  function notaParaEstrelas(nota: number) {
    const estrelas = [];
    const tamanho = props.tamanho ?? 12;

    for (let i = 1; i <= 5; i++) {
      if (nota >= 1) estrelas.push(<IconStarFilled size={tamanho} />);
      else if (nota >= i - 0.5)
        estrelas.push(<IconStarHalfFilled size={tamanho} />);
      else estrelas.push(<IconStar size={tamanho} />);
    }
    return estrelas;
  }

  return (
    <div className="flex gap-0.5 text-emerald-400">
      {notaParaEstrelas(props.nota)}
    </div>
  );
}
