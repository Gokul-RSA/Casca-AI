"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 opacity-90" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Ace Your Next Interview?
                </h2>
                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                    Join thousands of students who are overcoming interview anxiety and landing their dream jobs with Casca.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <Link href="/register">
                        <Button size="lg" className="h-14 px-8 text-lg bg-white text-violet-600 hover:bg-white/90 border-0 font-bold shadow-xl">
                            Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2 border-white text-white bg-transparent hover:bg-white/10 hover:text-white">
                            Contact Sales
                        </Button>
                    </Link>
                </div>

                <div className="flex justify-center gap-8 text-sm text-white/70 font-medium">
                    <span className="flex items-center gap-2">✔ Forever free for students</span>
                    <span className="flex items-center gap-2">✔ No credit card required</span>
                </div>
            </div>
        </section>
    );
}
