/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME?: string;
  readonly VITE_I18N_DEBBUG?: 'true' | 'false';
  // add more env variables here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
