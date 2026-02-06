"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
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

                {/* Navigation */}
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

                {/* Auth Buttons */}
                <div className="flex items-center gap-4">
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
            </div>
        </motion.nav>
    );
}
