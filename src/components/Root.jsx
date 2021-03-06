import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, Redirect } from 'react-router';
import App from '../containers/TimerContainer';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Redirect from="/" to="work" />
      <Route path="/(:timerType)" component={App} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default Root;
