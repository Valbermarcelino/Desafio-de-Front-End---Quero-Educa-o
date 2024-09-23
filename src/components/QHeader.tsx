import { FC, ReactNode, useState } from "react";
import QRow from "./QRow";
import QButton from "./QButton";
import QIconSearch from "./QIconSearch";
import QBottomSheet from "./QBottomSheet";

interface QHeaderProps {
  children: ReactNode;
}

const QHeader: FC<QHeaderProps> = ({ children }) => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      <section className="h-20 bg-white lg:flex items-center justify-between hidden">
        <QRow
          sidebar={
            <figure className="flex items-center h-full">
              <img
                src="https://kong.quero.com/logotype-querobolsa.svg"
                alt="Quero Bolsa"
                height="28px"
                width="181px"
              />
            </figure>
          }
        >
          <div className="flex gap-4 items-center">{children}</div>
        </QRow>
      </section>

      <section className="flex lg:hidden h-20 bg-white">
        <QRow sidebar={null}>
          <div className="flex justify-between h-full items-center">
            <figure className="flex items-center h-full">
              <img
                src="https://kong.quero.com/logotype-querobolsa.svg"
                alt="Quero Bolsa"
                height="28px"
                width="181px"
              />
            </figure>

            <QButton variant="secondary" onClick={() => setOpenSearch(true)}>
              <QIconSearch />
            </QButton>
          </div>
        </QRow>
      </section>

      <QBottomSheet open={openSearch} onClose={() => setOpenSearch(false)}>
        <div className="flex gap-2 flex-col">{children}</div>
      </QBottomSheet>
    </>
  );
};

export default QHeader;
