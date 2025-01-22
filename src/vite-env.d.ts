/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_NEWS_BASE_API_URL: string;
  readonly VITE_NEWS_API_KEY: string;
  // Добавляйте другие переменные окружения, если они есть
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
