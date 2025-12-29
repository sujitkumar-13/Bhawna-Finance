import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { API_BASE_URL } from "../../apiConfig";
import { toast } from "react-toastify";

export const AdminStaffPerformanceSection = () => {
    const [loading, setLoading] = useState(true);
    const [staffData, setStaffData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_BASE_URL);
                const allApps = response.data.data;

                // Group by assignedTo
                const grouped = allApps.reduce((acc: any, curr: any) => {
                    const staff = curr.assignedTo || "Unassigned";
                    if (!acc[staff]) {
                        acc[staff] = {
                            name: staff,
                            count: 0,
                            approved: 0,
                            rejected: 0,
                            avgTime: Math.floor(Math.random() * 24) + 12 // Simulated avg time in hours
                        };
                    }
                    acc[staff].count += 1;
                    if (curr.status === "Approved") acc[staff].approved += 1;
                    if (curr.status === "Rejected") acc[staff].rejected += 1;
                    return acc;
                }, {});

                setStaffData(Object.values(grouped).sort((a: any, b: any) => b.count - a.count));
            } catch (error) {
                console.error("Error fetching staff data:", error);
                toast.error("Failed to load staff performance data");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 md:p-8 space-y-8"
        >
            <div>
                <h2 className="text-slate-900 text-2xl font-bold font-inter">Staff & Operations Performance</h2>
                <p className="text-gray-600 mt-1">Track efficiency and processing metrics for all team members</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Leaderboard */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                        <h3 className="text-slate-900 text-lg font-bold font-inter">Operational Efficiency</h3>
                        <span className="text-xs font-bold text-[#C59D4F] uppercase tracking-widest bg-[#C59D4F]/10 px-3 py-1 rounded-full">Top Performers</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-wider">
                                <tr>
                                    <th className="px-6 py-4">Team Member</th>
                                    <th className="px-6 py-4">Processed</th>
                                    <th className="px-6 py-4">Approval Rate</th>
                                    <th className="px-6 py-4">Avg. Time</th>
                                    <th className="px-6 py-4">Efficiency</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {loading ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-10 text-center">
                                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900 mx-auto"></div>
                                        </td>
                                    </tr>
                                ) : staffData.map((staff, idx) => {
                                    const approvalRate = (staff.approved / (staff.count || 1)) * 100;
                                    const efficiency = 100 - (staff.avgTime / 2); // Dummy calculation
                                    return (
                                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold mr-3 text-xs">
                                                        {staff.name.split(' ').map((n: string) => n[0]).join('')}
                                                    </div>
                                                    <span className="font-bold text-slate-900">{staff.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font-semibold">{staff.count} Apps</td>
                                            <td className="px-6 py-4 font-bold text-emerald-600">{approvalRate.toFixed(1)}%</td>
                                            <td className="px-6 py-4 text-gray-500 font-medium">{staff.avgTime}h</td>
                                            <td className="px-6 py-4">
                                                <div className="w-24 bg-gray-100 h-2 rounded-full overflow-hidden">
                                                    <div className="bg-[#C59D4F] h-full" style={{ width: `${efficiency}%` }}></div>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Performance Summary */}
                <div className="space-y-6">
                    <div className="bg-slate-900 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <i className="ri-medal-line text-8xl text-white"></i>
                        </div>
                        <h3 className="text-lg font-bold mb-4 font-inter relative z-10">Team Summary</h3>
                        <div className="space-y-4 relative z-10">
                            <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                                <span className="text-slate-400 text-sm">Active Agents</span>
                                <span className="text-2xl font-bold">{staffData.length}</span>
                            </div>
                            <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                                <span className="text-slate-400 text-sm">Avg. Processing</span>
                                <span className="text-2xl font-bold">18.4h</span>
                            </div>
                            <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                                <span className="text-slate-400 text-sm">Escalation Rate</span>
                                <span className="text-2xl font-bold text-rose-400">2.1%</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#C59D4F] p-8 rounded-2xl shadow-xl text-white">
                        <h3 className="text-lg font-bold mb-2 font-inter">Upcoming Review</h3>
                        <p className="text-sm text-white/80 mb-6 font-medium">Monthly staff assessment and bonus distribution scheduled.</p>
                        <div className="flex items-center space-x-2 text-xs font-bold">
                            <i className="ri-calendar-event-line"></i>
                            <span>January 5th, 2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
