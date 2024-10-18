import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts(),
        viteStaticCopy({
            targets: [{ src: 'src/index.css', dest: '' }],
        }),
        tsconfigPaths(),
    ],
    build: {
        outDir: 'dist',
        lib: {
            entry: resolve(__dirname, 'src/components/index.ts'),
            fileName: (format) => `index.${format}.js`,
            name: 'hena-ui',
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
})
