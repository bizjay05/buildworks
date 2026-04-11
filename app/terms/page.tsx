import React from 'react';

export const metadata = {
  title: '이용약관 | BuildingWorks',
};

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-300">
      <h1 className="text-3xl font-bold mb-8 text-white">이용약관</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-white border-b border-white/10 pb-2">제2조 (지식재산권 보호 및 복제 금지)</h2>
        <div className="space-y-4 text-sm leading-relaxed">
          <p>1. 회사가 제공하는 모든 콘텐츠에 대한 저작권은 회사에 귀속됩니다.</p>
          <p className="font-bold text-red-500">2. 사용자는 회사의 사전 승낙 없이 사이트 정보를 복제, 배포, 방송 또는 영리 목적으로 이용할 수 없습니다.</p>
          <p className="font-bold text-red-500">3. 자동화된 수단(크롤러, 스크래핑 툴 등)을 사용하여 정보를 수집하는 행위는 엄격히 금지됩니다.</p>
          <p>4. 위반 시 저작권법 등 관련 법령에 따라 민/형사상의 법적 조치가 취해질 수 있습니다.</p>
        </div>
      </section>
      <div className="mt-8">
        <a href="/" className="text-sm text-primary hover:underline">홈으로 돌아가기</a>
      </div>
    </div>
  );
};

export default TermsPage;
