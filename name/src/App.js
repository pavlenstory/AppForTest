import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "./compenents/Main/Main";
import Header from "./compenents/Header/Header";
import EmployeesContainer from "./compenents/Employees/EmployeesContainer";

function App() {
  return (
      <div className={"AppCentralContent"}>
          <Header/>
        <Switch>
          <Route exact path="/" render={() => <Redirect to={"/main"}/>}/>
          <Route path="/main" component={Main}/>
          <Route path="/employees" component={EmployeesContainer}/>

          <Route path="*" render={()=><div>404 NOT FOUND</div>}/>
        </Switch>
      </div>
  );
}

export default App;
