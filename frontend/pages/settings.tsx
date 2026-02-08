import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Head from "next/head";
import { Bell, Moon, Volume2, Globe } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function SettingsPage() {
    return (
        <DashboardLayout>
            <Head>
                <title>Settings - Casca AI</title>
            </Head>
            <div className="p-6 lg:p-12">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="max-w-2xl mx-auto space-y-8"
                >
                    <motion.div variants={item} className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                        <p className="text-muted-foreground">Manage your application preferences.</p>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.div variants={item}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Appearance & Accessibility</CardTitle>
                                    <CardDescription>Customize how Casca AI looks and feels.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Moon className="w-5 h-5 text-muted-foreground" />
                                            <Label htmlFor="dark-mode" className="flex flex-col">
                                                <span>Dark Mode</span>
                                                <span className="font-normal text-xs text-muted-foreground">Switch between light and dark themes</span>
                                            </Label>
                                        </div>
                                        <Switch id="dark-mode" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Volume2 className="w-5 h-5 text-muted-foreground" />
                                            <Label htmlFor="sound" className="flex flex-col">
                                                <span>Sound Effects</span>
                                                <span className="font-normal text-xs text-muted-foreground">Play sounds for actions and notifications</span>
                                            </Label>
                                        </div>
                                        <Switch id="sound" defaultChecked />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={item}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Notifications</CardTitle>
                                    <CardDescription>Control when and how you are notified.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Bell className="w-5 h-5 text-muted-foreground" />
                                            <Label htmlFor="daily-tips" className="flex flex-col">
                                                <span>Daily Interview Tips</span>
                                                <span className="font-normal text-xs text-muted-foreground">Receive a daily coding tip or challenge</span>
                                            </Label>
                                        </div>
                                        <Switch id="daily-tips" defaultChecked />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Globe className="w-5 h-5 text-muted-foreground" />
                                            <Label htmlFor="marketing" className="flex flex-col">
                                                <span>Product Updates</span>
                                                <span className="font-normal text-xs text-muted-foreground">Stay informed about new features</span>
                                            </Label>
                                        </div>
                                        <Switch id="marketing" />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={item} className="flex justify-end gap-4">
                            <Button variant="outline">Cancel</Button>
                            <Button>Save Preferences</Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </DashboardLayout>
    );
}
