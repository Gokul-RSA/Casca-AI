"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { User, Mail, Calendar, CreditCard, Clock, Settings, Shield, LogOut, FileText, Mic, BookOpen, Edit } from "lucide-react";

export default function ProfilePage() {
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8 animate-in fade-in duration-500">

            {/* 1. Profile Header */}
            <div className="flex flex-col md:flex-row items-center gap-6 bg-card p-8 rounded-xl border shadow-sm">
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center text-primary border-2 border-primary/20">
                    <User className="h-10 w-10" />
                </div>
                <div className="text-center md:text-left space-y-2 flex-1">
                    <h1 className="text-3xl font-bold tracking-tight">Alex Morgan</h1>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                        <span className="font-medium text-foreground bg-secondary px-3 py-0.5 rounded-full text-sm">Interviewer</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Mail className="h-3 w-3" /> alex.morgan@example.com</span>
                    </div>
                    {/* 2. Short Bio */}
                    <p className="text-sm text-muted-foreground max-w-lg">
                        Technical interviewer using AI Interview Copilot for real-time interview assistance.
                    </p>
                </div>
                <Button variant="outline" className="gap-2">
                    <Edit className="h-4 w-4" /> Edit Profile
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">

                {/* 3. Account Information */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <User className="h-4 w-4 text-primary" /> Account Details
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm">
                        <div className="flex justify-between items-center py-2 border-b border-border/50">
                            <span className="text-muted-foreground flex items-center gap-2"><Calendar className="h-4 w-4" /> Joined</span>
                            <span className="font-medium">March 15, 2024</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-border/50">
                            <span className="text-muted-foreground flex items-center gap-2"><CreditCard className="h-4 w-4" /> Plan</span>
                            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-md text-xs font-bold">PRO</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <span className="text-muted-foreground flex items-center gap-2"><Clock className="h-4 w-4" /> Last Active</span>
                            <span className="font-medium">2 hours ago</span>
                        </div>
                    </CardContent>
                </Card>

                {/* 4. Preferences */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <Settings className="h-4 w-4 text-primary" /> Preferences
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm">
                        <div className="flex justify-between items-center py-2 border-b border-border/50">
                            <span className="text-muted-foreground">Language</span>
                            <span className="font-medium">English (US)</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-border/50">
                            <span className="text-muted-foreground">Default AI Model</span>
                            <span className="font-medium">Llama 3 (Groq)</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <span className="text-muted-foreground">RAG Assistance</span>
                            <span className="text-primary font-medium flex items-center gap-1">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Enabled
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* 5. Usage Summary */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold px-1">Usage Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-primary/5 border-primary/10">
                        <CardContent className="p-6 flex flex-col items-center justify-center gap-2">
                            <div className="p-3 bg-background rounded-full shadow-sm text-primary mb-1">
                                <Mic className="h-6 w-6" />
                            </div>
                            <div className="text-3xl font-bold">24</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Interviews Conducted</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-primary/5 border-primary/10">
                        <CardContent className="p-6 flex flex-col items-center justify-center gap-2">
                            <div className="p-3 bg-background rounded-full shadow-sm text-primary mb-1">
                                <BookOpen className="h-6 w-6" />
                            </div>
                            <div className="text-3xl font-bold">12</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Practice Sessions</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-primary/5 border-primary/10">
                        <CardContent className="p-6 flex flex-col items-center justify-center gap-2">
                            <div className="p-3 bg-background rounded-full shadow-sm text-primary mb-1">
                                <FileText className="h-6 w-6" />
                            </div>
                            <div className="text-3xl font-bold">8</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Saved Transcripts</div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* 6. Saved Items */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Saved Items</CardTitle>
                        <CardDescription>Your bookmarked questions and notes.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 rounded-lg bg-muted/50 border border-border/50 text-sm flex items-start gap-3">
                            <FileText className="h-4 w-4 text-muted-foreground mt-1" />
                            <div>
                                <p className="font-medium text-foreground">Frontend System Design Note</p>
                                <p className="text-xs text-muted-foreground mt-1">Saved 2 days ago</p>
                            </div>
                        </div>
                        <div className="p-4 rounded-lg bg-muted/50 border border-border/50 text-sm flex items-start gap-3">
                            <FileText className="h-4 w-4 text-muted-foreground mt-1" />
                            <div>
                                <p className="font-medium text-foreground">React Hooks Interview Questions</p>
                                <p className="text-xs text-muted-foreground mt-1">Saved 1 week ago</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* 7. Security & Actions */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Shield className="h-4 w-4 text-primary" /> Security
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                            <div className="flex justify-between items-center py-2">
                                <span className="text-muted-foreground">Password last updated</span>
                                <span>3 months ago</span>
                            </div>
                            <div className="p-3 bg-blue-50 text-blue-800 rounded-md text-xs border border-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-900/50">
                                <span className="font-bold">Privacy Note:</span> Only interviewer audio is captured during sessions to ensure candidate privacy.
                            </div>
                        </CardContent>
                    </Card>

                    {/* 8. Actions */}
                    <Card>
                        <CardContent className="p-6 space-y-3">
                            <Button variant="outline" className="w-full justify-start gap-2">
                                <FileText className="h-4 w-4" /> Export All Transcripts
                            </Button>
                            <Button variant="destructive" className="w-full justify-start gap-2 bg-red-50 text-red-600 hover:bg-red-100 border-red-200 dark:bg-red-900/10 dark:text-red-400 dark:hover:bg-red-900/20">
                                <LogOut className="h-4 w-4" /> Log Out
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
