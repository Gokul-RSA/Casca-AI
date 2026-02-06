import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Database, LineChart, Brain } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Welcome back, John!</h1>
                <p className="text-muted-foreground">
                    Ready to practice? Select a role to start your mock interview.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* Role Cards */}
                {[
                    {
                        title: "Frontend Developer",
                        icon: <Code className="w-6 h-6 text-blue-500" />,
                        desc: "React, CSS, Performance",
                        color: "bg-blue-500/10 border-blue-200"
                    },
                    {
                        title: "Backend Developer",
                        icon: <Database className="w-6 h-6 text-green-500" />,
                        desc: "API, Databases, System Design",
                        color: "bg-green-500/10 border-green-200"
                    },
                    {
                        title: "Data Analyst",
                        icon: <LineChart className="w-6 h-6 text-orange-500" />,
                        desc: "SQL, Python, Visualization",
                        color: "bg-orange-500/10 border-orange-200"
                    },
                    {
                        title: "Machine Learning",
                        icon: <Brain className="w-6 h-6 text-purple-500" />,
                        desc: "Models, NLP, Computer Vision",
                        color: "bg-purple-500/10 border-purple-200"
                    }
                ].map((role, i) => (
                    <Card key={i} className="hover:shadow-md transition-all cursor-pointer border-2 hover:border-primary/50 group">
                        <CardHeader className="pb-4">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-2 ${role.color}`}>
                                {role.icon}
                            </div>
                            <CardTitle className="text-lg">{role.title}</CardTitle>
                            <CardDescription>{role.desc}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href={`/interview/start?role=${role.title}`}>
                                <Button className="w-full group-hover:bg-primary group-hover:text-white" variant="outline">
                                    Start Interview <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}

            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>Your last 5 interview sessions</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-lg border bg-muted/40">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-background rounded-full border">
                                            <Code className="w-4 h-4 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Frontend Developer</p>
                                            <p className="text-xs text-muted-foreground">2 days ago • Score: 85/100</p>
                                        </div>
                                    </div>
                                    <Button size="sm" variant="ghost">View</Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white border-none">
                    <CardHeader>
                        <CardTitle>Pro Tips</CardTitle>
                        <CardDescription className="text-indigo-200">How to improve your score</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-3 bg-white/10 rounded-lg">
                            <p className="font-medium text-sm">Use the STAR method</p>
                            <p className="text-xs text-indigo-200 mt-1">Situation, Task, Action, Result. Structure your behavioral answers this way.</p>
                        </div>
                        <div className="p-3 bg-white/10 rounded-lg">
                            <p className="font-medium text-sm">Be specific with technologies</p>
                            <p className="text-xs text-indigo-200 mt-1">Don&apos;t just say &quot;database&quot;, say &quot;PostgreSQL with indexing&quot;.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
