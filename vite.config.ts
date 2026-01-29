import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';


export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // 저장소 이름: portfolio
  server: {
    port: 5173,
  },
});

