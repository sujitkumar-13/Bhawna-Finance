import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { API_BASE_URL } from "../../apiConfig";
import { toast } from "react-toastify";

export const AdminFinancialOverviewSection = () => {
    const [loading, setLoading] = useState(true);
    const [financials, setFinancials] = useState({
        totalDisbursed: 0,
        totalApplications: 0,
        avgLoanSize: 0,
        approvalRate: 0,
        typeDistribution: {} as any
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_BASE_URL);
                const allApps = response.data.data;

                const approvedApps = allApps.filter((a: any) => a.status === "Approved" || a.status === "Disbursed");
                const totalValue = approvedApps.reduce((acc: number, curr: any) => acc + curr.loanAmount, 0);

                // Type Distribution
                const distribution = allApps.reduce((acc: any, curr: any) => {
                    acc[curr.loanType] = (acc[curr.loanType] || 0) + 1;
                    return acc;
                }, {});

                setFinancials({
                    totalDisbursed: totalValue,
                    totalApplications: allApps.length,
                    avgLoanSize: allApps.length > 0 ? totalValue / (approvedApps.length || 1) : 0,
                    approvalRate: allApps.length > 0 ? (approvedApps.length / allApps.length) * 100 : 0,
                    typeDistribution: distribution
                });
            } catch (error) {
                console.error("Error fetching financial data:", error);
                toast.error("Failed to load financial overview");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const metrics = [
        { label: "Pipeline Value", value: `₹${new Intl.NumberFormat('en-IN').format(financials.totalDisbursed)}`, trend: "+12% vs last month", color: "text-blue-600" },
        { label: "Approval Rate", value: `${financials.approvalRate.toFixed(1)}%`, trend: "Stable", color: "text-emerald-600" },
        { label: "Average Loan", value: `₹${new Intl.NumberFormat('en-IN').format(financials.avgLoanSize)}`, trend: "-3% vs last month", color: "text-indigo-600" },
        { label: "Monthly Growth", value: "24.5%", trend: "High Growth", color: "text-[#C59D4F]" }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 md:p-8 space-y-8"
        >
            <div>
                <h2 className="text-slate-900 text-2xl font-bold font-inter">Financial Analytics</h2>
                <p className="text-gray-600 mt-1">Comprehensive overview of loan portfolio and volumes</p>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((m, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">{m.label}</div>
                            <div className={`text-3xl font-bold mb-2 font-inter ${m.color}`}>{m.value}</div>
                            <div className="text-xs font-semibold text-gray-400">{m.trend}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Distribution Chart (CSS Bars) */}
                <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-slate-900 text-lg font-bold mb-8 font-inter">Loan Distribution by Type</h3>
                    <div className="space-y-6">
                        {loading ? (
                            <div className="flex justify-center py-12"><div className="animate-spin h-8 w-8 border-b-2 border-slate-900 rounded-full"></div></div>
                        ) : Object.entries(financials.typeDistribution).map(([type, count]: [string, any], idx) => {
                            const percentage = (count / financials.totalApplications) * 100;
                            return (
                                <div key={type} className="space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="font-bold text-slate-700 capitalize">{type.replace('-', ' ')}</span>
                                        <span className="text-gray-500 font-medium">{count} Applications ({percentage.toFixed(0)}%)</span>
                                    </div>
                                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${percentage}%` }}
                                            transition={{ duration: 1, delay: idx * 0.1 }}
                                            className={`h-full rounded-full ${['bg-blue-500', 'bg-emerald-500', 'bg-[#C59D4F]', 'bg-indigo-500', 'bg-rose-500'][idx % 5]}`}
                                        ></motion.div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Quick Reports List */}
                <div className="bg-slate-900 p-8 rounded-2xl shadow-xl text-white">
                    <h3 className="text-lg font-bold mb-6 font-inter">Recent Financial Logs</h3>
                    <div className="space-y-6">
                        {[
                            { title: "Monthly Payouts", date: "24 Dec 2025", amount: "₹4.5M", type: "Disbursement" },
                            { title: "Quarterly Audit", date: "15 Dec 2025", amount: "Complete", type: "Review" },
                            { title: "Branch Refunding", date: "10 Dec 2025", amount: "₹1.2M", type: "Funding" },
                            { title: "Agent Commissions", date: "01 Dec 2025", amount: "₹850K", type: "Payout" }
                        ].map((log, idx) => (
                            <div key={idx} className="flex items-center justify-between border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                                <div>
                                    <div className="text-sm font-bold">{log.title}</div>
                                    <div className="text-[10px] text-slate-400 font-medium">{log.date} • {log.type}</div>
                                </div>
                                <div className="text-sm font-bold text-[#C59D4F]">{log.amount}</div>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </motion.div>
    );
};
