import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Database, LineChart, Brain, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Head from "next/head"
import DashboardLayout from "@/components/DashboardLayout"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

export default function DashboardPage() {
    return (
        <DashboardLayout>
            <Head>
                <title>Dashboard - Casca AI</title>
            </Head>
            <div className="p-6 lg:p-12">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="space-y-8 max-w-6xl mx-auto"
                >
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground/90">
                            Good morning, John.
                        </h1>
                        <p className="text-lg text-muted-foreground/80 font-light">
                            What kind of role are we targeting today?
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {/* Role Cards */}
                        {[
                            {
                                title: "Frontend Engineer",
                                icon: <Code className="w-6 h-6 text-indigo-500" />,
                                desc: "React, DOM & CSS Mastery",
                                color: "bg-indigo-500/10",
                                borderColor: "hover:border-indigo-500/30"
                            },
                            {
                                title: "Backend Architect",
                                icon: <Database className="w-6 h-6 text-emerald-500" />,
                                desc: "System Design & Scalability",
                                color: "bg-emerald-500/10",
                                borderColor: "hover:border-emerald-500/30"
                            },
                            {
                                title: "Data Scientist",
                                icon: <LineChart className="w-6 h-6 text-amber-500" />,
                                desc: "Python, ISO SQL & Analytics",
                                color: "bg-amber-500/10",
                                borderColor: "hover:border-amber-500/30"
                            },
                            {
                                title: "ML Engineer",
                                icon: <Brain className="w-6 h-6 text-rose-500" />,
                                desc: "Transformers & Deep Learning",
                                color: "bg-rose-500/10",
                                borderColor: "hover:border-rose-500/30"
                            }
                        ].map((role, i) => (
                            <motion.div key={i} variants={item}>
                                <Link href={`/interview/start?role=${role.title}`} className="block h-full">
                                    <Card className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-transparent bg-card/50 backdrop-blur-sm border-2 ${role.borderColor}`}>
                                        <CardHeader className="pb-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${role.color}`}>
                                                {role.icon}
                                            </div>
                                            <CardTitle className="text-lg font-semibold">{role.title}</CardTitle>
                                            <CardDescription className="font-medium opacity-80">{role.desc}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center text-sm font-medium text-foreground/70 group-hover:text-primary transition-colors">
                                                Start Session <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <motion.div variants={item} className="md:col-span-2">
                            <Card className="h-full border-none shadow-sm bg-gradient-to-br from-card to-secondary/20">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <CardTitle>Recent Activity</CardTitle>
                                            <CardDescription>Picking up where you left off.</CardDescription>
                                        </div>
                                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">View All</Button>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {[1, 2, 3].map((_, i) => (
                                            <div key={i} className="group flex items-center justify-between p-4 rounded-xl border bg-background/50 hover:bg-background transition-colors">
                                                <div className="flex items-center gap-4">
                                                    <div className="p-2.5 bg-muted rounded-full">
                                                        <Code className="w-4 h-4 text-foreground/70" />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-sm">Frontend System Design</p>
                                                        <p className="text-xs text-muted-foreground mt-0.5">2 days ago • Mastery: 85%</p>
                                                    </div>
                                                </div>
                                                <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <ArrowRight className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={item}>
                            <Card className="h-full bg-slate-900 text-slate-100 border-none relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-10 bg-blue-500/20 blur-3xl rounded-full -mr-10 -mt-10"></div>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-yellow-400" />
                                        Coach's Note
                                    </CardTitle>
                                    <CardDescription className="text-slate-400">Personalized tip for you</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6 relative z-10">
                                    <div className="space-y-2">
                                        <p className="font-medium text-sm text-slate-200">Refine your STAR technique</p>
                                        <p className="text-xs text-slate-400 leading-relaxed">
                                            I noticed you rushed the "Result" part in your last session. Try to quantify your impact next time—numbers speak louder than words.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="font-medium text-sm text-slate-200">Topic to Review</p>
                                        <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300 border border-slate-700">
                                            React Concurrency
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </DashboardLayout>
    )
}
