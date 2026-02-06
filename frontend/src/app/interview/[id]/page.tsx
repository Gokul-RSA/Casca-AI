"use client";

import { useState, use } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Mic, Send, Timer, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

// Mock Data
const MOCK_QUESTIONS = [
    {
        id: 1,
        content: "Explain the concept of 'Event Loop' in JavaScript.",
        difficulty: "Medium",
        timeLimit: 120 // seconds
    },
    {
        id: 2,
        content: "What are the differences between SQL and NoSQL databases? When would you use one over the other?",
        difficulty: "Medium",
        timeLimit: 180
    }
];

export default function InterviewSessionPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answer, setAnswer] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const [status, setStatus] = useState<"idle" | "answering" | "submitting" | "feedback">("answering");
    const [feedback, setFeedback] = useState<{ score: number; strengths: string[]; weaknesses: string[]; suggestion: string } | null>(null);

    const question = MOCK_QUESTIONS[currentQuestionIndex];
    const progress = ((currentQuestionIndex) / MOCK_QUESTIONS.length) * 100;

    const handleSubmit = async () => {
        setStatus("submitting");
        // Simulate API call
        setTimeout(() => {
            setFeedback({
                score: 85,
                strengths: ["Correctly identified the call stack and callback queue", "Mentioned non-blocking I/O"],
                weaknesses: ["Could have explained Microtasks vs Macrotasks"],
                suggestion: "Try to include a code example in your explanation."
            });
            setStatus("feedback");
        }, 1500);
    };

    const handleNext = () => {
        if (currentQuestionIndex < MOCK_QUESTIONS.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setAnswer("");
            setFeedback(null);
            setStatus("answering");
        } else {
            // Finish interview
            alert("Interview Completed!");
        }
    };

    return (
        <div className="min-h-screen bg-muted/20 p-6 lg:p-12">
            <div className="max-w-4xl mx-auto space-y-6">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Frontend Developer Interview</h1>
                        <p className="text-muted-foreground">Session #{id}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-primary font-medium bg-primary/10 px-4 py-2 rounded-full">
                            <Timer className="w-4 h-4" />
                            <span>01:45</span>
                        </div>
                        <Button variant="outline" className="text-destructive hover:bg-destructive/10">End Session</Button>
                    </div>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                        <span>Question {currentQuestionIndex + 1} of {MOCK_QUESTIONS.length}</span>
                        <span>{Math.round(progress)}% Completed</span>
                    </div>
                    <Progress value={progress === 0 ? 5 : progress} className="h-2" />
                </div>

                <div className="grid gap-6 lg:grid-cols-3">

                    {/* Main Interaction Area */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="border-t-4 border-t-primary shadow-lg">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                            {question.difficulty} Difficulty
                                        </span>
                                        <CardTitle className="text-xl lg:text-2xl leading-relaxed">
                                            {question.content}
                                        </CardTitle>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                {status === "feedback" ? (
                                    <div className="space-y-6 animate-in fade-in duration-500">
                                        <div className="p-4 bg-green-500/10 border border-green-200 rounded-lg">
                                            <div className="flex items-center gap-3 mb-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                                <h3 className="font-semibold text-green-800">Great Answer!</h3>
                                            </div>
                                            <p className="text-green-700 text-sm">
                                                {feedback?.suggestion}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <h4 className="text-sm font-medium flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-green-500" /> Strengths
                                                </h4>
                                                <ul className="text-sm text-muted-foreground space-y-1">
                                                    {feedback?.strengths.map((s: string, i: number) => (
                                                        <li key={i}>• {s}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="text-sm font-medium flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-orange-500" /> Improvement Areas
                                                </h4>
                                                <ul className="text-sm text-muted-foreground space-y-1">
                                                    {feedback?.weaknesses.map((s: string, i: number) => (
                                                        <li key={i}>• {s}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <Textarea
                                            placeholder="Type your answer here..."
                                            className="min-h-[200px] text-lg p-6 bg-muted/30 resize-none focus:bg-background transition-colors"
                                            value={answer}
                                            onChange={(e) => setAnswer(e.target.value)}
                                            disabled={status === "submitting"}
                                        />
                                        <div className="flex justify-between items-center">
                                            <Button
                                                variant={isRecording ? "destructive" : "secondary"}
                                                onClick={() => setIsRecording(!isRecording)}
                                                className="gap-2"
                                                disabled={status === "submitting"}
                                            >
                                                <Mic className={`w-4 h-4 ${isRecording ? "animate-pulse" : ""}`} />
                                                {isRecording ? "Stop Recording" : "Record Answer"}
                                            </Button>
                                            <p className="text-xs text-muted-foreground">
                                                {answer.length} characters
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                            <CardFooter className="bg-muted/30 p-6 flex justify-end">
                                {status === "feedback" ? (
                                    <Button onClick={handleNext} className="gap-2 px-8 h-12 text-lg">
                                        Next Question <ArrowRight className="w-5 h-5" />
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={handleSubmit}
                                        disabled={!answer || status === "submitting"}
                                        className="gap-2 px-8 h-12 text-lg bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90"
                                    >
                                        {status === "submitting" ? "Analyzing..." : "Submit Answer"}
                                        {!status.startsWith("submitt") && <Send className="w-4 h-4" />}
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    </div>

                    {/* Sidebar / Stats */}
                    <div className="space-y-6">
                        {status === "feedback" && (
                            <Card className="bg-white overflow-hidden shadow-lg border-primary/20">
                                <CardHeader className="bg-primary/5 pb-2">
                                    <CardTitle className="text-center text-primary">Answer Score</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6 flex flex-col items-center justify-center">
                                    <div className="relative w-40 h-40 flex items-center justify-center">
                                        {/* Placeholder for Circular Progress Chart */}
                                        <div className="absolute inset-0 rounded-full border-8 border-muted" />
                                        <div className="absolute inset-0 rounded-full border-8 border-primary border-t-transparent animate-[spin_1s_ease-out_reverse]"
                                            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} />
                                        <div className="text-center">
                                            <span className="text-5xl font-bold text-foreground">85</span>
                                            <span className="text-sm text-muted-foreground block uppercase tracking-wide mt-1">Points</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-sm font-medium">Reference</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="text-sm text-muted-foreground bg-yellow-500/10 p-3 rounded-md border border-yellow-500/20">
                                    <p className="flex items-start gap-2">
                                        <AlertCircle className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                                        <span className="text-yellow-700">Tips: Focus on clear, concise points. Use specific terminology related to the event loop.</span>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
