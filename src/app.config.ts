import { mainPackagePages, subPackagesPages } from './router/routes';

export default defineAppConfig({
  pages: mainPackagePages,
  subpackages: subPackagesPages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
});
