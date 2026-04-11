import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-md">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-primary border-t-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm font-black tracking-widest text-primary animate-pulse">
            LOADING
          </p>
          <div className="mt-1 h-1 w-24 overflow-hidden rounded-full bg-primary/10">
            <div className="h-full w-full origin-left animate-[loading_1.5s_infinite_ease-in-out] bg-primary"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
