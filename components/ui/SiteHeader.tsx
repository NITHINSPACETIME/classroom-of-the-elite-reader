"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { UserMenu } from "@/components/auth/UserMenu"
import { AuthModal } from "@/components/auth/AuthModal"
import { ProfileModal } from "@/components/auth/ProfileModal"
import { useState } from "react"

interface SiteHeaderProps {
    showBack?: boolean
    backLink?: string
    transparent?: boolean
    title?: string
}

export function SiteHeader({ showBack = true, backLink = "/", transparent = false, title }: SiteHeaderProps) {
    const [authModalOpen, setAuthModalOpen] = useState(false)
    const [profileModalOpen, setProfileModalOpen] = useState(false)

    return (
        <>
            <div className={`absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 pointer-events-none`}>
                <div className="pointer-events-auto">
                    {showBack && (
                        <Link href={backLink}>
                            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
                                <ArrowLeft className="w-6 h-6" />
                            </Button>
                        </Link>
                    )}
                </div>

                {title && (
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                        <h1 className="text-white font-serif text-3xl font-bold tracking-[0.3em] uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            {title}
                        </h1>
                    </div>
                )}

                <div className="pointer-events-auto">
                    <UserMenu
                        onSignIn={() => setAuthModalOpen(true)}
                        onProfile={() => setProfileModalOpen(true)}
                    />
                </div>
            </div>

            <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
            <ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
        </>
    )
}
