import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cat.app',
  appName: 'Capacitor-Sandbox',
  //Bien penser a build et a ensuite rajouter le /browser
  webDir: 'dist/capacitor-sandbox/browser'
};

export default config;
