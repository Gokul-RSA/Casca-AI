import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import { History, Calendar, Clock, BarChart, ArrowRight } from "lucide-react";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function HistoryPage() {
    return (
        <DashboardLayout>
            <Head>
                <title>Interview History - Casca AI</title>
            </Head>
            <div className="p-6 lg:p-12">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <motion.div variants={item} className="flex items-center justify-between">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tight">Interview History</h1>
                            <p className="text-muted-foreground">Review your past sessions and track your progress.</p>
                        </div>
                        <Button variant="outline">Export Data</Button>
                    </motion.div>

                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((_, i) => (
                            <motion.div key={i} variants={item}>
                                <Card className="hover:shadow-md transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 bg-primary/10 rounded-xl">
                                                    <History className="w-6 h-6 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-lg">Frontend System Design</h3>
                                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-1">
                                                        <span className="flex items-center gap-1">
                                                            <Calendar className="w-3.5 h-3.5" /> Oct 24, 2024
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Clock className="w-3.5 h-3.5" /> 45 mins
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-6">
                                                <div className="text-right hidden md:block">
                                                    <p className="text-2xl font-bold text-foreground">85%</p>
                                                    <p className="text-xs text-muted-foreground">Overall Score</p>
                                                </div>
                                                <Button size="icon" variant="ghost" asChild>
                                                    <Link href={`/interview/session-${i}`}>
                                                        <ArrowRight className="w-5 h-5" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </DashboardLayout>
    );
}
