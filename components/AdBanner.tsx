'use client';
import { useEffect } from 'react';

export default function AdBanner() {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="flex justify-center my-8 overflow-hidden rounded-lg bg-black/5 dark:bg-white/5 p-4 mx-auto max-w-3xl">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '90px' }}
        data-ad-client="ca-pub-7547996225576947"
        data-ad-slot="1234567890" 
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
