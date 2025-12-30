import { defineConfig } from 'astro/config';

export default defineConfig({
  // Указываем ваш новый домен
  site: 'https://snowsolutions.github.io',
  // Если репозиторий называется snowsolutions.github.com, 
  // то GitHub обычно разворачивает его в корень.
  base: '/', 
});