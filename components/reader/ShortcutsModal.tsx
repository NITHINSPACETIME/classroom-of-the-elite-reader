import React from 'react';
import { X, Keyboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface ShortcutsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const shortcuts = [
    { key: ['←', 'H'], description: "Previous Chapter" },
    { key: ['→', 'L'], description: "Next Chapter" },
    { key: ['M'], description: "Toggle Menu / Sidebar Chapters List" },
    { key: ['S'], description: "Toggle Settings" },
    { key: ['T'], description: "Change Theme" },
    { key: ['F'], description: "Toggle Fullscreen" },
    { key: ['C'], description: "Open Comments" },
    { key: ['+', '-'], description: "Adjust Font Size" },
    { key: ['/'], description: "Search (Open Sidebar)" },
    { key: ['Esc'], description: "Close Menus" },
    { key: ['Ctrl', '/'], description: "Keyboard Shortcuts" },
];

export function ShortcutsModal({ isOpen, onClose }: ShortcutsModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="relative w-full max-w-lg bg-[#14151b] border border-gray-800 rounded-xl shadow-2xl overflow-hidden"
                    >
                        <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-white/5">
                            <h2 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                                <Keyboard className="w-5 h-5 text-gray-400" />
                                Keyboard Shortcuts
                            </h2>
                            <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 hover:bg-white/10">
                                <X className="w-4 h-4" />
                            </Button>
                        </div>

                        <div className="p-2 grid gap-1 max-h-[70vh] overflow-y-auto">
                            {shortcuts.map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group">
                                    <span className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">
                                        {item.description}
                                    </span>
                                    <div className="flex items-center gap-1.5">
                                        {item.key.map((k, j) => (
                                            <React.Fragment key={j}>
                                                {j > 0 && (
                                                    <span className="text-xs text-gray-600 font-medium">
                                                        {item.key[0] === 'Ctrl' ? '+' : '/'}
                                                    </span>
                                                )}
                                                <kbd className="h-7 min-w-[1.75rem] px-2 flex items-center justify-center rounded bg-gray-800 border border-gray-700 text-xs font-sans font-bold text-gray-300 shadow-sm">
                                                    {k}
                                                </kbd>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-3 bg-white/5 border-t border-gray-800 text-center">
                            <p className="text-xs text-gray-500">
                                Press <kbd className="bg-gray-800 px-1 rounded text-gray-400 font-mono">Ctrl</kbd> + <kbd className="bg-gray-800 px-1 rounded text-gray-400 font-mono">/</kbd> anytime to toggle this menu.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
