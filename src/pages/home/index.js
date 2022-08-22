import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hot from './components/Hot';
import Search from './components/Search';
import { useHttpHook } from '@/hooks';
import './index.less';

export default function (props) {
  const [state, setState] = useState();

  const [citys, citysLoading] = useHttpHook({
    url: '/commons/citys',
  });

  const [houses] = useHttpHook({
    url: '/house/hot',
  });
  // console.log('citys', citys);
  useEffect(() => {}, []);

  return (
    <div className="home">
      {/* 登录 */}
      <Header />
      {/* 搜索 */}
      <Search citys={citys} citysLoading={citysLoading} />
      {/* 民宿 */}
      <Hot houses={houses} />
    </div>
  );
}
