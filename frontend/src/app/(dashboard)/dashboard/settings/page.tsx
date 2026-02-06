import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <Card>
                <CardHeader>
                    <CardTitle>App Preferences</CardTitle>
                    <CardDescription>Manage your application settings.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">No settings available yet.</p>
                </CardContent>
            </Card>
        </div>
    );
}
