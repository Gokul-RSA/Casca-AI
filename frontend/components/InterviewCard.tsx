import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface InterviewCardProps {
    question: {
        content: string;
        difficulty: string;
    };
}

export default function InterviewCard({ question }: InterviewCardProps) {
    return (
        <Card className="border-t-4 border-t-primary shadow-lg h-full">
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
                {/* Content can go here if needed */}
            </CardContent>
        </Card>
    );
}
