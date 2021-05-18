
# react

[react学习demo](https://github.com/yezihaohao/react-admin)

### Suspense作用
``` javascript
import React, {Suspense} from 'react';
// 此功能与传统的数据渲染前用一个 loading 状态过度很像，只不过 React 提供了 Suspense 组件来更优雅地处理渲染前的显示问题。
import './App.scss';
import Layout from '../layout';
import { Skeleton } from "antd"
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
const Home = React.lazy(
  () => import(/* webpackChunkName: "Dashboard" */ '@/views/Home')
);
const About = React.lazy(
  () => import(/* webpackChunkName: "Dashboard" */ '@/views/About')
);
const WithSkeleton = <Skeleton active={true} />

const App: React.FC= () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          render={() => (
            <Layout>
              <Suspense fallback={WithSkeleton}>
              <Switch>
                <Route path="/" exact>
                  <Redirect to="/home" />
                </Route>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
              </Switch>
              </Suspense>
            </Layout>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;

```
- 