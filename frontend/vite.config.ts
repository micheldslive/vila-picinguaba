import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import EnvironmentPlugin from 'vite-plugin-environment'
import pkg from 'vite-plugin-linter'
import svgr from 'vite-plugin-svgr'

const { EsLinter, linterPlugin } = pkg;

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    svgr(),
    tsConfigPaths(),
    EnvironmentPlugin('all'),
    linterPlugin({
      include: ['./src/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '.vitest//setupTests.ts',
    css: true,
  },
}))
