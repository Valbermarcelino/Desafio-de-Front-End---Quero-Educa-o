import { FC } from "react";
import QText from "./QText";
import QLink from "./QLink";

const QFooter: FC = ({}) => {
  const year = new Date().getFullYear();

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto flex items-center gap-2 flex-col justify-center text-center">
        <section className="flex gap-2">
          <QText size="sm" tag="p" weight="light">
            Precisa de uma ajuda?
          </QText>
          <QLink href="#" size="sm">
            Fale conosco
          </QLink>
        </section>
        <section>
          <QText tag="small" color="minor" size="sm">
            &copy; {year} Quero Bolsa • CNPJ
            <data value="10542212000154">10.542.212/0001-54</data>
          </QText>
        </section>
      </div>
    </section>
  );
};

export default QFooter;
