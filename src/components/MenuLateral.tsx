//Arquivo do menu lateral do site
import Link from "next/link";
import Image from "next/image";

export default function MenuLateral() {
    return (
        <aside className="w-64" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <ul className="space-y-2">
                    <li>
                        <Link href="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            Home
                        </Link>
                    </li>
                    <li>    
                        <Link href="/sobre" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link href="/contato" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            Contato
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}