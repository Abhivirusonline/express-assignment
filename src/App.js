import React,{Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import UsersList from "./components/UsersList/UsersList";
import AboutUs from "./components/About-us/About-us";
import AddUser from "./components/AddUser/AddUser";
class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      users_list:[]
    };
  }
  render() {
    return (
        <div className="App">
          <Router>
            <Header/>
            <Switch>
              <Route
                  exact path={"/"}
                  component={UsersList}
              />
              <Route
                  exact path={"/AddUser"}
                  component={AddUser}
              />
              <Route
                  exact path={"/about-us"}
                  component={AboutUs}
              />
              <Route path="*" render={() => <div>404 not found</div>} />
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
