import { Progress } from "@/components/ui/progress";

interface ProgressChartProps {
    current: number;
    total: number;
}

export default function ProgressChart({ current, total }: ProgressChartProps) {
    const progress = (current / total) * 100;

    return (
        <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
                <span>Question {current} of {total}</span>
                <span>{Math.round(progress)}% Completed</span>
            </div>
            <Progress value={progress === 0 ? 5 : progress} className="h-2" />
        </div>
    );
}
