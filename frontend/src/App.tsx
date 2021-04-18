import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Template from './components/Template';

import './assets/styles.scss';
import MemberList from './pages/MemberListPage/MemberListPage';
import CreateMemberPage from './pages/CreateMemberPage/CreateMemberPage';
import MemberDetailPage from './pages/MemberDetailPage/MemberDetailPage';

function App() {
  return (
    <Router>
      <Template>
        <Switch>
          <Route path="/" exact>
            <MemberList />
          </Route>
          <Route path="/create-member" exact>
            <CreateMemberPage />
          </Route>
          <Route path="/member/:id" exact>
            <MemberDetailPage />
          </Route>
        </Switch>
      </Template>
    </Router>
  );
}

export default App;
