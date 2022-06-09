// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'contact.html'),
        blog: resolve(__dirname, 'blog.html'),
        works: resolve(__dirname, 'works.html'),
        work_detail: resolve(__dirname, 'works-detail.html'),

      }
    }
  }
})