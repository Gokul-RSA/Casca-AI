import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Head from "next/head";
import { User, Mail, Shield, Smartphone } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

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

export default function ProfilePage() {
    const { logout } = useAuth();

    return (
        <DashboardLayout>
            <Head>
                <title>Profile - Casca AI</title>
            </Head>
            <div className="p-6 lg:p-12">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <motion.div variants={item} className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">Profile Settings</h1>
                        <p className="text-muted-foreground">Manage your account information and preferences.</p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-[250px_1fr]">
                        <motion.nav variants={item} className="flex flex-col space-y-1">
                            {["General", "Security", "Billing", "Notifications"].map((navItem) => (
                                <Button
                                    key={navItem}
                                    variant="ghost"
                                    className={`justify-start ${navItem === "General" ? "bg-muted hover:bg-muted" : "hover:bg-transparent hover:underline"}`}
                                >
                                    {navItem}
                                </Button>
                            ))}
                        </motion.nav>

                        <div className="space-y-6">
                            <motion.div variants={item}>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Personal Information</CardTitle>
                                        <CardDescription>Update your personal details here.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label>First Name</Label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                    <Input className="pl-9" defaultValue="John" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Last Name</Label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                    <Input className="pl-9" defaultValue="Doe" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Email</Label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                <Input className="pl-9" defaultValue="john.doe@example.com" type="email" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Phone</Label>
                                            <div className="relative">
                                                <Smartphone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                <Input className="pl-9" defaultValue="+1 (555) 000-0000" />
                                            </div>
                                        </div>
                                        <div className="pt-4">
                                            <Button>Save Changes</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div variants={item}>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Security</CardTitle>
                                        <CardDescription>Manage your password and security questions.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-2">
                                            <Label>Current Password</Label>
                                            <div className="relative">
                                                <Shield className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                <Input className="pl-9" type="password" />
                                            </div>
                                        </div>
                                        <div className="pt-4">
                                            <Button variant="outline">Update Password</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div variants={item} className="flex justify-center pt-6">
                                <Button
                                    variant="destructive"
                                    size="lg"
                                    className="w-full md:w-auto"
                                    onClick={logout}
                                >
                                    Sign Out
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </DashboardLayout>
    );
}
