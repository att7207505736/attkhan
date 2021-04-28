import { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import React from 'react';

interface IState {};
interface IProps {};

class SignOut extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
       
    };

    render(){
        return (
            <Paper square>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="Active" />
                    <Tab label="Disabled" disabled />
                    <Tab label="Active" />
                </Tabs>
            </Paper>
        );
    };
};
export default SignOut;