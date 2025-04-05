"use client"
import Image from "next/image";
import { useEffect } from "react";

export const Hero = () => {

    useEffect(() => {
        if (!document.getElementById("circle-animations")) {
            const styleSheet = document.createElement("style");
            styleSheet.id = "circle-animations";
            styleSheet.innerHTML = `
                @keyframes float1 {
                    0% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -20px) scale(1.05); }
                    66% { transform: translate(-20px, 15px) scale(0.95); }
                    100% { transform: translate(0, 0) scale(1); }
                }
                @keyframes float2 {
                    0% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-25px, 25px) scale(1.08); }
                    100% { transform: translate(0, 0) scale(1); }
                }
                @keyframes float3 {
                    0% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(20px, 20px) scale(0.9); }
                    66% { transform: translate(-15px, -25px) scale(1.1); }
                    100% { transform: translate(0, 0) scale(1); }
                }
                @keyframes float4 {
                    0% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(25px, -15px) scale(1.05); }
                    100% { transform: translate(0, 0) scale(1); }
                }
                .circle-1 {
                    animation: float1 15s ease-in-out infinite;
                }
                .circle-2 {
                    animation: float2 18s ease-in-out infinite;
                }
                .circle-3 {
                    animation: float3 20s ease-in-out infinite;
                }
                .circle-4 {
                    animation: float4 12s ease-in-out infinite;
                }
            `;
            document.head.appendChild(styleSheet);
        }
    }, []);

    return(
        <section className="w-full flex justify-center items-center mt-15 lg:mt-20 relative">
            <div className="absolute inset-0 z-0">
                <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-[#ed1c24] opacity-80 lg:opacity-70 blur-3xl -top-20 -left-20 circle-1"></div>
                
                <div className="absolute w-80 h-80 rounded-full bg-blue-500 opacity-80 lg:opacity-70 blur-3xl right-10 top-60 circle-2"></div>
                
                <div className="absolute hidden lg:block w-72 h-72 rounded-full bg-purple-600 opacity-70 blur-3xl bottom-10 left-1/4 circle-3"></div>
                
                <div className="absolute w-40 hidden md:block h-40 rounded-full bg-purple-800 opacity-60 blur-2xl top-20 right-1/4 circle-4"></div>
            </div>
            
            <div className="max-w-[1300px] overflow-x-hidden w-full flex flex-col lg:flex-row justify-between p-1 items-center relative px-4 z-10">
                <div className="w-[35rem] flex justify-center lg:grid text-3xl text-center lg:text-start px-14 lg:px-0 lg:text-5xl flex-col text-white space-y-3 lg:space-y-4">
                    <h1 className="font-semibold">UNO® minimalista,</h1>
                    <div className="font-light text-center lg:text-start space-y-6">
                        <p className="leading-14 px-8 lg:px-0 md:px-0 lg:leading-19">representa uma excelente opção de presente para colecionadores!</p>
                    </div>
                    <p className="text-[16px] px-10 lg:px-0 lg:text-[23px] leading-6 lg:leading-9 text-light">Esta edição especial do UNO®, o jogo de cartas adorado por todos, tem um visual totalmente exclusivo.</p>
                    <div className="flex mx-auto lg:mx-0 px-7 lg:px-0 gap-5 lg:gap-10 pb-20 lg:pb-0 pt-5 lg:pt-0">
                        <button className="text-[18px] bg-[#ed1c24] rounded-xl font-semibold text-white w-[9rem] lg:w-[11rem] h-13 cursor-pointer hover:shadow-[0_0_15px_5px_rgba(237,28,36,0.7)] transition-all duration-300">Saiba mais</button>
                        <button className="text-[18px] border-2 border-white rounded-xl font-semibold text-white w-[11rem] lg:w-[14rem] h-13 hover:bg-white hover:text-black transition-all duration-300 hover:border-white cursor-pointer">Onde encontrar</button>
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