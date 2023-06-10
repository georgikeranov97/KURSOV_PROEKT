import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Users from './components/Users';
import "antd/dist/antd.css";
import '../src/styles/common.css'
import NewUser from './components/NewUser';
import NotFoundComponent from './components/NotFound';

function Application() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path='/'>
              <Redirect to="/users" />
            </Route>
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/add" component={NewUser} />
            <Route path="*" exact component={NotFoundComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default Application;
