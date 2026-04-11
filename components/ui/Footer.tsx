'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-3 text-center">
        <div className="flex gap-4 text-xs text-muted-foreground">
          <Link href="/terms" className="hover:text-white transition-colors">이용약관</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
        </div>
        <p className="text-xs text-muted-foreground">
          Copyright © {currentYear} <span className="text-primary font-semibold">BuildingWorks</span>. All Rights Reserved.
        </p>
        <p className="text-[10px] text-gray-600 max-w-md leading-tight">
          본 사이트의 모든 콘텐츠는 저작권법의 보호를 받습니다. 무단 전재, 복사, 크롤링 및 데이터 수집은 엄격히 금지됩니다.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
