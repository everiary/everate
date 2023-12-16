import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({
      configFile: './uno.config.ts'
    }),
    vue(),
    /*VitePWA({
      manifest: {
        name: "everate",
        description: "A lightened browser start page.",
        theme_color: "#171717",
        icons: [{
          src: "/icon.svg",
          sizes: "any",
          type: "image/svg+xml"
        }]
      },
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /(.*?)\.(js|css|ts)/, // js /css /ts静态资源缓存
            handler: 'NetworkFirst',
            options: {
              cacheName: 'js-css-cache',
            },
          },
        ],
      },
      includeAssets: ['icon.svg'],
      devOptions: {
        enabled: true,
        type: "module"
    }
    }),*/
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
