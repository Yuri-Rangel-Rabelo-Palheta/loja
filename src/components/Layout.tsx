"use client"


import MenuLateral from "./MenuLateral";
import MenuSuperior from "./MenuSuperior";
import Rodape from "./Rodape";


const Layout = ({ children }) => {
    return (
      <div className="flex flex-col min-h-screen">
        <MenuSuperior />
        <div className="flex flex-1">
          <MenuLateral />
          <main className="flex-1 p-4">
            {children}
          </main>
        </div>
        <Rodape />
      </div>
    );
  };
  
  export default Layout;