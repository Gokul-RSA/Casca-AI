"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Activity, Clock, Users, Trophy } from "lucide-react";

const features = [
    {
        icon: <Brain className="w-6 h-6 text-violet-400" />,
        title: "Smart LLM Analysis",
        desc: "Our AI understands context, not just keywords, for human-level feedback."
    },
    {
        icon: <Activity className="w-6 h-6 text-pink-400" />,
        title: "Emotional Intelligence",
        desc: "Get insights on your tone, confidence, and speaking pace."
    },
    {
        icon: <Zap className="w-6 h-6 text-yellow-400" />,
        title: "Real-Time Corrections",
        desc: "Receive instant suggestions on how to improve your answers."
    },
    {
        icon: <Trophy className="w-6 h-6 text-green-400" />,
        title: "Confidence Tracking",
        desc: "Visualize your improvement over time with detailed analytics."
    },
    {
        icon: <Clock className="w-6 h-6 text-blue-400" />,
        title: "Time-Based Practice",
        desc: "Simulate real interview pressure with timed questions."
    },
    {
        icon: <Users className="w-6 h-6 text-indigo-400" />,
        title: "Role-Specific Interviews",
        desc: "Tailored questions for SDE, PM, Data Science, and more."
    }
];

export default function WhyChoose() {
    return (
        <section id="features" className="py-32 bg-slate-950 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-violet-600/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/10 blur-[100px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Why Students Choose Casca
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Everything you need to ace your next interview with confidence.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-gray-400">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
