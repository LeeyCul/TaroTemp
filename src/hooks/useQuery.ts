import { getCurrentInstance } from '@tarojs/taro';

const useQuery = () => {
  const routerParams = getCurrentInstance().router;
  return routerParams?.params;
};
export default useQuery;
