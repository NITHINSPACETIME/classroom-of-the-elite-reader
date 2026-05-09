'use client';
import { useEffect, useRef } from 'react';

export default function AdBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only inject the script if it hasn't been injected yet to prevent duplicates
    if (!document.getElementById('adsterra-native-banner-script')) {
      const script = document.createElement('script');
      script.id = 'adsterra-native-banner-script';
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = '//pl29389304.profitablecpmratenetwork.com/cb56b50a3a091cc928c58fc0b3df3698/invoke.js';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="flex justify-center my-8 overflow-hidden rounded-lg bg-black/5 dark:bg-white/5 p-4 mx-auto max-w-3xl min-h-[90px] w-full">
      {/* The ID matches the exact container ID expected by Adsterra invoke.js */}
      <div id="container-cb56b50a3a091cc928c58fc0b3df3698" ref={containerRef}></div>
    </div>
  );
}
