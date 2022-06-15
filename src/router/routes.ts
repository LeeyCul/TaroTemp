import { mainPackageRoutes, subPackagesRoutes, outerRoutes } from './define';

type subPackagesRoutesType = typeof subPackagesRoutes;
type SubPackagesFormatedRoutesType = Required<
  subPackagesRoutesType[0]['pages']
>;
type subPackagesType = { root: string; pages: string[] }[];

const subPackages: subPackagesType = [];

type mainPackageRoutesKeys = keyof typeof mainPackageRoutes;
type outerRoutesKeys = keyof typeof outerRoutes;
type SubPackagesRoutesKeys = keyof SubPackagesFormatedRoutesType;

type FormatedRoutesType = typeof mainPackageRoutes &
  SubPackagesFormatedRoutesType &
  typeof outerRoutes;
/**
 * 跳转路由，保证已“/” 开头
 */
const formatedRoutes: FormatedRoutesType = {} as FormatedRoutesType;

(Object.keys(mainPackageRoutes) as mainPackageRoutesKeys[]).forEach((key) => {
  formatedRoutes[key] = `/${mainPackageRoutes[key]}`.replace(/\/\//g, '/');
});

(Object.keys(outerRoutes) as outerRoutesKeys[]).forEach((key) => {
  outerRoutes[key] = `/${outerRoutes[key]}`.replace(/\/\//g, '/');
});

subPackagesRoutes.forEach((item) => {
  subPackages.push({
    ...item,
    pages: Object.values(item.pages),
  });

  (Object.keys(item.pages) as SubPackagesRoutesKeys[]).forEach((key) => {
    formatedRoutes[key] = `/${item.root}/${item.pages[key]}`.replace(
      /\/\//g,
      '/'
    );
  });
});

/**
 * 用于注册主包路由
 */
export const mainPackagePages = Object.values(mainPackageRoutes).map(
  (path: string) => path.replace(/^\/\/?/, '')
);

/**
 * 用于注册子包路由
 */
export const subPackagesPages = subPackages;

export default formatedRoutes;
