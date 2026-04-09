"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WarningModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("bw_dev_notice_v1");
    if (!dismissed) {
      setIsOpen(true);
    } else if (!isNaN(Number(dismissed))) {
      if (Date.now() > Number(dismissed)) {
        localStorage.removeItem("bw_dev_notice_v1");
        setIsOpen(true);
      }
    }
  }, []);

  const handleClose = () => {
    if (dontShowAgain) {
      const expiry = Date.now() + 7 * 24 * 60 * 60 * 1000;
      localStorage.setItem("bw_dev_notice_v1", expiry.toString());
    }
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-hidden pointer-events-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-auto"
            onClick={handleClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative w-full max-w-lg glass rounded-3xl border border-border shadow-2xl overflow-hidden pointer-events-auto bg-card"
          >
            {/* Status bar */}
            <div className="bg-primary/10 px-6 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-warning animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Development Phase</span>
              </div>
              <span className="text-[10px] font-mono text-secondary">v0.1.0-alpha</span>
            </div>

            <div className="p-8 md:p-10">
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                    <path d="M12 9v4" />
                    <path d="M12 17h.01" />
                  </svg>
                </div>
              </div>

              {/* Text */}
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  서비스 이용 안내
                </h2>
                <p className="text-secondary leading-relaxed">
                  본 서비스는 현재 <span className="text-primary font-semibold">초기 개발 중</span>인 프로젝트입니다.
                </p>
                <div className="p-4 rounded-2xl bg-warning/5 border border-warning/20">
                  <p className="text-sm text-secondary leading-relaxed">
                    현재 확인하시는 데이터는 시스템 테스트를 위한 <span className="text-primary font-medium">가짜 데이터(Mock Data)</span>이며, 실제 정보가 아닙니다. 이용에 참고해 주시기 바랍니다.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-10 flex flex-col items-center gap-6">
                <button
                  onClick={handleClose}
                  className="w-full h-14 rounded-xl bg-primary text-white font-bold transition-all hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
                >
                  확인했습니다
                </button>

                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative flex h-4 w-4 items-center justify-center rounded border border-border group-hover:border-primary/50 transition-colors">
                    <input
                      type="checkbox"
                      className="peer absolute inset-0 opacity-0 cursor-pointer"
                      checked={dontShowAgain}
                      onChange={(e) => setDontShowAgain(e.target.checked)}
                    />
                    <div className="hidden peer-checked:block text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-xs text-secondary group-hover:text-foreground transition-colors select-none">
                    7일 동안 다시 보지 않기
                  </span>
                </label>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
