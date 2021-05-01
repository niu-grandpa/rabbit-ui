import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
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
