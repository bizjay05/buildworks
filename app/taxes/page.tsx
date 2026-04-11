"use client";

import React from 'react';

const TaxesPage = () => {
    return (
        <div className="flex flex-col h-[calc(100vh-120px)] animate-in fade-in duration-300">
            <div className="mb-4">
                <h2 className="text-3xl font-bold tracking-tight">세금 관리 및 계산기</h2>
                <p className="text-secondary mt-1">Inradar 통합 세금 계산 시스템과 연동됩니다.</p>
            </div>
            
            <div className="flex-1 w-full glass rounded-3xl border shadow-sm overflow-hidden relative">
                {/* 로딩 표시기 (Iframe 로드 전까지 표시됨) */}
                <div className="absolute inset-0 flex items-center justify-center -z-10 bg-secondary/5">
                    <div className="animate-spin rounded-full border-4 border-primary border-t-transparent h-12 w-12" />
                </div>
                
                <iframe 
                    src="https://inradars365.vercel.app/tax" 
                    className="w-full h-full border-0 bg-transparent z-10 relative"
                    title="Inradar 세금 계산기"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
            </div>
        </div>
    );
};

export default TaxesPage;
