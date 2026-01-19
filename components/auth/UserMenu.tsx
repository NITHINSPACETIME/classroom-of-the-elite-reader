import { useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { Button } from "@/components/ui/button"
import { LogOut, UserCircle } from "lucide-react"

interface UserMenuProps {
    onSignIn: () => void;
    onProfile: () => void;
}

export function UserMenu({ onSignIn, onProfile }: UserMenuProps) {
    const { user, profile, signOut } = useAuth()
    const [showDropdown, setShowDropdown] = useState(false)

    if (!user) {
        return (
            <Button
                variant="ghost"
                size="sm"
                className="gap-2 text-muted-foreground hover:text-primary"
                onClick={onSignIn}
            >
                <UserCircle className="h-5 w-5" />
                <span className="hidden sm:inline">Sign In</span>
            </Button>
        )
    }

    const displayName = profile?.username || user.email || "?";

    return (
        <div className="relative">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowDropdown(!showDropdown)}
                className="rounded-full bg-primary/10 text-primary hover:bg-primary/20 p-0 overflow-hidden h-9 w-9"
            >

                {profile?.avatar_url ? (
                    <img src={profile.avatar_url} alt={displayName} className="h-full w-full object-cover" />
                ) : (
                    <span className="font-bold text-sm">
                        {displayName.substring(0, 2).toUpperCase()}
                    </span>
                )}
            </Button>


            {showDropdown && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowDropdown(false)}
                    />
                    <div className="absolute right-0 mt-1 w-56 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden ring-1 ring-black/50 origin-top-right transition-all">
                        <div className="px-5 py-4 border-b border-white/5 bg-white/5">
                            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Signed in as</p>
                            <p className="text-sm font-medium text-white truncate font-serif tracking-wide text-shadow-sm">
                                {profile?.username || user.user_metadata?.full_name || user.email}
                            </p>
                        </div>
                        <div className="p-1.5 flex flex-col gap-0.5">
                            <button
                                onClick={() => {
                                    onProfile()
                                    setShowDropdown(false)
                                }}
                                className="flex items-center w-full px-3 py-2.5 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded-lg transition-all active:scale-95 group font-medium"
                            >
                                <UserCircle className="h-4 w-4 mr-3 text-gray-500 group-hover:text-blue-400 transition-colors" />
                                Profile
                            </button>
                            <button
                                onClick={() => {
                                    signOut()
                                    setShowDropdown(false)
                                }}
                                className="flex items-center w-full px-3 py-2.5 text-sm text-gray-300 hover:bg-red-500/10 hover:text-red-400 rounded-lg transition-all active:scale-95 group font-medium"
                            >
                                <LogOut className="h-4 w-4 mr-3 text-gray-500 group-hover:text-red-400 transition-colors" />
                                Sign Out
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
