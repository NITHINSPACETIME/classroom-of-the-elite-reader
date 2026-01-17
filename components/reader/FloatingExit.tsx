"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export function FloatingExit() {
    const router = useRouter();

    return (
        <motion.div
            className="fixed bottom-8 right-8 z-50 pointer-events-auto"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="relative group">
                <Button
                    variant="outline"
                    size="icon"
                    className="h-14 w-14 rounded-full shadow-2xl bg-background/20 backdrop-blur-md border border-white/20 hover:bg-background/40 hover:border-white/40 transition-all duration-300"
                    onClick={() => router.push('/select/year-2')}
                >
                    <LogOut className="h-6 w-6 text-foreground/80 group-hover:text-foreground transition-colors" />
                    <span className="sr-only">Exit Reader</span>
                </Button>


                <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-sm border border-border text-sm font-medium text-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                    Exit to Library
                </span>
            </div>
        </motion.div>
    )
}
