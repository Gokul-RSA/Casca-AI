"use client";

import { motion } from "framer-motion";
import { UserPlus, PlayCircle, TrendingUp } from "lucide-react";

const steps = [
    {
        icon: <UserPlus className="w-8 h-8 text-white" />,
        number: "01",
        title: "Pick Your Poison",
        desc: "Backend? Frontend? PM? Tell us what role you're gunning for.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: <PlayCircle className="w-8 h-8 text-white" />,
        number: "02",
        title: "Face the Music",
        desc: "Answer tough technical questions. No judgment, just practice.",
        color: "from-violet-500 to-purple-500"
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-white" />,
        number: "03",
        title: "Get Good, Fast",
        desc: "Find out exactly where you messed up and how to fix it before the real thing.",
        color: "from-pink-500 to-rose-500"
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-32 bg-gradient-to-b from-slate-950 to-indigo-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        How It Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400"
                    >
                        Get started in just three simple steps
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative"
                        >
                            {/* Connector Line */}
                            {idx !== steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent z-0" />
                            )}

                            <div className="relative z-10 flex flex-col items-center text-center group">
                                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300 -rotate-3 group-hover:rotate-0`}>
                                    {step.icon}
                                </div>
                                <div className="mb-4 inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-gray-400">
                                    Step {step.number}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
