'use client';
import { useEffect } from 'react';

export default function RedirectPagesDev() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hostname === 'cote-reader.pages.dev') {
        window.location.replace(`https://cote-reader.me${window.location.pathname}${window.location.search}`);
      }
    }
  }, []);

  return null;
}
