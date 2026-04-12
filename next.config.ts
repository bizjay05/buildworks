import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      try {
        const WebpackObfuscator = require('webpack-obfuscator');
        config.plugins.push(
          new WebpackObfuscator({
            rotateStringArray: true,
            stringArray: true,
            stringArrayThreshold: 0.5, // 문자열 암호화 비중 조절 (0.75 -> 0.5)
            unicodeEscapeSequence: false, // 유니코드 변환 비활성화 (번들 크기 감소)
            compact: true,
            controlFlowFlattening: false, // 성능을 위해 제어 흐름 왜곡 비활성화 (속도 대폭 향상)
            deadCodeInjection: false, // 죽은 코드 삽입 비활성화 (번들 크기 감소)
            debugProtection: false,       // ✅ 페이지 전환 블로킹 제거
            debugProtectionInterval: 0,   // ✅ 주기적 브라우저 freeze 제거
            disableConsoleOutput: true,
            selfDefending: false,         // ✅ 런타임 자체검증 루프 제거
          }, [])
        );
      } catch (e) {
        console.warn('webpack-obfuscator not found. Skipping obfuscation.');
      }
    }
    return config;
  },
};

export default nextConfig;
