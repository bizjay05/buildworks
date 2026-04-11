'use client';

import React, { useEffect } from 'react';

/**
 * SecurityShield 컴포넌트
 * 클라이언트 사이드에서 마우스 우클릭, 드래그, 개발자 도구 진입 등을 강력하게 제한합니다.
 */
const SecurityShield: React.FC = () => {
  useEffect(() => {
    // 1. 마우스 우클릭 및 드래그/선택 차단
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleSelectStart = (e: Event) => e.preventDefault();
    const handleDragStart = (e: DragEvent) => e.preventDefault();
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      alert('본 사이트의 콘텐츠는 무단 복제가 금지되어 있습니다.');
    };

    // 2. 단축키 차단 (F12, Ctrl+Shift+I, Ctrl+U 등)
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12 차단
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      // Ctrl + Shift + I, J, C 차단
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
        e.preventDefault();
        return false;
      }
      // Ctrl + U (소스 보기) 차단
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }
      // Ctrl + S (저장) 차단
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
      }
    };

    // 3. 개발자 도구 실시간 감시 (최적화된 방식)
    const detectDevTools = () => {
      // 대중적인 감지 방식: 창의 크기 변화나 개발자 도구 특유의 동작을 가볍게 체크
      const threshold = 160;
      const isWindowSizeDetected = window.outerWidth - window.innerWidth > threshold || 
                                   window.outerHeight - window.innerHeight > threshold;
      
      if (isWindowSizeDetected) {
        // 감지 시 동작 (필요 시 주석 해제)
        // console.warn('DevTools may be open');
      }
    };

    // 주기를 2초에서 5초로 늘려 부하 감소
    const interval = setInterval(detectDevTools, 5000);

    // 이벤트 리스너 등록
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('keydown', handleKeyDown);

    // CSS를 통한 선택 방지 보조
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.userSelect = 'auto';
      document.body.style.webkitUserSelect = 'auto';
      clearInterval(interval);
    };
  }, []);

  return null; // 화면에 렌더링되지 않음
};

export default SecurityShield;
