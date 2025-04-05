import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const Header = () => {
    return(
        <header className="w-full backdrop-blur-lg flex justify-center items-center">
            <div className="max-w-[1280px] p-2 w-full flex justify-between items-center">
                <Image 
                    src={"/assets/uno-logo.png"}
                    alt=""
                    width={130}
                    height={130}
                />
                <div className="hidden lg:flex items-center gap-9">
                    <ul className="flex gap-7 text-white text-md">
                        <li className="cursor-pointer hover:text-red-500 transition-all duration-300">Inicio</li>
                        <li className="cursor-pointer hover:text-red-500 transition-all duration-300">Onde Encontrar</li>
                        <li className="cursor-pointer hover:text-red-500 transition-all duration-300">Novos Produtos</li>
                        <li className="cursor-pointer hover:text-red-500 transition-all duration-300">Créditos</li>
                    </ul>
                    <button className="w-30 h-11 border-2 border-white text-white rounded-xl cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_15px_5px_rgba(239,68,68,0.7)]">Entrar</button>
                    <p className="text-white hover:text-red-500 cursor-pointer transition-all duration-300">Cadastre-se</p>
                </div>

                <div className="block lg:hidden">
                    <FontAwesomeIcon icon={faBars} className="size-6 text-white" />
                </div>
            </div>
        </header>
    );
}