import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface MarqueeTextProps {
    text: string;
    className?: string;
}

export const MarqueeText: React.FC<MarqueeTextProps> = ({ text, className }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const [shouldScroll, setShouldScroll] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined' || !containerRef.current || !textRef.current) return;

        const checkOverflow = () => {
            if (containerRef.current && textRef.current) {
                const containerWidth = containerRef.current.getBoundingClientRect().width;
                const textWidth = textRef.current.getBoundingClientRect().width;
                setShouldScroll(textWidth > containerWidth);
            }
        };

        // Run initially
        checkOverflow();

        // Use ResizeObserver to detect real-time layout changes
        const resizeObserver = new ResizeObserver(() => {
            checkOverflow();
        });

        if (containerRef.current) resizeObserver.observe(containerRef.current);
        if (textRef.current) resizeObserver.observe(textRef.current);

        // Also run a few delayed checks in case of slow font loading
        const timers = [
            setTimeout(checkOverflow, 100),
            setTimeout(checkOverflow, 500),
            setTimeout(checkOverflow, 1000)
        ];

        return () => {
            resizeObserver.disconnect();
            timers.forEach(t => clearTimeout(t));
        };
    }, [text]);

    return (
        <div 
            ref={containerRef} 
            className={cn(
                "w-full overflow-hidden whitespace-nowrap relative flex",
                !shouldScroll && "justify-center"
            )}
        >
            {shouldScroll && (
                <style dangerouslySetInnerHTML={{ __html: `
                    @keyframes marquee-scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(calc(-50% - 0.5rem)); }
                    }
                `}} />
            )}
            <div 
                className={cn(
                    "inline-flex items-center gap-4", 
                    shouldScroll ? "w-max" : "w-full justify-center"
                )}
                style={shouldScroll ? {
                    animation: 'marquee-scroll 12s linear infinite',
                    willChange: 'transform'
                } : undefined}
            >
                <span ref={textRef} className={className}>
                    {text}
                </span>
                {shouldScroll && (
                    <span className={className} aria-hidden="true">
                        {text}
                    </span>
                )}
            </div>
        </div>
    );
};
