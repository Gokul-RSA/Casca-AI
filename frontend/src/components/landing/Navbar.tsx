"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { MobileSheet } from "@/components/ui/mobile-sheet";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="sticky top-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-violet-500/20">
                        C
                    </div>
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        Casca
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {["Features", "How It Works", "About"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Button asChild variant="ghost" className="text-white hover:text-white hover:bg-white/10">
                        <Link href="/login">
                            Log In
                        </Link>
                    </Button>
                    <Button asChild className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0 shadow-lg shadow-violet-500/25">
                        <Link href="/register">
                            Sign Up Free
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu Trigger */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-white hover:bg-white/10"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu className="h-6 w-6" />
                </Button>

                {/* Mobile Menu Sheet */}
                <MobileSheet
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                    side="right"
                    className="bg-slate-950 border-white/10 flex flex-col gap-8 pt-16"
                >
                    <div className="flex flex-col gap-6">
                        {["Features", "How It Works", "About"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                                className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4 mt-4 border-t border-white/10 pt-8">
                        <Button asChild variant="ghost" className="justify-start text-white hover:text-white hover:bg-white/10">
                            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                Log In
                            </Link>
                        </Button>
                        <Button asChild className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-0">
                            <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                                Sign Up Free
                            </Link>
                        </Button>
                    </div>
                </MobileSheet>
            </div>
        </motion.nav>
    );
}
