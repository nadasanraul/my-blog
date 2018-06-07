import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/Dashboard';
import AddPost from '../components/AddPost';
import EditPost from  '../components/EditPost';
import ReadPostPage from '../components/ReadPostPage';
import PublicPostsList from '../components/PublicPostsList';
import LandingPage from '../components/LandingPage';
import RegisterPage from '../components/RegisterPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LandingPage} exact={true}/>
                <PublicRoute path="/register" component={RegisterPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/create" component={AddPost} />
                <PrivateRoute path="/edit/:id" component={EditPost} />
                <Route path="/read" component={PublicPostsList} exact={true}/>
                <Route path="/read/:id" component={ReadPostPage} exact={true}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
