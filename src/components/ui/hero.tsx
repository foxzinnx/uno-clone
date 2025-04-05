import Image from "next/image";

export const Hero = () => {
    return(
        <section className="w-full flex justify-center items-center mt-20">
            <div className="max-w-[1280px] w-full flex justify-between p-1 items-center">
                <div className="w-[35rem] grid text-5xl flex-col text-white space-y-4">
                    <h1 className="font-semibold">UNO® minimalista,</h1>
                    <div className="font-light space-y-6">
                        <p className="leading-19">representa uma excelente opção de presente para colecionadores!</p>
                    </div>
                    <p className="text-[23px] leading-8 text-light">Esta edição especial do UNO®, o jogo de cartas adorado por todos, tem um visual totalmente exclusivo.</p>
                    <div className="flex gap-10">
                        <button className="text-[18px] bg-[#ed1c24] rounded-xl font-semibold text-white w-[11rem] h-13 cursor-pointer hover:shadow-[0_0_15px_5px_rgba(237,28,36,0.7)] transition-all duration-300">Saiba mais</button>
                        <button className="text-[18px] border-2 border-white- rounded-xl font-semibold text-white w-[14rem] h-13 hover:bg-white hover:text-black transition-all duration-300 hover:border-white cursor-pointer">Onde encontrar</button>
                    </div>
                </div>

                <div>
                    <Image 
                        src={"/assets/caixa.png"}
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