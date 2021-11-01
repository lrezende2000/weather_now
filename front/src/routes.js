import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthContext } from './context/AuthContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Error from './pages/Error';

function CustomRoute({ isPrivate, ...props }) {
  const { loading, authenticated } = useContext(AuthContext);

  if (loading) {
    return <h1>loading...</h1>
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />
  }

  return <Route {...props} />
}

function Routes() {
  return (
    <Switch>
      <CustomRoute isPrivate path="/" exact component={Home} />
      <CustomRoute path="/login" exact component={Login} />
      <CustomRoute path="/signup" exact component={Signup} />
      <CustomRoute path="*" component={Error} />
    </Switch>
  )
}

export default Routes;
