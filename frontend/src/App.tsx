import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Template from './components/Template';

import './assets/styles.scss';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Template>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Template>
    </Router>
  );
}

export default App;
