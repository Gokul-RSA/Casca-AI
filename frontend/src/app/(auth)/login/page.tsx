import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function LoginPage() {
    return (
        <div className="space-y-6">
            <div className="space-y-2 text-center lg:text-left">
                <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
                <p className="text-muted-foreground">
                    Enter your email to sign in to your account
                </p>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="name@example.com" type="email" required />
                </div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link href="#" className="text-sm text-primary hover:underline">Forgot password?</Link>
                    </div>
                    <Input id="password" type="password" required />
                </div>
                <Button className="w-full h-11" variant="default">
                    Sign In
                </Button>
            </div>
            <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-primary font-semibold hover:underline">
                    Sign up
                </Link>
            </div>
        </div>
    )
}
