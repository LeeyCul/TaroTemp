import Taro from '@tarojs/taro';
import routes from './routes';

interface NavigateToParams {
  path: string;
  query?: Record<string, string | number>;
}

export const getFullUrl = (params: NavigateToParams) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const q = {
    ...(params.query || {}),
  };
  const queryString = Object.keys(q)
    .map((item) => {
      return `${item}=${encodeURIComponent(q[item] ?? '')}`;
    })
    .join('&');

  const url = `${params.path}${queryString ? `${params.path.includes('?') ? '&' : '?'}${queryString}` : ''
    }`;

  return url;
};

export const navigateTo = (params: NavigateToParams) => {
  const url = getFullUrl(params);
  Taro.navigateTo({ url });
};

export const switchTab = (params: NavigateToParams) => {
  const url = getFullUrl(params);

  return Taro.switchTab({ url });
};

export const redirectTo = (params: NavigateToParams) => {
  return Taro.redirectTo({ url: getFullUrl(params) });
};

export const reLaunch = (params: NavigateToParams) => {
  return Taro.reLaunch({ url: getFullUrl(params) });
};

interface NavigateBackParams {
  delta?: number;
}
export const navigateBack = (params?: NavigateBackParams) => {
  const historyLength = Taro.getCurrentPages().length;

  if (historyLength >= 2) Taro.navigateBack(params);
  else
    switchTab({
      path: routes.home,
    });
};
