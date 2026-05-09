'use client';
import { useEffect, useRef } from 'react';

export default function AdBanner() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current && !iframeRef.current.getAttribute('data-loaded')) {
      const doc = iframeRef.current.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: transparent; }
              </style>
            </head>
            <body>
              <script async="async" data-cfasync="false" src="https://pl29389304.profitablecpmratenetwork.com/cb56b50a3a091cc928c58fc0b3df3698/invoke.js"></script>
              <div id="container-cb56b50a3a091cc928c58fc0b3df3698"></div>
            </body>
          </html>
        `);
        doc.close();
        iframeRef.current.setAttribute('data-loaded', 'true');
      }
    }
  }, []);

  return (
    <div className="flex justify-center my-8 overflow-hidden rounded-lg bg-black/5 dark:bg-white/5 p-4 mx-auto max-w-3xl min-h-[120px] w-full">
      <iframe 
        ref={iframeRef} 
        width="100%" 
        height="90" 
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        title="Advertisement"
      />
    </div>
  );
}
