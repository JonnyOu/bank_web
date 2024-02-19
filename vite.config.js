import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// 自动导入antd组件
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// 自动导入方法
import autoImport from 'unplugin-auto-import/vite';

// 导入eslint配置
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig(({ command, mode }) => {

  // 获取配置文件参数
  // loadEnv第三个参数，用于匹配配置文件中不以 VITE_ 开头的参数
  const env = loadEnv(mode, process.cwd(), '');
  console.log('--------', env.APP_ENV_NAME, '--------');
  
  return Object.assign(
    {
      base: env.APP_BASE_URL,
      plugins: [
        vue(),
        Components({
          // 自动导入dirs目录下的自定义vue组件，在项目中引用时不需要再使用import导入
          dirs: [
            'src/components', 'src/layout', 'src/views'
          ],
          resolvers: [
            AntDesignVueResolver({
              importStyle: false, 
            }),
          ],
        }),
        autoImport({
          // 自动导入imports目录下的插件提供的对象
          imports: [
            'vue',
            'vue-router',
            '@vueuse/core',
            'pinia',
            {
              'vue-i18n': ['createI18n', 'useI18n']
            }
          ],
          // 自动导入dirs目录下的js文件，在项目中引用时不需要再使用import导入
          dirs: [
            'src/utils',
            'src/store/**/',
            'src/store',
            'src/api',
            'src/locales',
            'src/router'
          ],
          dts: 'src/auto-import.d.ts',
          eslintrc: {
            enabled: true,
            filepath: './.eslintrc-auto-import.json',
            globalsPropValue: true
          }
        }),
        eslintPlugin({
          include: [
            'src/**/*.js', 
            'src/**/*.vue', 
            'src/*.js', 
            'src/*.vue'
          ],
          cache: false
        })
      ],
      resolve: {
        alias: {
          path: 'path-browserify',
          '@': resolve(__dirname, 'src')
        },
        extensions: ['.js', '.vue']
      }
    },
  );
});
