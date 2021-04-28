import { Component } from "react";
import { BrowserRouter as Router, NavLink,Route} from "react-router-dom";
// import SigninScreen from "./screen/SigninScreen";
// import RegisterScreen from "./screen/RegisterScreen";
import React from "react";
import SigninScreen from "./screen/SigninScreen";

import RegistrationScreen from "./screen/RegistrationScreen";


interface IProps{};

interface IState{};
class App extends Component<IProps,IState>{
  constructor(props:IProps){
    super(props);
  };
  render(){
    return(
      <React.Fragment>
          <Router>
            
            <br></br><br></br>
            <Route>
              <Route path="/" component= { SigninScreen} exact={true} strict></Route>
              <Route path="/register/:uemail/:password" component= {RegistrationScreen} exact={true} strict></Route>

            </Route>
          </Router>

      </React.Fragment>
    );

  }
}
 export default App;
