### 采用方案
create-next-app、antd
(1)安装
npx create-next-app --example with-ant-design myApp

### 样式加载方案
less + cssModule

### 同时使用css和sass
// next.config.js
```
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = {
  webpack(config, ...args) {
    config = withCSS().webpack(config, ...args);
    config = withSass().webpack(config, ...args);
  }
}
```

### 公共头部方案
1. 设置一个公共组件 Layout
```
import Head from 'next/head';
export default ({children}) => (
  <div>
    <Head>
      <title>公共头部</title>
    </Head>
    {children}
    <footer></footer>
  </div>
)
```

2. 使用方法
```
import Layout from '....';

export default () => (
  <Layout>
    // content
  </Layout>
)
```

### 设置icon，正在head自定义组件中添加favicon.ico
```
<link rel="icon" href="/static/favicon.ico"/>
```

### 图片懒加载(lazysizes)
在layout里面进行引用
```
import 'lazysizes';
```
### 请求跨域解决方案
用node重新起一个服务器作为中间层，通过node进行请求，得到数据后再把数据返回给客户端，参照server.js