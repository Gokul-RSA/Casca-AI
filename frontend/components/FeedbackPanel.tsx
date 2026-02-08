import { CheckCircle2 } from "lucide-react";

interface FeedbackPanelProps {
    feedback: {
        score: number;
        strengths: string[];
        weaknesses: string[];
        suggestion: string;
    };
}

export default function FeedbackPanel({ feedback }: FeedbackPanelProps) {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="p-4 bg-green-500/10 border border-green-200 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold text-green-800">Great Answer!</h3>
                </div>
                <p className="text-green-700 text-sm">
                    {feedback.suggestion}
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <h4 className="text-sm font-medium flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" /> Strengths
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                        {feedback.strengths.map((s, i) => (
                            <li key={i}>• {s}</li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-2">
                    <h4 className="text-sm font-medium flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500" /> Improvement Areas
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                        {feedback.weaknesses.map((s, i) => (
                            <li key={i}>• {s}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
