import { motion } from "framer-motion";
import Amit from "../assets/Amit.jpg";
import sunita from "../assets/sunita.jpg"

export const TestimonialsSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="bg-white box-border  py-20 overflow-hidden">
            <div className="box-border  max-w-screen-xl mx-auto px-8">
                {/* TestimonialsHeader */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="box-border  text-center mb-16"
                >
                    <div className="box-border  inline-block mb-4">
                        <span className="text-white text-sm font-medium bg-slate-700 box-border  leading-5 px-4 py-2 rounded-full">
                            Client Testimonials
                        </span>
                    </div>
                    <h2 className="text-slate-900 text-4xl font-bold box-border  leading-10 font-inter md:text-5xl md:leading-[48px]">
                        Trusted by Thousands
                    </h2>
                </motion.div>

                {/* TestimonialsGrid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="box-border  gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-6 mb-6 md:grid-cols-[repeat(3,minmax(0px,1fr))]"
                >
                    {/* TestimonialCard 1 */}
                    <motion.div variants={itemVariants} className="bg-slate-100 box-border  p-6 rounded-xl border border-transparent  transition-colors shadow-sm hover:shadow-md">
                        <div className="items-center box-border  flex mb-4">
                            <div className="text-white font-bold items-center bg-slate-700 box-border  flex h-12 justify-center w-12 mr-3 rounded-full">
                                RS
                            </div>
                            <div className="box-border ">
                                <h4 className="text-slate-900 font-semibold box-border  font-inter">
                                    Rajesh Sharma
                                </h4>
                                <p className="text-gray-400 text-xs box-border  leading-4">
                                    Business Owner
                                </p>
                            </div>
                        </div>
                        <div className="text-slate-700 box-border  opacity-30 mb-3 text-3xl">
                            <i className="ri-double-quotes-l"></i>
                        </div>
                        <p className="text-slate-900 text-sm box-border  leading-[22.75px]">
                            &quot;Bhawan Finance helped me expand my business with their quick approval process and competitive rates. The team was professional and supportive throughout.&quot;
                        </p>
                    </motion.div>

                    {/* TestimonialCard 2 */}
                    <motion.div variants={itemVariants} className="bg-slate-100 box-border  p-6 rounded-xl border border-transparent  transition-colors shadow-sm hover:shadow-md">
                        <div className="items-center box-border  flex mb-4">
                            <div className="text-white font-bold items-center bg-slate-700 box-border  flex h-12 justify-center w-12 mr-3 rounded-full">
                                PM
                            </div>
                            <div className="box-border ">
                                <h4 className="text-slate-900 font-semibold box-border  font-inter">
                                    Priya Mehta
                                </h4>
                                <p className="text-gray-400 text-xs box-border  leading-4">
                                    Software Engineer
                                </p>
                            </div>
                        </div>
                        <div className="text-slate-700 box-border  opacity-30 mb-3 text-3xl">
                            <i className="ri-double-quotes-l"></i>
                        </div>
                        <p className="text-slate-900 text-sm box-border  leading-[22.75px]">
                            &quot;Excellent service for personal loans. The documentation process was smooth and the interest rates were very competitive compared to other lenders.&quot;
                        </p>
                    </motion.div>

                    {/* TestimonialImageCard */}
                    <motion.div variants={itemVariants} className="relative box-border  h-70 overflow-hidden rounded-xl group shadow-sm">
                        <img
                            alt="Professional Testimonial"
                            src={Amit}
                            className="box-border  h-full max-w-full object-cover w-full transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute bg-[linear-gradient(to_top,rgba(0,0,0,0.7),rgba(0,0,0,0))] box-border  inset-0"></div>
                        <div className="absolute text-white box-border  left-4 bottom-4">
                            <h4 className="font-semibold box-border  font-inter">
                                Amit Kumar
                            </h4>
                            <p className="text-xs box-border  leading-4 opacity-90">
                                Manufacturing Director
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* TestimonialsSecondaryGrid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="box-border  gap-x-6 grid grid-cols-1 md:grid-cols-5 gap-y-6"
                >
                    {/* TestimonialLargeCard */}
                    <motion.div variants={itemVariants} className="relative box-border  h-[400px] md:h-full overflow-hidden rounded-xl md:col-span-3 group shadow-sm">
                        <img
                            alt="Business Meeting"
                            src={sunita}
                            className="box-border  h-full max-w-full object-cover w-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bg-[linear-gradient(to_right,rgba(0,0,0,0.7),rgba(0,0,0,0))] box-border  inset-0"></div>
                        <div className="absolute text-white box-border  max-w-md left-6 bottom-6">
                            <h4 className="font-semibold box-border  mb-1 font-inter text-lg">
                                Sunita Agarwal
                            </h4>
                            <p className="text-sm box-border  leading-4 opacity-90 mb-3">
                                Retail Chain Owner
                            </p>
                            <p className="text-sm box-border  leading-relaxed italic border-l-2 border-[#C59D4F] pl-4">
                                &quot;Their loan against property service helped me secure funds for expansion at the best rates in the market.&quot;
                            </p>
                        </div>
                    </motion.div>

                    {/* TestimonialSmallCard Column */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-4 md:col-span-2 h-full">
                        <div className="flex-1 bg-slate-100 box-border  p-5 rounded-xl border border-transparent transition-all shadow-sm hover:shadow-md flex flex-col justify-center">
                            <p className="text-slate-900 text-sm italic box-border  leading-relaxed mb-4">
                                &quot;Fast gold loan processing with transparent terms.&quot;
                            </p>
                            <div className="items-center box-border  flex">
                                <div className="text-white text-xs font-bold items-center bg-slate-700 box-border  flex h-10 justify-center w-10 mr-3 rounded-full">
                                    VK
                                </div>
                                <div className="box-border ">
                                    <p className="text-slate-900 text-sm font-semibold box-border ">
                                        Vikram Khanna
                                    </p>
                                    <p className="text-gray-500 text-xs box-border ">
                                        Jeweler
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-slate-100 box-border  p-5 rounded-xl border border-transparent transition-all shadow-sm hover:shadow-md flex flex-col justify-center">
                            <p className="text-slate-900 text-sm italic box-border  leading-relaxed mb-4">
                                &quot;Professional team with excellent customer service.&quot;
                            </p>
                            <div className="items-center box-border  flex">
                                <div className="text-white text-xs font-bold items-center bg-slate-700 box-border  flex h-10 justify-center w-10 mr-3 rounded-full">
                                    NK
                                </div>
                                <div className="box-border ">
                                    <p className="text-slate-900 text-sm font-semibold box-border ">
                                        Neha Kapoor
                                    </p>
                                    <p className="text-gray-500 text-xs box-border ">
                                        Consultant
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
