import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { routes } from './routes';

const App = () => {
  return (
    <Router>
      <Switch>
        <>
          <Header />
          <main>
            {routes.map((route, index) => (
              <Route
                exact
                key={index}
                path={route.path}
                component={route.component}
              />
            ))}
            <Footer />
          </main>
        </>
      </Switch>
    </Router>
  );
};

export default App;
