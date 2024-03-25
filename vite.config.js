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

// 引入mock
import { viteMockServe } from 'vite-plugin-mock';

export default defineConfig(({ command, mode }) => {

  // 获取配置文件参数
  // loadEnv第三个参数，用于匹配配置文件中不以 VITE_ 开头的参数
  const env = loadEnv(mode, process.cwd(), '');
  console.log('--------', env.VITE_ENV_NAME, '--------');
  
  return Object.assign(
    {
      base: env.VITE_BASE_URL,
      plugins: [
        vue(),
        viteMockServe({
          mockPath: './mock', // mock文件存放位置
          localEnabled: env.VITE_MODE_MOCK, // mock开关
          prodEnabled: false, //生产环境下为false，这样就不会被打包到生产包中
        }),
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
      },
      server: { 
        port: '3000', // 启动端口
        proxy: { // 服务器代理
          '/api': {
            target: 'http://localhost:8010',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
          },
        },
      }
    },
  );
});
