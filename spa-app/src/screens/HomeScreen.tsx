import React, { Component } from "react";
import { BrowserRouter as Router, NavLink,Route} from "react-router-dom";

import Fashion from "./child/Fashion"

interface IState{
    msg:string;
};
interface IProps{

};

class HomeScreen extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state= {
            msg: "Ecomerce Project Soon"

        };
    };
    render(){
        return(
            <React.Fragment>
                <h1 style={{color:'red'}}>{this.state.msg}</h1>
                <Router>
                    <NavLink to="/Fashion" activeStyle={{color:"royalblue"}} exact={true} strict style={{marginRight:100}}> Fashion </NavLink>
                <br></br><br></br>
                <Route path="/Fashion" component={ Fashion}exact={true} strict></Route>
                </Router>
            </React.Fragment>
        )
    }
};

export default HomeScreen;
