import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// GitHub Pages 배포 시 저장소 이름에 맞게 base 경로를 설정하세요
// 예: 저장소 이름이 'OJSsite'이면 base: '/OJSsite/'
// 저장소 이름이 'username.github.io'이면 base: '/' (또는 이 줄 삭제)
export default defineConfig({
  plugins: [react()],
  base: '/OJSsite/', // 저장소 이름에 맞게 수정하세요
  server: {
    port: 5173,
  },
});

