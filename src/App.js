import React from 'react';
import './App.css';
import Home from './components/home/home.component'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { LoginAdmin } from './pages/admin/login/login-admin.component';
import {ViewPlans} from './pages/admin/plans/view-plans.component';
import { NewPlan } from './pages/admin/plans/new-plan.component';
import { createBrowserHistory } from "history";
import { EditPlan } from './pages/admin/plans/edit-plan.component';


const App = () => {
  const history = createBrowserHistory();

return  <div>
          <BrowserRouter history={history}>
            <Switch>
              <Route exact path='/admin' component={LoginAdmin}/>
              <Route exact path='/admin/plans/' component={ViewPlans}/>
              <Route exact path='/admin/plans/new' component={NewPlan}/>
              <Route exact path='/admin/plans/edit' component={EditPlan}/>
              <Route exact path='/' component={Home} />
            </Switch>
          </BrowserRouter>
        </div>

}

export default App;
