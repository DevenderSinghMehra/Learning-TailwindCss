// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    root: 'src',//here we have to give a folder name only as vite will only look for a folder which it can serve as root folder. 
    plugins: [tailwindcss()],
})
