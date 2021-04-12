import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            comps: path.resolve(__dirname, 'src/components'),
            assets: path.resolve(__dirname, 'src/assets'),
            routes: path.resolve(__dirname, 'src/routes'),
            pages: path.resolve(__dirname, 'src/pages'),
            styles: path.resolve(__dirname, 'src/styles'),
            plugin: path.resolve(__dirname, 'src/plugin'),
            rabbit: path.resolve(__dirname, '../dist')
        }
    },
    plugins: [
        vue(),
        styleImport({
            libs: [
                {
                    libraryName: 'element-plus',
                    esModule: true,
                    ensureStyleFile: true,
                    resolveStyle: (name) => {
                        return `element-plus/lib/theme-chalk/${name}.css`;
                    },
                    resolveComponent: (name) => {
                        return `element-plus/lib/${name}`;
                    }
                }
            ]
        })
    ]
});
