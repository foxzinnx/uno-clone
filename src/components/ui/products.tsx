import { faBagShopping, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const Products = () => {
    return(
        <section className="w-full flex justify-center items-center mt-25">
            <div className="max-w-[1300px] w-full px-4 flex flex-col justify-center items-center">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-white font-medium border-b-2 border-b-[#666666] pb-4 text-3xl">Escolha o seu modelo</h1>
                    <div className="bg-[#ed1c24] flex justify-center items-center rounded-xl cursor-pointer hover:bg-white transition-all duration-300 group w-[8rem] gap-2 h-12">
                        <FontAwesomeIcon icon={faFilter} className="text-white size-5 group-hover:text-red-500" />
                       <button className="text-white font-semibold group-hover:text-red-500 cursor-pointer">Filtrar</button> 
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 w-full gap-10">

                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <Image 
                                src={"/assets/uno-flip.png"}
                                alt=""
                                width={270}
                                height={270}
                                className="hover:scale-105 transition-all duration-500 cursor-pointer"
                            />
                        </div>
                        <div className="w-full border-b border-b-white pb-3 flex px-3 justify-between pt-5 items-center">
                            <h1 className="text-white font-medium text-xl ">UNO® Flip SIOC</h1>
                            <p className="text-white text-lg">R$ 104,99</p>
                        </div>
                        <div className="bg-[#ed1c24] relative flex cursor-pointer justify-center gap-2 items-center mt-5 rounded-xl w-full h-13 overflow-hidden group">
                            <div className="absolute inset-0 bg-red-800 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1200 ease-in-out"></div>
                            
                            <div className="relative z-10 flex justify-center items-center gap-2 w-full">
                                <FontAwesomeIcon icon={faBagShopping} className="text-white size-5" />
                                <button className="font-semibold text-lg cursor-pointer text-white">Comprar</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <Image 
                                src={"/assets/uno-dos.png"}
                                alt=""
                                width={270}
                                height={270}
                                className="hover:scale-105 transition-all duration-500 cursor-pointer"
                            />
                        </div>
                        <div className="w-full border-b border-b-white pb-3 flex px-3 justify-between pt-5 items-center">
                            <h1 className="text-white font-medium text-xl ">UNO® Dos</h1>
                            <p className="text-white text-lg">R$ 50,00</p>
                        </div>
                        <div className="bg-[#ed1c24] relative flex cursor-pointer justify-center gap-2 items-center mt-5 rounded-xl w-full h-13 overflow-hidden group">
                            <div className="absolute inset-0 bg-red-800 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1200 ease-in-out"></div>
                            
                            <div className="relative z-10 flex justify-center items-center gap-2 w-full">
                                <FontAwesomeIcon icon={faBagShopping} className="text-white size-5" />
                                <button className="font-semibold text-lg cursor-pointer text-white">Comprar</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <Image 
                                src={"/assets/uno-original.png"}
                                alt=""
                                width={270}
                                height={270}
                                className="hover:scale-105 transition-all duration-500 cursor-pointer"
                            />
                        </div>
                        <div className="w-full border-b border-b-white pb-3 flex px-3 justify-between pt-5 items-center">
                            <h1 className="text-white font-medium text-xl ">UNO® Original</h1>
                            <p className="text-white text-lg">R$ 29,99</p>
                        </div>
                        <div className="bg-[#ed1c24] relative flex cursor-pointer justify-center gap-2 items-center mt-5 rounded-xl w-full h-13 overflow-hidden group">
                            <div className="absolute inset-0 bg-red-800 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1200 ease-in-out"></div>
                            
                            <div className="relative z-10 flex justify-center items-center gap-2 w-full">
                                <FontAwesomeIcon icon={faBagShopping} className="text-white size-5" />
                                <button className="font-semibold text-lg cursor-pointer text-white">Comprar</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <Image 
                                src={"/assets/uno-masters.png"}
                                alt=""
                                width={270}
                                height={270}
                                className="hover:scale-105 transition-all duration-500 cursor-pointer"
                            />
                        </div>
                        <div className="w-full border-b border-b-white pb-3 flex px-3 justify-between pt-5 items-center">
                            <h1 className="text-white font-medium text-xl ">UNO® Masters</h1>
                            <p className="text-white text-lg">R$ 34,99</p>
                        </div>
                        <div className="bg-[#ed1c24] relative flex cursor-pointer justify-center gap-2 items-center mt-5 rounded-xl w-full h-13 overflow-hidden group">
                            <div className="absolute inset-0 bg-red-800 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1200 ease-in-out"></div>
                            
                            <div className="relative z-10 flex justify-center items-center gap-2 w-full">
                                <FontAwesomeIcon icon={faBagShopping} className="text-white size-5" />
                                <button className="font-semibold text-lg cursor-pointer text-white">Comprar</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <Image 
                                src={"/assets/uno-barbie.png"}
                                alt=""
                                width={270}
                                height={270}
                                className="hover:scale-105 transition-all duration-500 cursor-pointer"
                            />
                        </div>
                        <div className="w-full border-b border-b-white pb-3 flex px-3 justify-between pt-5 items-center">
                            <h1 className="text-white font-medium text-xl ">UNO® Barbie</h1>
                            <p className="text-white text-lg">R$ 23,99</p>
                        </div>
                        <div className="bg-[#ed1c24] relative flex cursor-pointer justify-center gap-2 items-center mt-5 rounded-xl w-full h-13 overflow-hidden group">
                            <div className="absolute inset-0 bg-red-800 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1200 ease-in-out"></div>
                            
                            <div className="relative z-10 flex justify-center items-center gap-2 w-full">
                                <FontAwesomeIcon icon={faBagShopping} className="text-white size-5" />
                                <button className="font-semibold text-lg cursor-pointer text-white">Comprar</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <Image 
                                src={"/assets/uno-masters.png"}
                                alt=""
                                width={270}
                                height={270}
                                className="hover:scale-105 transition-all duration-500 cursor-pointer"
                            />
                        </div>
                        <div className="w-full border-b border-b-white pb-3 flex px-3 justify-between pt-5 items-center">
                            <h1 className="text-white font-medium text-xl ">UNO® Masters</h1>
                            <p className="text-white text-lg">R$ 34,99</p>
                        </div>
                        <div className="bg-[#ed1c24] relative flex cursor-pointer justify-center gap-2 items-center mt-5 rounded-xl w-full h-13 overflow-hidden group">
                            <div className="absolute inset-0 bg-red-800 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1200 ease-in-out"></div>
                            
                            <div className="relative z-10 flex justify-center items-center gap-2 w-full">
                                <FontAwesomeIcon icon={faBagShopping} className="text-white size-5" />
                                <button className="font-semibold text-lg cursor-pointer text-white">Comprar</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <Image 
                                src={"/assets/uno-minimalista.png"}
                                alt=""
                                width={270}
                                height={270}
                                className="hover:scale-105 transition-all duration-500 cursor-pointer"
                            />
                        </div>
                        <div className="w-full border-b border-b-white pb-3 flex justify-between pt-5 items-center">
                            <h1 className="text-white font-medium text-xl ">UNO® Minimalista</h1>
                            <p className="text-white text-lg">R$ 54,99</p>
                        </div>
                        <div className="bg-[#ed1c24] relative flex cursor-pointer justify-center gap-2 items-center mt-5 rounded-xl w-full h-13 overflow-hidden group">
                            <div className="absolute inset-0 bg-red-800 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1200 ease-in-out"></div>
                            
                            <div className="relative z-10 flex justify-center items-center gap-2 w-full">
                                <FontAwesomeIcon icon={faBagShopping} className="text-white size-5" />
                                <button className="font-semibold text-lg cursor-pointer text-white">Comprar</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <Image 
                                src={"/assets/uno-flip.png"}
                                alt=""
                                width={270}
                                height={270}
                                className="hover:scale-105 transition-all duration-500 cursor-pointer"
                            />
                        </div>
                        <div className="w-full border-b border-b-white pb-3 flex px-3 justify-between pt-5 items-center">
                            <h1 className="text-white font-medium text-xl ">UNO® Flip</h1>
                            <p className="text-white text-lg">R$ 54,99</p>
                        </div>
                        <div className="bg-[#ed1c24] relative flex cursor-pointer justify-center gap-2 items-center mt-5 rounded-xl w-full h-13 overflow-hidden group">
                            <div className="absolute inset-0 bg-red-800 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1200 ease-in-out"></div>
                            
                            <div className="relative z-10 flex justify-center items-center gap-2 w-full">
                                <FontAwesomeIcon icon={faBagShopping} className="text-white size-5" />
                                <button className="font-semibold text-lg cursor-pointer text-white">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="mt-15 text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer font-medium w-36 rounded-xl border border-white h-12 mb-5">Ver mais</button>
            </div>
        </section>
    );
}