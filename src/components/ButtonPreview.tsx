import React, { useEffect, useRef } from 'react';
import { CursorConfig } from '../types/Button';

interface ButtonPreviewProps {
  button: CursorConfig;
}

export function ButtonPreview({ button }: ButtonPreviewProps) {
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!previewRef.current) return;

    const container = previewRef.current;
    const previewId = `preview-${button.id}`;
    container.id = previewId;
    container.innerHTML = button.html;
    container.style.overflow = 'hidden';
    
    const style = document.createElement('style');
    const js = document.createElement('script');
    style.textContent = button.css.replace(/position: fixed;/, 'position: absolute;');
    js.textContent = button.js;
    container.appendChild(style);
    container.appendChild(js);
  }, [button]);

  return (
    <div 
      ref={previewRef} 
      className="w-full h-64 flex items-center justify-center bg-black/70 rounded-lg relative overflow-hidden "
    />
  );
}
