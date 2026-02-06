import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "lucide-react";

export default function HistoryPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Interview History</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Past Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <p className="text-muted-foreground">You haven&apos;t completed any interviews yet.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
