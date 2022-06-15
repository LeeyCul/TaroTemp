import { defineConfig } from 'api-swagger';

export default defineConfig({
  serverType: 'swagger',
  serverUrl: 'http://106.54.174.197:9999/configure/v2/api-docs',
  topImportPkgTemplate: () => {
    return 'import request from \'@/utils/request\'; import { Host }from \'@/constants/host\'';
  },
  outputFilePath: 'src/api',
  projects: {
    baseURL: '[code]:Host.APP_BASE',
  },
});
