import Image from "next/image";

export const Hero = () => {
    return(
        <section className="w-full flex justify-center items-center mt-15 lg:mt-20">
            <div className="max-w-[1280px] w-full flex flex-col lg:flex-row justify-between p-1 items-center">
                <div className="w-[35rem] flex justify-center lg:grid text-4xl text-center lg:text-start px-14 lg:px-0 lg:text-5xl flex-col text-white space-y-3 lg:space-y-4">
                    <h1 className="font-semibold">UNO® minimalista,</h1>
                    <div className="font-light text-center lg:text-start space-y-6">
                        <p className="leading-14 lg:leading-19">representa uma excelente opção de presente para colecionadores!</p>
                    </div>
                    <p className="text-[16px] px-4 lg:px-0 lg:text-[23px] leading-6 lg:leading-9 text-light">Esta edição especial do UNO®, o jogo de cartas adorado por todos, tem um visual totalmente exclusivo.</p>
                    <div className="flex px-7 lg:px-0 gap-5 lg:gap-10 pb-20 lg:pb-0 pt-5 lg:pt-0">
                        <button className="text-[18px] bg-[#ed1c24] rounded-xl font-semibold text-white w-[11rem] h-13 cursor-pointer hover:shadow-[0_0_15px_5px_rgba(237,28,36,0.7)] transition-all duration-300">Saiba mais</button>
                        <button className="text-[18px] border-2 border-white- rounded-xl font-semibold text-white w-[14rem] h-13 hover:bg-white hover:text-black transition-all duration-300 hover:border-white cursor-pointer">Onde encontrar</button>
                    </div>
                </div>

                <div>
                    <Image 
                        src={"/assets/Caixa.png"}
                        alt=""
                        width={410}
                        height={400}
                        quality={100}
                    />
                </div>
            </div>
        </section>
    );
}