import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const AdminApplicationDetailSection = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Overview");

    const tabs = [
        { name: "Overview", icon: "ri-information-line" },
        { name: "Documents", icon: "ri-file-list-3-line" },
        { name: "Internal Notes", icon: "ri-chat-history-line" },
        { name: "Status History", icon: "ri-history-line" }
    ];

    const docs = [
        { name: "PAN Card", category: "Identity", date: "15 Jan 2024, 04:05 pm", status: "Verified", statusClass: "bg-green-100 text-green-700" },
        { name: "Aadhar Card", category: "Identity", date: "15 Jan 2024, 04:06 pm", status: "Verified", statusClass: "bg-green-100 text-green-700" },
        { name: "Salary Slips (3 months)", category: "Income", date: "15 Jan 2024, 04:08 pm", status: "Uploaded", statusClass: "bg-blue-100 text-blue-700" },
        { name: "Bank Statements (6 months)", category: "Financial", date: "15 Jan 2024, 04:10 pm", status: "Pending", statusClass: "bg-orange-100 text-orange-700" },
        { name: "Form 16", category: "Income", date: "15 Jan 2024, 04:12 pm", status: "Uploaded", statusClass: "bg-blue-100 text-blue-700" },
    ];

    const notes = [
        { user: "Rajesh Kumar", role: "Document Review", time: "15 Jan 2024, 07:50 pm", text: "Initial review completed. All identity documents are verified. Waiting for bank statements.", color: "bg-blue-600" },
        { user: "Sunita Devi", role: "Risk Assessment", time: "15 Jan 2024, 05:45 pm", text: "Credit score: 750. Good payment history. Employment verification pending.", color: "bg-slate-700" },
    ];

    const history = [
        { status: "Under Review", actor: "Rajesh Kumar", time: "15 Jan 2024, 04:30 pm", desc: "Assigned for review" },
        { status: "Document Verification", actor: "System", time: "15 Jan 2024, 04:15 pm", desc: "Identity documents verified automatically" },
        { status: "Submitted", actor: "System", time: "15 Jan 2024, 04:00 pm", desc: "Application received successfully" }
    ];

    const contentVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 md:p-8 space-y-6"
        >
            {/* HeaderSection */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
                <div className="items-center box-border caret-transparent flex">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/admin/applications")}
                        className="bg-white border border-gray-300 caret-transparent block text-center p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer shadow-sm"
                    >
                        <i className="ri-arrow-left-line text-gray-600 text-xl font-remixicon"></i>
                    </motion.button>
                    <div className="box-border caret-transparent ml-4">
                        <h2 className="text-slate-900 text-2xl font-bold box-border caret-transparent leading-8 font-inter">
                            Application Details
                        </h2>
                        <p className="text-gray-600 box-border caret-transparent mt-1 font-inter">
                            {id || "BF2024156"} • Priya Sharma
                        </p>
                    </div>
                </div>
                {/* StatusDropdown */}
                <div className="items-center box-border caret-transparent flex gap-3">
                    <select className="text-sm bg-white caret-transparent block leading-[normal] border border-gray-300 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-400 font-inter transition-all cursor-pointer">
                        <option value="Under Review">Under Review</option>
                        <option value="Document Pending">Document Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Disbursed">Disbursed</option>
                    </select>
                    <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                        className="text-white text-sm font-semibold bg-orange-400 caret-transparent block leading-5 text-center px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors cursor-pointer font-inter shadow-md shadow-orange-100"
                    >
                        Update Status
                    </motion.button>
                </div>
            </motion.div>

            {/* ApplicationStats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white box-border caret-transparent border border-gray-200 p-6 rounded-xl border-solid shadow-sm"
            >
                <div className="box-border caret-transparent gap-x-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6">
                    <div className="box-border caret-transparent">
                        <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1 font-inter">
                            Loan Amount
                        </div>
                        <div className="text-slate-900 text-2xl font-bold box-border caret-transparent font-inter">
                            ₹5,00,000
                        </div>
                    </div>
                    <div className="box-border caret-transparent">
                        <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1 font-inter">
                            Loan Type
                        </div>
                        <div className="text-slate-900 text-lg font-semibold box-border caret-transparent font-inter">
                            Personal Loan
                        </div>
                    </div>
                    <div className="box-border caret-transparent">
                        <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1 font-inter">
                            Current Status
                        </div>
                        <div>
                            <span className="text-yellow-800 text-xs font-bold bg-yellow-100 box-border caret-transparent inline-flex leading-none px-3 py-1.5 rounded-full uppercase tracking-wider font-inter">
                                Under Review
                            </span>
                        </div>
                    </div>
                    <div className="box-border caret-transparent">
                        <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1 font-inter">
                            Assigned To
                        </div>
                        <div className="flex items-center">
                            <div className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center mr-2">
                                <i className="ri-user-line text-slate-500 text-sm"></i>
                            </div>
                            <span className="text-slate-900 text-base font-semibold box-border caret-transparent font-inter">
                                Rajesh Kumar
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden min-h-[500px]"
            >
                <div className="border-b border-gray-200 bg-gray-50/50">
                    <nav className="flex overflow-x-auto no-scrollbar scroll-smooth">
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`flex items-center space-x-2 py-4 px-6 text-sm font-semibold transition-all duration-200 border-b-2 whitespace-nowrap cursor-pointer font-inter
                                    ${activeTab === tab.name
                                        ? "text-orange-400 border-orange-400 bg-white"
                                        : "text-gray-500 border-transparent hover:text-slate-900 hover:bg-gray-100"}`}
                            >
                                <i className={`${tab.icon} ${activeTab === tab.name ? "text-orange-400" : "text-gray-400"}`}></i>
                                <span>{tab.name}</span>
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="p-6 md:p-8">
                    <AnimatePresence mode="wait">
                        {activeTab === "Overview" && (
                            <motion.div
                                key="overview"
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="space-y-8"
                            >
                                <div className="box-border caret-transparent gap-x-12 lg:gap-x-24 grid grid-cols-1 md:grid-cols-2 gap-y-10">
                                    <div className="box-border caret-transparent">
                                        <h3 className="text-slate-900 text-lg font-semibold box-border caret-transparent leading-7 font-inter border-b border-gray-100 pb-3 mb-5">
                                            Personal Details
                                        </h3>
                                        <div className="box-border caret-transparent space-y-4">
                                            {[
                                                { label: "Full Name:", value: "Priya Sharma" },
                                                { label: "Phone:", value: "+91 98765 43210" },
                                                { label: "Email:", value: "priya.sharma@email.com" },
                                                { label: "Date of Birth:", value: "15/06/1985" },
                                                { label: "PAN Number:", value: "ABCDE1234F", className: "uppercase tracking-wider" },
                                                { label: "Marital Status:", value: "Married" }
                                            ].map((item, i) => (
                                                <div key={i} className="box-border caret-transparent flex justify-between items-center group">
                                                    <span className="text-gray-500 text-sm font-medium font-inter">{item.label}</span>
                                                    <span className={`text-slate-900 font-semibold md:text-base font-inter ${item.className || ""}`}>{item.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="box-border caret-transparent">
                                        <h3 className="text-slate-900 text-lg font-semibold box-border caret-transparent leading-7 font-inter border-b border-gray-100 pb-3 mb-5">
                                            Employment Details
                                        </h3>
                                        <div className="box-border caret-transparent space-y-4">
                                            {[
                                                { label: "Employment Type:", value: "Salaried" },
                                                { label: "Company:", value: "Tech Solutions Pvt Ltd" },
                                                { label: "Designation:", value: "Senior Software Engineer", className: "text-right" },
                                                { label: "Experience:", value: "8 years" },
                                                { label: "Monthly Income:", value: "₹85,000" },
                                                { label: "Other Income:", value: "₹15,000" }
                                            ].map((item, i) => (
                                                <div key={i} className="box-border caret-transparent flex justify-between items-center">
                                                    <span className="text-gray-500 text-sm font-medium font-inter">{item.label}</span>
                                                    <span className={`text-slate-900 font-semibold md:text-base font-inter ${item.className || ""}`}>{item.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="box-border caret-transparent">
                                        <h3 className="text-slate-900 text-lg font-semibold box-border caret-transparent leading-7 mb-3 font-inter border-b border-gray-100 pb-3">
                                            Address
                                        </h3>
                                        <p className="text-slate-700 font-medium font-inter">
                                            123, MG Road, Bangalore, Karnataka - 560001
                                        </p>
                                    </div>
                                    <div className="box-border caret-transparent">
                                        <h3 className="text-slate-900 text-lg font-semibold box-border caret-transparent leading-7 mb-3 font-inter border-b border-gray-100 pb-3">
                                            Loan Purpose
                                        </h3>
                                        <p className="text-slate-700 font-medium font-inter">
                                            Home Renovation
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                        {activeTab === "Documents" && (
                            <motion.div
                                key="documents"
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="space-y-6"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <h3 className="text-slate-900 text-lg font-semibold font-inter">Uploaded Documents</h3>
                                    <motion.button
                                        whileHover={{ y: -2 }}
                                        whileTap={{ y: 0 }}
                                        className="text-orange-400 text-sm font-semibold bg-orange-50 px-4 py-2 rounded-lg hover:bg-orange-100 transition-colors cursor-pointer border border-orange-200 w-full md:w-auto font-inter"
                                    >
                                        Request Additional Documents
                                    </motion.button>
                                </div>
                                <div className="space-y-3">
                                    {docs.map((doc, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ scale: 1.01, borderColor: "#FB923C" }}
                                            className="flex flex-col lg:flex-row lg:items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-xl transition-all gap-4 group cursor-pointer"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className="h-10 w-10 bg-slate-900 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-orange-400 transition-colors">
                                                    <i className="ri-file-text-line text-white text-xl"></i>
                                                </div>
                                                <div className="min-w-0">
                                                    <h4 className="text-slate-900 font-semibold text-sm truncate font-inter">{doc.name}</h4>
                                                    <p className="text-gray-500 text-xs mt-1 truncate font-inter">
                                                        {doc.category} • Uploaded {doc.date}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between lg:justify-end lg:space-x-6 gap-3">
                                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shrink-0 font-inter ${doc.statusClass}`}>
                                                    {doc.status}
                                                </span>
                                                <div className="flex items-center space-x-2">
                                                    <button title="View" className="p-2 text-gray-500 hover:text-slate-900 hover:bg-white rounded-md transition-all shadow-sm border border-transparent hover:border-gray-200">
                                                        <i className="ri-eye-line text-lg"></i>
                                                    </button>
                                                    <button title="Download" className="p-2 text-gray-500 hover:text-slate-900 hover:bg-white rounded-md transition-all shadow-sm border border-transparent hover:border-gray-200">
                                                        <i className="ri-download-line text-lg"></i>
                                                    </button>
                                                    {doc.status !== "Verified" && (
                                                        <button title="Verify" className="p-2 text-gray-400 hover:text-green-600 hover:bg-white rounded-md transition-all shadow-sm border border-transparent hover:border-gray-200">
                                                            <i className="ri-checkbox-circle-line text-lg"></i>
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                        {activeTab === "Internal Notes" && (
                            <motion.div
                                key="notes"
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="space-y-8"
                            >
                                <div className="space-y-4">
                                    <h3 className="text-slate-900 text-lg font-semibold font-inter">Add Internal Note</h3>
                                    <div className="space-y-3">
                                        <div className="w-full md:w-48">
                                            <select className="w-full text-sm bg-gray-50 border border-gray-300 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-400 transition-all font-inter cursor-pointer">
                                                <option>General</option>
                                                <option>Document Review</option>
                                                <option>Risk Assessment</option>
                                                <option>Financial Check</option>
                                            </select>
                                        </div>
                                        <textarea
                                            className="w-full h-32 text-sm bg-gray-50 border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-orange-400 transition-all resize-none font-inter"
                                            placeholder="Add your note here..."
                                        ></textarea>
                                        <motion.button
                                            whileHover={{ y: -2 }}
                                            whileTap={{ y: 0 }}
                                            className="text-white text-sm font-semibold bg-orange-400 px-6 py-2.5 rounded-lg hover:bg-orange-500 transition-colors shadow-sm shadow-orange-100 font-inter"
                                        >
                                            Add Note
                                        </motion.button>
                                    </div>
                                </div>

                                <div className="space-y-6 pt-6 border-t border-gray-100">
                                    {notes.map((note, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ scale: 1.01 }}
                                            className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                                                <div className="flex items-center space-x-3">
                                                    <div className={`h-8 w-8 ${note.color} rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                                                        {note.user.split(' ').map(n => n[0]).join('')}
                                                    </div>
                                                    <div className="min-w-0">
                                                        <div className="text-sm font-semibold text-slate-900 truncate font-inter">{note.user}</div>
                                                        <div className="text-gray-500 text-[11px] mt-0.5 font-inter">{note.time}</div>
                                                    </div>
                                                </div>
                                                <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-2 py-1 rounded-md self-start sm:self-center font-inter">
                                                    {note.role}
                                                </span>
                                            </div>
                                            <p className="text-slate-700 text-sm leading-relaxed font-inter">
                                                {note.text}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                        {activeTab === "Status History" && (
                            <motion.div
                                key="history"
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="space-y-6"
                            >
                                <h3 className="text-slate-900 text-lg font-semibold font-inter">Status Timeline</h3>
                                <div className="relative pl-6 space-y-10">
                                    <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-200"></div>
                                    {history.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="relative"
                                        >
                                            <div className="absolute -left-[22px] top-1.5 h-6 w-6 rounded-full bg-white border-4 border-orange-400 flex items-center justify-center z-10 shadow-sm">
                                                <i className="ri-history-line text-[10px] text-orange-400"></i>
                                            </div>
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                <div>
                                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-orange-700 font-inter">
                                                        {item.status}
                                                    </span>
                                                    <span className="ml-2 text-sm font-medium text-gray-500 font-inter">by {item.actor}</span>
                                                    <p className="text-gray-500 text-xs mt-2 font-inter">{item.desc}</p>
                                                </div>
                                                <div className="text-gray-400 text-xs font-medium shrink-0 font-inter">
                                                    {item.time}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.div>
    );
};
