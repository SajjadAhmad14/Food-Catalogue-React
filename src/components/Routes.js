import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import SignIn from './SignIn';
import SignUp from './SignUp';
import App from '../App';
import DetailPage from './DetailPage';

const Routes = () => (
  <Router>
    <div>
      <nav className="navigation">
        <Link to="/">
          <FontAwesomeIcon icon={faMobile} />
          Get the app
        </Link>
        <div className="nav-items">
          <div className="nav-item">Add Restaurant</div>
          <Link to="/signin"><div className="nav-item">Log in</div></Link>
          <Link to="/signup"><div className="nav-item">Sign Up</div></Link>
        </div>
      </nav>
    </div>

    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/DetailPage/:name" component={DetailPage} />
    </Switch>
  </Router>
);

export default Routes;
