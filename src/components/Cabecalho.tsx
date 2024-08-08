//Arquivo do cabecalho do site
import Link from "next/link";
import Image from "next/image";

export default function Cabecalho() {
    return (
        <header className="bg-gray-800 text-gray-100">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/">
                    <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        
                    </div>
                </Link> 
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/">
                        <div className="mr-5 hover:text-white">Home</div>
                    </Link>
                    <Link href="/sobre">
                        <div className="mr-5 hover:text-white">Sobre</div>
                    </Link>
                    <Link href="/contato">
                        <div className="mr-5 hover:text-white">Contato</div>
                    </Link>
                </nav>
            </div>
        </header>
    )
}