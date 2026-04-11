'use client';

import React, { useEffect, useState } from 'react';

const Honeypot: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div aria-hidden="true" style={{ position: 'absolute', top: '-9999px', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden', pointerEvents: 'none', opacity: 0, zIndex: -1 }}>
      <p>This is a honeypot area.</p>
      <a href="/api/honeypot" rel="nofollow" tabIndex={-1}>Do not click this link</a>
    </div>
  );
};

export default Honeypot;
