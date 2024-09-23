import { FC, ReactNode, useState, HTMLAttributes } from "react";
import QHeading from "./QHeading";
import QPopover from "./QPopover";
import QIconBarsArrowUp from "./QIconBarsArrowUp";
import QButton from "./QButton";
import QBottomSheet from "./QBottomSheet";

interface QSectionFormProps extends HTMLAttributes<HTMLElement> {
  title: string;
  filter: ReactNode;
  orderBy: ReactNode;
}

const QSectionForm: FC<QSectionFormProps> = ({ title, filter, orderBy }) => {
  const [openOrderBy, setOpenOrderBy] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      <section className="justify-between items-center hidden lg:flex">
        <QHeading tag="h1">{title}</QHeading>

        <QPopover
          trigger={(open) => (
            <QButton variant="secondary" size="sm" type="button" onClick={open}>
              <QIconBarsArrowUp />
              Ordenar
            </QButton>
          )}
        >
          {orderBy}
        </QPopover>
      </section>

      <section className="flex lg:hidden flex-col">
        <QHeading tag="h1">{title}</QHeading>

        <div className="flex gap-2 mt-6">
          <QButton
            className="grow"
            size="sm"
            onClick={() => setOpenFilter(true)}
          >
            Filtrar
          </QButton>

          <QButton
            className="grow"
            size="sm"
            variant="secondary"
            onClick={() => setOpenOrderBy(true)}
          >
            Ordenar
          </QButton>
        </div>
      </section>

      <QBottomSheet open={openOrderBy} onClose={() => setOpenOrderBy(false)}>
        {orderBy}
      </QBottomSheet>

      <QBottomSheet open={openFilter} onClose={() => setOpenFilter(false)}>
        {filter}
      </QBottomSheet>
    </>
  );
};

export default QSectionForm;
