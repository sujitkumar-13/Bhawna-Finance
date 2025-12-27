import { motion } from "framer-motion";

interface ComingSoonSectionProps {
    title: string;
    description?: string;
    icon?: string;
}

export const ComingSoonSection = ({ title, description, icon = "ri-tools-line" }: ComingSoonSectionProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center min-h-[60vh] bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center"
        >
            <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2
                }}
                className="w-24 h-24 bg-orange-100 rounded-3xl flex items-center justify-center mb-8"
            >
                <i className={`${icon} text-5xl text-orange-500`}></i>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-slate-900 mb-4 font-inter"
            >
                {title} Coming Soon
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-500 max-w-md text-lg font-inter mb-8"
            >
                {description || "We're working hard to bring this feature to you. This section will be available in a future update."}
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4"
            >
                <div className="h-1.5 w-12 bg-orange-400 rounded-full"></div>
                <div className="h-1.5 w-1.5 bg-orange-200 rounded-full"></div>
                <div className="h-1.5 w-1.5 bg-orange-200 rounded-full"></div>
            </motion.div>
        </motion.div>
    );
};
