"use client";

import { motion } from "framer-motion";
import { Mic, Activity, Maximize2, X } from "lucide-react";

export default function InterviewDemo() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 to-slate-950 opacity-100 -z-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-600/10 blur-[130px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-4xl mx-auto"
                >
                    {/* Mock Window */}
                    <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-2xl shadow-2xl overflow-hidden">

                        {/* Window Header */}
                        <div className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-white/5">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="text-sm font-medium text-gray-400">Casca Interview Session</div>
                            <div className="w-16 flex justify-end gap-2 text-gray-400">
                                <Maximize2 className="w-4 h-4" />
                            </div>
                        </div>

                        {/* Window Content */}
                        <div className="aspect-video relative flex flex-col items-center justify-center p-8 bg-black/20">

                            {/* Central Pulsing Icon */}
                            <div className="relative">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute inset-0 w-32 h-32 bg-violet-500 rounded-full blur-xl"
                                />
                                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center relative shadow-lg shadow-violet-500/30 z-10">
                                    <Mic className="w-10 h-10 text-white" />
                                </div>
                            </div>

                            <div className="mt-8 text-center space-y-2">
                                <h3 className="text-2xl font-semibold text-white">AI Interview in Progress</h3>
                                <div className="flex items-center gap-2 text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full text-sm w-fit mx-auto">
                                    <Activity className="w-4 h-4 animate-pulse" />
                                    <span>Analyzing tone & pacing...</span>
                                </div>
                            </div>

                            {/* Floating Waves Visual */}
                            <div className="absolute bottom-0 left-0 w-full h-24 flex items-end justify-center gap-1 opacity-40">
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: ["20%", "60%", "20%"] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                        className="w-1 bg-indigo-500 rounded-t-full"
                                        style={{ height: "40%" }}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
