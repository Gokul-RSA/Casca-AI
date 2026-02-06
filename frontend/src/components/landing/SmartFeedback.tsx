"use client";

import { motion } from "framer-motion";
import { Brain, CheckCircle, AlertTriangle, Lightbulb } from "lucide-react";

export default function SmartFeedback() {
    return (
        <section className="py-32 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

                {/* Left Side - Cards Stack */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 blur-3xl -z-10 rounded-full" />

                    <div className="space-y-6">
                        {/* Question Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                        >
                            <h4 className="text-sm font-semibold text-gray-400 mb-2">Technical Question</h4>
                            <p className="text-lg text-white">"Explain the difference between optimistic and pessimistic locking."</p>
                        </motion.div>

                        {/* Answer Analysis Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md relative transform lg:translate-x-8"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300">
                                    <Brain className="w-5 h-5" />
                                </div>
                                <h4 className="font-semibold text-indigo-100">AI Analysis</h4>
                            </div>
                            <p className="text-indigo-200/80 mb-4">
                                Your answer covers the basics well, but you missed a key use case for high-concurrency environments.
                            </p>

                            {/* Feedback Tags */}
                            <div className="flex gap-3">
                                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-200 text-xs font-medium border border-yellow-500/20">
                                    <AlertTriangle className="w-3 h-3" /> Tone: Slightly Uncertain
                                </span>
                                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-200 text-xs font-medium border border-green-500/20">
                                    <Lightbulb className="w-3 h-3" /> Technical Accuracy: 85%
                                </span>
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* Right Side - Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-semibold mb-6">
                        Real-Time Coaching
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Smart Feedback That Actually Helps You Improve.
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Ordinary tools just check for keywords. Casca understands nuance, emotional delivery,
                        and technical depth to give you actionable advice.
                    </p>

                    <div className="space-y-8">
                        {[
                            { title: "Deep Content Analysis", desc: "Understand if you truly answered the question, not just hit keywords." },
                            { title: "Emotional Intelligence", desc: "Get feedback on your confidence, pacing, and tone of voice." },
                            { title: "Instant Corrections", desc: "See exactly how to phrase a better answer in real-time." }
                        ].map((feature, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                    <CheckCircle className="w-6 h-6 text-indigo-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
