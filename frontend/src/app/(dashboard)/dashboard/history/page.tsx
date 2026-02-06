"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Download, Trash2, FileText, Calendar, Clock, Filter, AlertCircle, PlayCircle, CheckCircle2 } from "lucide-react";

// Mock Data
const MOCK_SESSIONS = [
    {
        id: 1,
        title: "Frontend Developer Interview",
        type: "Live Interview",
        date: "March 15, 2024",
        time: "10:00 AM",
        duration: "45 min",
        status: "Completed",
        role: "Frontend Engineer"
    },
    {
        id: 2,
        title: "React Hooks Practice",
        type: "Practice",
        date: "March 14, 2024",
        time: "2:30 PM",
        duration: "15 min",
        status: "Completed",
        role: "React Developer"
    },
    {
        id: 3,
        title: "System Design Basics",
        type: "Practice",
        date: "March 10, 2024",
        time: "11:00 AM",
        duration: "20 min",
        status: "In Progress",
        role: "Full Stack"
    }
];

export default function HistoryPage() {
    const [filterType, setFilterType] = useState<"All" | "Live Interview" | "Practice">("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [sessions, setSessions] = useState(MOCK_SESSIONS);

    const filteredSessions = sessions.filter(session => {
        const matchesType = filterType === "All" || session.type === filterType;
        const matchesSearch = session.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesType && matchesSearch;
    });

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this session?")) {
            setSessions(prev => prev.filter(s => s.id !== id));
        }
    };

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">

            {/* 1. Page Header */}
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Interview History</h1>
                <p className="text-muted-foreground">View and manage your past interview sessions and practice runs.</p>
            </div>

            {/* 4. Filters & Search */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex gap-2 w-full md:w-auto p-1 bg-muted/50 rounded-lg">
                    {["All", "Live Interview", "Practice"].map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilterType(type as any)}
                            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${filterType === type
                                    ? "bg-background text-foreground shadow-sm"
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
                <div className="relative w-full md:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search sessions..."
                        className="pl-9 bg-background"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* 2. Session List */}
            <div className="space-y-4">
                {filteredSessions.length > 0 ? (
                    filteredSessions.map((session) => (
                        <Card key={session.id} className="hover:border-primary/50 transition-colors">
                            <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                                <div className="space-y-2 flex-1">
                                    <div className="flex items-center gap-3">
                                        <h3 className="font-semibold text-lg">{session.title}</h3>
                                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium border ${session.type === "Live Interview"
                                                ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                                                : "bg-emerald-50 text-emerald-700 border-emerald-200"
                                            }`}>
                                            {session.type}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3.5 w-3.5" />
                                            {session.date} at {session.time}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-3.5 w-3.5" />
                                            {session.duration}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            {session.status === "Completed" ? (
                                                <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                                            ) : (
                                                <PlayCircle className="h-3.5 w-3.5 text-orange-500" />
                                            )}
                                            <span className={session.status === "Completed" ? "text-green-600" : "text-orange-600"}>
                                                {session.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* 3. Session Actions */}
                                <div className="flex items-center gap-2 w-full md:w-auto">
                                    <Button variant="outline" size="sm" className="gap-2 flex-1 md:flex-none">
                                        <FileText className="h-4 w-4" /> View Match
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                                        <Download className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-destructive hover:bg-destructive/10"
                                        onClick={() => handleDelete(session.id)}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    // 5. Empty State
                    <div className="text-center py-12 border-2 border-dashed rounded-xl bg-muted/20">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-muted mb-4">
                            <FileText className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-medium">No sessions found</h3>
                        <p className="text-muted-foreground mt-1 max-w-sm mx-auto">
                            {searchQuery ? "Try adjusting your search or filters." : "Start your first interview session to see your history here."}
                        </p>
                        {!searchQuery && (
                            <Button className="mt-4 gap-2">
                                <PlayCircle className="h-4 w-4" /> Start New Session
                            </Button>
                        )}
                    </div>
                )}
            </div>

            {/* 6. Privacy Note */}
            <div className="flex items-center gap-2 justify-center text-xs text-muted-foreground py-4 opacity-70">
                <AlertCircle className="h-3 w-3" />
                <span>Only interviewer audio is captured and stored for your privacy.</span>
            </div>
        </div>
    );
}
