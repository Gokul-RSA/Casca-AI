"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-violet-600/20 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-10 -rotate-2 hover:rotate-0 transition-transform cursor-default"
                >
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-200">
                        For students who hate awkward silences
                    </span>
                </motion.div>

                {/* Headline */}
                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative mb-8"
                >
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-fuchsia-500 to-white">
                            Casca.
                        </span>
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                        Stop Sweating <br />
                        <span className="relative inline-block mt-2">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-200 to-indigo-200">
                                Technical Interviews.
                            </span>
                            {/* Messy Underline */}
                            <svg className="absolute w-full h-3 -bottom-2 left-0 text-indigo-500 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                            </svg>
                        </span>
                    </h2>
                </motion.div>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Casca isn't just another question bank. It's an AI that listens to your voice,
                    catches your hesitation, and tells you exactly how to sound like a Senior Dev.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
                >
                    <Link href="/dashboard">
                        <Button size="lg" className="h-16 px-10 text-lg rounded-2xl bg-white text-violet-950 hover:bg-gray-100 hover:scale-105 border-0 shadow-2xl shadow-indigo-500/20 transition-all font-bold">
                            Roast My Resume <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Link href="#how-it-works">
                        <Button size="lg" variant="ghost" className="h-16 px-8 text-lg rounded-2xl text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                            See how it works
                        </Button>
                    </Link>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex justify-center gap-8 text-sm text-gray-500"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        No credit card required
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        Free for students
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
