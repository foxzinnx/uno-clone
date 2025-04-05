import Image from "next/image";

export const Footer = () => {
    return(
        <footer className="w-full flex justify-center items-center mt-25">
            <div className="max-w-[1300px] w-full px-4 flex flex-col justify-center items-center">
                <div className="w-full flex border-b border-b-white pb-13 justify-center text-center md:text-start flex-col md:flex-row md:justify-between items-center">
                    <div className="w-[25rem] flex flex-col  items-center md:items-start">
                        <Image 
                            src={"/assets/uno-logo.png"}
                            alt=""
                            width={120}
                            height={120}
                        />
                        <p className="text-white font-light px-4 md:px-0">Esta edição especial do UNO®, o jogo de cartas adorado por todos, tem um visual totalmente exclusivo. Concebida com uma estética minimalista, essa versão é um grande presente para colecionadores de UNO®.</p>
                    </div>

                    <div className="flex flex-col gap-3 items-center">
                        <p className="text-white pt-8 text-center lg:text-start md:pt-0">Inscreva-se para saber de novidades do mundo UNO.</p>
                        <div className="w-[20rem] lg:w-[27rem] h-15 rounded-xl flex items-center bg-[#282828]">
                            <input type="email" placeholder="Insira seu email" className="w-full px-4 outline-none placeholder:text-[#8b8b8b] text-[#e2e2e2]" />
                            <button className="bg-[#ed1c24] w-1/2 rounded-2xl cursor-pointer text-white font-medium h-full">Cadastrar</button>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col md:flex-row gap-5 text-center justify-between items-center py-4">
                    <div className="flex items-center gap-3">
                        <Image 
                            src={"/assets/insta-icon.svg"}
                            alt=""
                            width={25}
                            height={25}
                        />

                        <Image 
                            src={"/assets/face-icon.svg"}
                            alt=""
                            width={25}
                            height={25}
                        />

                        <Image 
                            src={"/assets/twitter-x.svg"}
                            alt=""
                            width={25}
                            height={25}
                        />
                    </div>

                    <p className="text-[#828282] font-light">© 2024 MATEL. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}