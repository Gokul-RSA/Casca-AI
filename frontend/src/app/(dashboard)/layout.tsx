"use client";

import Link from "next/link";
import { useState } from "react";
import { Brain, LayoutDashboard, History, Settings, LogOut, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileSheet } from "@/components/ui/mobile-sheet";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();

    const NavContent = () => (
        <>
            <div className="flex h-14 items-center border-b px-6 lg:h-[60px]">
                <Link className="flex items-center gap-2 font-semibold" href="/" onClick={() => setIsSidebarOpen(false)}>
                    <Brain className="h-6 w-6 text-primary" />
                    <span className="">Casca AI</span>
                </Link>
            </div>
            <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4 space-y-1">
                    <Link
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${pathname === "/dashboard" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-primary hover:bg-muted"}`}
                        href="/dashboard"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <LayoutDashboard className="h-4 w-4" />
                        Dashboard
                    </Link>
                    <Link
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${pathname === "/dashboard/history" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-primary hover:bg-muted"}`}
                        href="/dashboard/history"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <History className="h-4 w-4" />
                        History
                    </Link>
                    <Link
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${pathname === "/dashboard/profile" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-primary hover:bg-muted"}`}
                        href="/dashboard/profile"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <User className="h-4 w-4" />
                        Profile
                    </Link>
                    <Link
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${pathname === "/dashboard/settings" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-primary hover:bg-muted"}`}
                        href="/dashboard/settings"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <Settings className="h-4 w-4" />
                        Settings
                    </Link>
                </nav>
            </div>
            <div className="border-t p-4">
                <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-red-500 hover:bg-red-500/10 cursor-pointer"
                    href="/api/auth/signout"
                >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                </Link>
            </div>
        </>
    );

    return (
        <div className="flex min-h-screen bg-muted/40 font-sans">
            {/* Desktop Sidebar */}
            <aside className="hidden w-64 flex-col border-r bg-background md:flex fixed h-full inset-y-0 z-50">
                <NavContent />
            </aside>

            {/* Mobile Sidebar */}
            <MobileSheet isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} side="left" className="p-0 flex flex-col">
                <NavContent />
            </MobileSheet>

            {/* Main Content */}
            <div className="flex flex-1 flex-col md:pl-64 transition-all duration-300">
                <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] justify-between sticky top-0 z-40 lg:px-6">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>

                    <div className="w-full flex-1">
                        <h2 className="font-semibold text-lg hidden md:block">Dashboard</h2>
                        <h2 className="font-semibold text-lg md:hidden">Casca AI</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="h-8 w-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-700 font-bold border border-indigo-200">
                            JD
                        </div>
                    </div>
                </header>
                <main className="flex-1 flex flex-col gap-4 p-4 lg:gap-6 lg:p-6 text-foreground">
                    {children}
                </main>
            </div>
        </div>
    );
}
