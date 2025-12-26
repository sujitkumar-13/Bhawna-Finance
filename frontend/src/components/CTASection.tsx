import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
    return (
        <section className="relative py-12 md:py-24 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-100/50 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-100 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                <div className="bg-slate-900 rounded-3xl p-8 md:p-20 text-center shadow-2xl overflow-hidden relative group">
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex justify-center mb-6"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-orange-400 text-sm font-medium border border-white/10 backdrop-blur-sm">
                            <Sparkles className="w-4 h-4" />
                            Fast-Track Your Dreams
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-white text-3xl md:text-6xl font-bold mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] font-inter tracking-tight"
                    >
                        Ready to Apply for a <span className="text-orange-400">Loan?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed"
                    >
                        Get started with a simple application process and receive approval
                        within <span className="text-white font-semibold">48 hours</span>. Our team is ready to help you
                        achieve your financial goals with ease.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/apply-now"
                            className="group relative inline-flex items-center justify-center gap-3 bg-orange-400 text-white text-base md:text-lg font-semibold px-8 py-4 md:px-10 md:py-5 rounded-2xl hover:bg-orange-500 transition-all duration-300 shadow-xl shadow-orange-400/20 hover:shadow-orange-400/40 hover:-translate-y-1 active:scale-95"
                        >
                            Start Your Application
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
