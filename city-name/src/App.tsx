import React,{ Component } from "react";
import { connect } from "react-redux";
import getCitys from "./Action/CityAction";

interface IState{}

interface IProps{
  my_fun:any;
  response:any;
}

class App extends Component<IProps,IState>{
  constructor(props:IProps){
    super(props);
  }
  componentDidMount(){
    this.props.my_fun();
  }
 render(){
   return(
     <React.Fragment>
       <h1>{JSON.stringify(this.props.response)}</h1>
     </React.Fragment>
   )
 } 
};
//subscription
const receive = (state:any)=>{
  return{
    response:state
  }
};
//dispatch
const send =(dispatch:any)=>{
  return{
    my_fun:()=>{dispatch(getCitys)}
  }
};
export default connect (receive,send)(App);