import React, { Component } from "react";

interface IState{
    msg:string;
};
interface IProps{

};

class Fashion extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state= {
            msg: "Fashion Start hear"

        };
    };
    render(){
        return(
            <React.Fragment>
                <h1 style={{color:'red'}}>{this.state.msg}</h1>
            </React.Fragment>
        )
    }
};

export default Fashion;
