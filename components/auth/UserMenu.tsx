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
                    <div className="absolute right-0 mt-2 w-48 bg-[#18181b] border border-[#2a2b36] rounded-lg shadow-xl z-50 py-1">
                        <div className="px-4 py-3 border-b border-[#2a2b36]">
                            <p className="text-xs text-gray-500">Signed in as</p>
                            <p className="text-sm font-medium text-white truncate">
                                {profile?.username || user.user_metadata?.full_name || user.email}
                            </p>
                        </div>
                        <button
                            onClick={() => {
                                onProfile()
                                setShowDropdown(false)
                            }}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-[#2a2b36] hover:text-white transition-colors"
                        >
                            <UserCircle className="h-4 w-4 mr-2" />
                            Profile
                        </button>
                        <button
                            onClick={() => {
                                signOut()
                                setShowDropdown(false)
                            }}
                            className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-[#2a2b36] transition-colors"
                        >
                            <LogOut className="h-4 w-4 mr-2" />
                            Sign Out
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
