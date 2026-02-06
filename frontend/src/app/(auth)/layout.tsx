export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left Side - Visual */}
            <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-indigo-900 to-slate-900 text-white">
                <div>
                    <h1 className="text-3xl font-bold">PrepAI</h1>
                </div>
                <div className="space-y-4">
                    <blockquote className="text-2xl font-medium leading-relaxed">
                        &quot;This platform helped me crack my Google interview. The AI feedback is scary accurate.&quot;
                    </blockquote>
                    <div>
                        <p className="font-semibold">Alex Chen</p>
                        <p className="text-indigo-300">Software Engineer @ Google</p>
                    </div>
                </div>
                <div className="text-indigo-400 text-sm">
                    © 2024 PrepAI Inc.
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex items-center justify-center p-8 bg-background">
                <div className="w-full max-w-md space-y-8">
                    {children}
                </div>
            </div>
        </div>
    )
}
