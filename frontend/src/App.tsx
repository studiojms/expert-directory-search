import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Template from './components/Template';

import './assets/styles.scss';
import MemberList from './pages/MemberList/MemberList';
import CreateMember from './pages/CreateMember/CreateMember';

function App() {
  return (
    <Router>
      <Template>
        <Switch>
          <Route path="/" exact>
            <MemberList />
          </Route>
          <Route path="/create-member" exact>
            <CreateMember />
          </Route>
        </Switch>
      </Template>
    </Router>
  );
}

export default App;
