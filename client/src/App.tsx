import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { routes } from './routes';

const App = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route
              exact
              key={index}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;
