import { useEffect } from 'react';
import { View } from '@tarojs/components';
import { Host } from '@/constants';

function Home() {

  useEffect(() => {
    console.log('Host', Host.APP_BASE);
  }, []);
  return <View>首页</View>;
}

export default Home;
