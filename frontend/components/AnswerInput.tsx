import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic } from "lucide-react";

interface AnswerInputProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}

export default function AnswerInput({ value, onChange, disabled }: AnswerInputProps) {
    const [isRecording, setIsRecording] = useState(false);

    return (
        <div className="space-y-4">
            <Textarea
                placeholder="Type your answer here..."
                className="min-h-[200px] text-lg p-6 bg-muted/30 resize-none focus:bg-background transition-colors"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
            />
            <div className="flex justify-between items-center">
                <Button
                    variant={isRecording ? "destructive" : "secondary"}
                    onClick={() => setIsRecording(!isRecording)}
                    className="gap-2"
                    disabled={disabled}
                >
                    <Mic className={`w-4 h-4 ${isRecording ? "animate-pulse" : ""}`} />
                    {isRecording ? "Stop Recording" : "Record Answer"}
                </Button>
                <p className="text-xs text-muted-foreground">
                    {value.length} characters
                </p>
            </div>
        </div>
    );
}
