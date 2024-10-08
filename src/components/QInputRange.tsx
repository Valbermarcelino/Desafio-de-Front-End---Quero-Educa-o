import { FC, InputHTMLAttributes } from "react";

interface QInputRangeProps extends InputHTMLAttributes<HTMLInputElement> {
  min: number;
  max: number;
  value: [number, number]; // Alterado para um array que contém o valor mínimo e máximo
  onChange: (value: [number, number]) => void; // Callback para atualizar os valores
}

const QInputRange: FC<QInputRangeProps> = ({ min, max, value, onChange }) => {
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.max(Number(e.target.value), value[0]); // Não permitir que o máximo seja menor que o mínimo
    onChange([value[0], newMax]);
  };

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={value[1]}
        className="w-full mt-3 cursor-col-resize"
        onChange={handleMaxChange} // Atualiza o valor máximo
      />
      <div className="flex justify-between">
        <span>R$ {value[0].toFixed(2)}</span>
        <span>R$ {value[1].toFixed(2)}</span>
      </div>
    </>
  );
};

export default QInputRange;
