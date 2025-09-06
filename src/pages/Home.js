import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import shivamImg from "../assets/shivam.jpg";
import archanaImg from "../assets/archana.jpg";

export default function Home() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden text-white">
            {/* Particle Background */}
            {init && (
                <Particles
                    id="tsparticles"
                    options={{
                        background: {
                            color: {
                                value: "#0f0c29", // dark gradient bg
                            },
                        },
                        particles: {
                            number: { value: 80 },
                            size: { value: 3 },
                            move: { enable: true, speed: 1 },
                            links: { enable: true, color: "#ffffff" },
                        },
                    }}
                    className="absolute inset-0 -z-10"
                />
            )}

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center h-full text-center">
                <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-lg">
                    Gopal & Archana 🚀
                </h1>

                <ReactTyped
                    strings={[
                        "We design modern software",
                        "We create stunning websites",
                        "We build digital experiences ✨",
                    ]}
                    typeSpeed={50}
                    backSpeed={30}
                    loop
                    className="text-2xl md:text-3xl mt-6 text-gray-200"
                />

                <div className="flex space-x-10 mt-12">
                    <img
                        src={shivamImg}
                        alt="Shivam"
                        className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-xl border-4 border-yellow-400 hover:scale-110 transition duration-300"
                    />
                    <img
                        src={archanaImg}
                        alt="Archana"
                        className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-xl border-4 border-pink-400 hover:scale-110 transition duration-300"
                    />
                </div>


                <p className="mt-6 max-w-2xl text-gray-300">
                    We design & build <span className="text-yellow-300">software</span> +
                    <span className="text-pink-300"> design solutions</span> that make an
                    impact. Let’s create something amazing together!
                </p>

                <div className="mt-6 flex space-x-4">
                    <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-md hover:shadow-lg hover:scale-105 transition">
                        Our Projects
                    </button>
                    <button className="px-6 py-2 rounded-full bg-yellow-400 text-black font-bold shadow-md hover:shadow-lg hover:scale-105 transition">
                        Hire Us
                    </button>
                </div>
            </div>
        </div>
    );
}
