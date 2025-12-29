import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../apiConfig";

// Extracting base URL for auth
const AUTH_URL = API_BASE_URL.replace("/applications", "/auth");

export const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post(`${AUTH_URL}/login`, { email, password });

            if (response.data.success) {
                localStorage.setItem("adminToken", response.data.token);
                toast.success("Welcome back, Administrator!");
                navigate("/admin");
            }
        } catch (error: any) {
            console.error("Login error:", error);
            const message = error.response?.data?.message || "Invalid credentials. Please try again.";
            toast.error(message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#C59D4F]/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md relative z-10"
            >
                {/* Logo / Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C59D4F] rounded-2xl shadow-xl shadow-[#C59D4F]/20 mb-4 transition-transform hover:rotate-3 cursor-pointer">
                        <span className="text-white text-2xl font-bold font-inter">BF</span>
                    </div>
                    <h1 className="text-white text-3xl font-bold font-inter tracking-tight">Admin Portal</h1>
                    <p className="text-slate-400 mt-2 font-medium">Please sign in to your executive account</p>
                </div>

                {/* Login Card */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-slate-300 text-sm font-semibold ml-1">Email Address</label>
                            <div className="relative group">
                                <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#C59D4F] transition-colors"></i>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@bhawanfinance.com"
                                    className="w-full bg-slate-900/50 border border-slate-800 text-white pl-12 pr-4 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#C59D4F]/50 focus:border-[#C59D4F] transition-all placeholder:text-slate-600"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-slate-300 text-sm font-semibold">Security Password</label>
                            </div>
                            <div className="relative group">
                                <i className="ri-lock-2-line absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#C59D4F] transition-colors"></i>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-slate-900/50 border border-slate-800 text-white pl-12 pr-4 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#C59D4F]/50 focus:border-[#C59D4F] transition-all placeholder:text-slate-600"
                                />
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 ml-1">
                            <input type="checkbox" id="remember" className="rounded border-slate-800 bg-slate-900 text-[#C59D4F] focus:ring-[#C59D4F]/50" />
                            <label htmlFor="remember" className="text-slate-400 text-sm font-medium cursor-pointer">Remember this device</label>
                        </div>

                        <motion.button
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#C59D4F] hover:bg-[#B38C3D] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#C59D4F]/25 transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                        >
                            {isLoading ? (
                                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    <span>Authorize Session</span>
                                    <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                                </>
                            )}
                        </motion.button>
                    </form>
                </div>

                <div className="mt-8 text-center text-slate-500 text-sm font-medium">
                    &copy; {new Date().getFullYear()} Bhawan Finance. Secure Admin Access.
                </div>
            </motion.div>
        </div>
    );
};
