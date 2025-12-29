import { motion } from "framer-motion";
import { Counter } from "./Counter";

export const AboutHero = () => {
    return (
        <section className="bg-white box-border  py-20">
            <div className="box-border  max-w-screen-xl mx-auto px-8">
                <div className="items-center box-border  gap-x-12 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-12 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="box-border "
                    >
                        <div className="box-border  inline-block mb-6">
                            <span className="text-white text-sm font-medium bg-slate-700 box-border  leading-5 px-4 py-2 rounded-full">
                                About Bhawan Finance
                            </span>
                        </div>
                        <h1 className="text-slate-900 text-5xl font-bold box-border  leading-[48px] mb-6 font-inter">
                            <Counter value="25+" /> Years of Financial Excellence
                        </h1>
                        <p className="text-gray-400 text-lg box-border  leading-[29.25px] mb-8">
                            Since 1998, Bhawan Finance has been a trusted name in the financial
                            services sector, providing reliable lending solutions with a commitment
                            to transparency and customer satisfaction.
                        </p>
                        <button className="text-white text-lg font-medium items-center bg-[#C59D4F] hover:bg-[#B38C3D] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px]  inline-flex h-14 justify-center leading-7 text-center text-nowrap px-8 py-4 rounded-bl rounded-br rounded-tl rounded-tr hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px]">
                            Our Services
                        </button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative box-border  overflow-hidden rounded-lg group"
                    >
                        <img
                            alt="Bhawan Finance Office"
                            src="https://public.readdy.ai/ai/img_res/2f0a5cca0d9e40995c8443fc553738a4.jpg"
                            className="shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border  h-96 max-w-full object-cover w-full transition-transform duration-500 group-hover:scale-105"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
