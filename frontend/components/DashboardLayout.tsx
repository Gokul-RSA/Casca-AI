import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, History, User, Settings, LogOut, Menu, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { MobileSheet } from "@/components/ui/mobile-sheet";
import { useAuth } from "@/context/AuthContext";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isAuthenticated, isLoading, logout } = useAuth();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push('/login');
        }
    }, [isLoading, isAuthenticated, router]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    if (!isAuthenticated) {
        return null; // Return nothing while redirecting
    }

    const navItems = [
        { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { label: "History", href: "/history", icon: History },
        { label: "Profile", href: "/profile", icon: User },
        { label: "Settings", href: "/settings", icon: Settings },
    ];

    const NavContent = () => (
        <nav className="space-y-2">
            {navItems.map((item) => {
                const isActive = router.pathname === item.href;
                return (
                    <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                        <Button
                            variant={isActive ? "secondary" : "ghost"}
                            className={`w-full justify-start gap-3 ${isActive ? "bg-secondary" : ""}`}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                        </Button>
                    </Link>
                );
            })}
        </nav>
    );

    return (
        <div className="min-h-screen bg-background flex flex-col md:flex-row">
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex w-64 border-r bg-card/50 backdrop-blur-xl flex-col p-6 sticky top-0 h-screen">
                <div className="flex items-center gap-3 mb-8 px-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">
                        C
                    </div>
                    <span className="font-bold text-xl">Casca</span>
                </div>

                <div className="flex-1">
                    <NavContent />
                </div>

                <div className="pt-6 border-t">
                    <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive" onClick={logout}>
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </Button>
                </div>
            </aside>

            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4 border-b bg-background sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">
                        C
                    </div>
                    <span className="font-bold text-xl">Casca</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
                    <Menu className="w-6 h-6" />
                </Button>
            </div>

            {/* Mobile Sheet */}
            <MobileSheet isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} side="left">
                <div className="flex flex-col h-full py-6">
                    <div className="flex items-center gap-3 mb-8 px-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">
                            C
                        </div>
                        <span className="font-bold text-xl">Casca</span>
                    </div>
                    <div className="flex-1">
                        <NavContent />
                    </div>
                    <div className="pt-6 border-t">
                        <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive" onClick={logout}>
                            <LogOut className="w-5 h-5" />
                            Sign Out
                        </Button>
                    </div>
                </div>
            </MobileSheet>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                {children}
            </main>
        </div>
    );
}
