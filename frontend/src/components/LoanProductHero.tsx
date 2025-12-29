import { motion } from "framer-motion";

export const LoanProductHero = () => {
    return (
        <section className="bg-white box-border  py-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="box-border  max-w-screen-xl text-center mx-auto px-8"
            >
                <div className="box-border  inline-block mb-6">
                    <span className="text-white text-sm font-medium bg-slate-700 box-border  leading-5 px-4 py-2 rounded-full">
                        Loan Products
                    </span>
                </div>
                <h1 className="text-slate-900 lg:text-5xl text-[42px] font-bold box-border  leading-[48px] mb-6 font-inter">
                    Comprehensive Loan Solutions
                </h1>
                <p className="text-gray-400 text-lg box-border  leading-[29.25px] max-w-screen-md mx-auto">
                    Choose from our wide range of loan products designed to meet your
                    personal and business financial needs with competitive rates and
                    flexible terms.
                </p>
            </motion.div>
        </section>
    );
};
