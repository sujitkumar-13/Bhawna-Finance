import { motion } from "framer-motion";

export const LoanCTASection = () => {
    return (
        <section className="bg-slate-900 box-border  py-20">
            <div className="box-border  max-w-4xl text-center mx-auto px-8">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-white text-4xl font-bold box-border  leading-10 mb-6 font-inter"
                >
                    Need Help Choosing the Right Loan?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-white/90 text-lg box-border  leading-7 max-w-2xl mb-8 mx-auto"
                >
                    Our financial experts are here to help you find the perfect loan
                    solution that matches your specific requirements and financial goals.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="box-border  gap-x-4 flex flex-col justify-center gap-y-4 md:flex-row"
                >
                    <button className="text-white text-lg font-medium items-center bg-[#C59D4F] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px]  flex h-14 justify-center leading-7 text-nowrap px-8 py-4 rounded-xl hover:bg-[#B38C3D] hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        Schedule Consultation
                    </button>
                    <button className="text-white text-lg font-medium items-center bg-transparent  flex h-14 justify-center leading-7 text-nowrap border px-8 py-4 rounded-xl border-solid border-white hover:bg-white/10 hover:text-white transition-all duration-300 transform hover:scale-105">
                        Call Us Now
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
