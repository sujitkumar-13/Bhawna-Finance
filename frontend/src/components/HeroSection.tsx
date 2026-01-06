import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import homeImage from "../assets/Gallery/image9.avif"

export const HeroSection = () => {
    return (
        <section className="relative bg-white box-border  pt-32 pb-20">
            <div className="box-border  max-w-screen-xl mx-auto px-8">
                {/* HeroContent */}
                <div className="items-center box-border gap-x-12 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-12 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
                    {/* HeroText */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="box-border "
                    >
                        <div className="box-border  inline-block">
                            <span className="text-white text-xs font-medium bg-slate-700 box-border  tracking-[0.6px] leading-4 uppercase px-3 py-1 rounded-full">
                                RBI Registered NBFC
                            </span>
                        </div>
                        <h1 className="text-slate-900 text-5xl font-bold box-border  leading-[60px] max-w-lg mt-6 font-inter md:text-6xl">
                            Reliable Lending Solutions for Your Financial Growth
                        </h1>
                        <p className="text-gray-400 text-lg box-border  leading-[29.25px] max-w-md mt-6">
                            Transparent processes, competitive rates, and dedicated support for
                            individuals and businesses seeking financial solutions.
                        </p>
                        <div className="box-border  gap-x-4 flex flex-col gap-y-4 mt-6 pt-6 md:flex-row">
                            <Link
                                to="/apply-now"
                                className="text-white text-lg font-medium items-center  shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px]  flex h-14 justify-center leading-7 text-center text-nowrap w-full px-8 py-4 rounded-bl rounded-br rounded-tl rounded-tr md:w-auto bg-[#C59D4F] hover:bg-[#B38C3D] hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px]"
                            >
                                Apply for Loan
                            </Link>
                            <Link
                                to="/track-application"
                                className="text-slate-900 text-lg font-medium items-center bg-white  flex h-14 justify-center leading-7 text-center text-nowrap w-full border border-slate-900 px-8 py-4 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:w-auto hover:text-white hover:bg-slate-900"
                            >
                                Track Application Status
                            </Link>
                        </div>
                    </motion.div>
                    {/* HeroImage */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative box-border "
                    >
                        <div className="relative shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border  border border-gray-200 overflow-hidden rounded-lg border-solid">
                            <img
                                alt="Professional Corporate Office"
                                src={homeImage}
                                className="box-border h-96 max-w-full w-full transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
