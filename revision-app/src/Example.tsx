import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import React, { Component } from "react";

interface IState{
    key1:string;
    key2:number;
    key3:boolean;
    key4:any;
    key5:any[];
};

interface IProps{};

class Example extends Component <IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state={
            key1:"Hello1",
            key2:100,
            key3:true,
            key4:{"sub_1":"ReactJS","sub_2":"nodejs","sub_3":"mongodb"},
            key5:[
            {"name":"shirt","brand":"Nike","price":100,"qty":10,"rating":4},
            {"name":"Shirt","brand":"reebok","price":100,"qty":10,"rating":4},
            {"name":"shirt","brand":"addidas","price":100,"qty":10,"rating":4},
            {"name":"shirt","brand":"puma","price":100,"qty":10,"rating":4},
            {"name":"pant","brand":"polo","price":100,"qty":10,"rating":4},
            {"name":"pant","brand":"Nike","price":100,"qty":10,"rating":4} 
        ]
        };

    };
    render(){
        return(
            <React.Fragment>
                <Container fixed>
                    <TableContainer component={Paper}>
                        <Table style={{width:650}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>SNO</TableCell>
                                    <TableCell>NAME</TableCell>
                                    <TableCell>BRAND</TableCell>
                                    <TableCell>PRICE</TableCell>
                                    <TableCell>QTY</TableCell>
                                    <TableCell>RATING</TableCell>
                                </TableRow>
                            </TableHead>
                            {this.state.key5.map((element,index)=>(
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>{index+1}</TableCell>
                                                <TableCell>{element.name}</TableCell>
                                                <TableCell>{element.brand}</TableCell>
                                                <TableCell>{element.price}</TableCell>
                                                <TableCell>{element.qty}</TableCell>
                                                <TableCell>{element.rating}</TableCell>
                                                    
                                            </TableRow>
                                        </TableBody>
                            ))}
                            </Table>
                        
                    </TableContainer>
                    <Typography variant="h4" color="primary">
                        {this.state.key4.sub_1 } {this.state.key4.sub_2} {this.state.key4.sub_3}
                    </Typography>
                    <Typography variant="h3" color="secondary"> 
                        {JSON.stringify(this.state.key3)}
                    </Typography>
                    <Typography variant="h2" color="primary">
                        {this.state.key2}
                    </Typography>
                <Typography variant="h1" color="secondary">
                    {this.state.key1}
                </Typography>
               </Container>
                
            </React.Fragment>
                
            
        )
    };
    
};
export default Example;