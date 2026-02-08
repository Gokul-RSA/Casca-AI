import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Timer, AlertCircle, ArrowRight, Send } from "lucide-react";
import { useRouter } from "next/router";
import Head from "next/head";
import InterviewCard from "@/components/InterviewCard";
import AnswerInput from "@/components/AnswerInput";
import FeedbackPanel from "@/components/FeedbackPanel";
import ProgressChart from "@/components/ProgressChart";

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

export default function InterviewSessionPage() {
    const router = useRouter();
    const { sessionId } = router.query;

    // Fallback ID if undefined during hydration
    const displayId = sessionId || "loading...";

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answer, setAnswer] = useState("");
    const [status, setStatus] = useState<"idle" | "answering" | "submitting" | "feedback">("answering");
    const [feedback, setFeedback] = useState<{ score: number; strengths: string[]; weaknesses: string[]; suggestion: string } | null>(null);

    const question = MOCK_QUESTIONS[currentQuestionIndex];

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
            router.push("/dashboard");
        }
    };

    if (!question) return <div>Loading...</div>;

    return (
        <>
            <Head>
                <title>Interview Session {displayId} - Casca AI</title>
            </Head>
            <div className="min-h-screen bg-muted/20 p-6 lg:p-12">
                <div className="max-w-4xl mx-auto space-y-6">

                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold">Frontend Developer Interview</h1>
                            <p className="text-muted-foreground">Session #{displayId}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-primary font-medium bg-primary/10 px-4 py-2 rounded-full">
                                <Timer className="w-4 h-4" />
                                <span>01:45</span>
                            </div>
                            <Button variant="outline" className="text-destructive hover:bg-destructive/10" onClick={() => router.push("/dashboard")}>End Session</Button>
                        </div>
                    </div>

                    {/* Progress */}
                    <ProgressChart current={currentQuestionIndex + 1} total={MOCK_QUESTIONS.length} />

                    <div className="grid gap-6 lg:grid-cols-3">

                        {/* Main Interaction Area */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="space-y-6">
                                <InterviewCard question={question} />

                                <Card className="shadow-lg">
                                    <CardContent className="pt-6">
                                        {status === "feedback" && feedback ? (
                                            <FeedbackPanel feedback={feedback} />
                                        ) : (
                                            <AnswerInput
                                                value={answer}
                                                onChange={setAnswer}
                                                disabled={status === "submitting"}
                                            />
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
        </>
    );
}
