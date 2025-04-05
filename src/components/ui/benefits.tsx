import Image from "next/image";

export const Benefits = () => {
    return(
        <section className="w-full flex justify-center items-center mt-25 relative">
            
            <div className="absolute inset-0 z-0 top-10 hidden lg:block">
            <div className="absolute w-80 h-80 rounded-full bg-blue-500 opacity-50 blur-3xl left-1/2"></div>

                <div className="absolute w-62 h-62 rounded-full bg-purple-600 opacity-50 blur-3xl left-1/4"></div>

                <div className="absolute w-70 h-70 rounded-full bg-blue-500 opacity-50 blur-3xl left-1/3"></div>
                
                <div className="absolute w-70 h-70 rounded-full bg-blue-500 opacity-50 blur-3xl lg:left-1/3"></div>

                <div className="absolute w-70 h-70 rounded-full bg-blue-500 opacity-50 blur-3xl left-10/16"></div>
                
                
                
            </div>

            <div className="max-w-[1300px] px-4 flex flex-col justify-center items-center z-10">
                <div className="flex justify-center items-center text-center lg:text-start flex-col">
                    <h1 className="text-3xl lg:text-4xl text-white font-medium">Benefícios de jogar UNO</h1>
                    <p className="text-white font-light pt-5 text-lg lg:text-xl">Saiba mais sobres os benefícios de jogar <strong>UNO</strong> com seus amigos e família</p>
                </div>
                
                <div className="flex justify-center items-center mt-15">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-20 lg:gap-36">
                        <div className="flex flex-col justify-center items-center gap-5 flex-wrap text-center">
                            <div className="p-8 px-13 rounded-2xl backdrop-blur-2xl bg-white/5 hover:border-white hover:scale-105 transition-all duration-300 hover:bg-white/10 cursor-pointer border-2 border-white/40">
                                <Image 
                                    src={"/assets/shild-icon.svg"}
                                    alt=""
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <p className="text-white max-w-[12rem] w-full">Divirta-se com segurança.</p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-5 flex-wrap text-center">
                            <div className="p-8 px-13 rounded-2xl backdrop-blur-2xl bg-white/5 hover:border-white hover:scale-105 transition-all duration-300 hover:bg-white/10 cursor-pointer border-2 border-white/40">
                                <Image 
                                    src={"/assets/box-icon.svg"}
                                    alt=""
                                    width={50}
                                    height={50}
                                    className=""
                                />
                            </div>
                            <p className="text-white max-w-[12rem] w-full">Pensamentos fora da caixinha.</p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-5 flex-wrap text-center">
                            <div className="p-8 px-13 rounded-2xl backdrop-blur-2xl bg-white/5 hover:border-white hover:scale-105 transition-all duration-300 hover:bg-white/10 cursor-pointer border-2 border-white/40">
                                <Image 
                                    src={"/assets/media-icon.svg"}
                                    alt=""
                                    width={50}
                                    height={50}
                                    className=""
                                />
                            </div>
                            <p className="text-white max-w-[12rem] w-full">Ativa o seu lado criativo.</p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-5 flex-wrap text-center">
                            <div className="p-8 px-13 rounded-2xl backdrop-blur-2xl bg-white/5 hover:border-white hover:scale-105 transition-all duration-300 hover:bg-white/10 cursor-pointer border-2 border-white/40">
                                <Image 
                                    src={"/assets/rocket-icon.svg"}
                                    alt=""
                                    width={50}
                                    height={50}
                                    className=""
                                />
                            </div>
                            <p className="text-white max-w-[12rem] w-full">Estimula o raciocínio rápido.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}