"use client";

import { ReactNode, useRef } from "react";
import MenuLateral from "./MenuLateral";
import MenuSuperior from "./MenuSuperior";
import Rodape from "./Rodape";

import { CarrinhoProvider } from "../components/Carrinho";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CarrinhoProvider>
      <div className="flex flex-col min-h-screen">
        <MenuSuperior />
        <div className="flex flex-1">
          
          <main className="flex-1 p-4">
            {children}
          </main>
        </div>
        <Rodape />
      </div>
    </CarrinhoProvider>
  );
}

//export default Layout;
