import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// 自动导入antd组件
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// 自动导入方法
import AutoImport from 'unplugin-auto-import/vite';

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
          dirs: [
            'src/components', 'src/layout', 'src/views'
          ],
          resolvers: [
            AntDesignVueResolver({
              importStyle: false, 
            }),
          ],
        }),
        AutoImport({
          imports: [
            'vue',
            'vue-router',
            '@vueuse/core',
            {
              'vue-i18n': ['createI18n', 'useI18n']
            }
          ],
          dts: 'src/auto-import.d.ts'
        }),
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
})
