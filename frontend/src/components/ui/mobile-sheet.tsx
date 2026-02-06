"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileSheetProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    side?: "left" | "right";
    className?: string;
}

export function MobileSheet({ isOpen, onClose, children, side = "left", className }: MobileSheetProps) {
    // Prevent scrolling when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const variants = {
        closed: { x: side === "left" ? "-100%" : "100%", opacity: 0 },
        open: { x: 0, opacity: 1 },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[99] bg-black/50 backdrop-blur-sm"
                    />
                    {/* Sheet Content */}
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={variants}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className={cn(
                            "fixed top-0 bottom-0 z-[100] w-[75%] max-w-sm bg-background shadow-xl p-6 overflow-y-auto",
                            side === "left" ? "left-0 border-r" : "right-0 border-l",
                            className
                        )}
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onClose}
                            className="absolute top-4 right-4"
                        >
                            <X className="h-5 w-5" />
                        </Button>
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
