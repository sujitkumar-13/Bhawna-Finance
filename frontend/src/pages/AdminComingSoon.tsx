import { useState } from "react";
import { AdminSidebar } from "../components/adminSections/AdminSidebar";
import { AdminMainContent } from "../components/adminSections/AdminMainContent";
import { ComingSoonSection } from "../components/adminSections/ComingSoonSection";

interface AdminComingSoonProps {
    title: string;
    icon?: string;
}

export const AdminComingSoon = ({ title, icon }: AdminComingSoonProps) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="box-border caret-transparent bg-gray-50 min-h-screen">
            <AdminSidebar
                isCollapsed={isSidebarCollapsed}
                isMobileOpen={isMobileMenuOpen}
                onCloseMobile={() => setIsMobileMenuOpen(false)}
            />
            <AdminMainContent
                isCollapsed={isSidebarCollapsed}
                onToggleSidebar={toggleSidebar}
                onToggleMobile={toggleMobileMenu}
            >
                <ComingSoonSection title={title} icon={icon} />
            </AdminMainContent>
        </div>
    );
};
