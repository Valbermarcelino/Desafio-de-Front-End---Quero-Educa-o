import { FC, ReactNode } from "react";
import QRow from "./QRow";

type QLayoutProps = {
  sidebar: ReactNode;
  header: ReactNode;
  children: ReactNode;
  footer: ReactNode;
};

const QLayout: FC<QLayoutProps> = ({ sidebar, header, children, footer }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="border-b">
        <header className="max-w-screen-2xl mx-auto w-full">{header}</header>
      </div>

      <div className="max-w-screen-2xl mx-auto w-full">
        <QRow
          sidebar={
            <aside className="pr-8 border-r py-6 h-full">{sidebar}</aside>
          }
        >
          <main className="py-6">{children}</main>
        </QRow>
      </div>

      <footer className="border-t">{footer}</footer>
    </div>
  );
};

export default QLayout;
