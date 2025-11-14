import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'my-sub-path/',
});

// base pitää olla '/~omakäyttäjä/my-sub-path/' jos julkaistu Metropolia shellissä; julkaise juureen
