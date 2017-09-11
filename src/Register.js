import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Tabs, { Tab } from 'material-ui/Tabs';
import TextField from 'material-ui/TextField'

const style = {
    margin: 15,
}

const dateStyle = {
    width: 123,
    border: 1,
    outline: '#000',
    textAlign: 'center',
}

const dropStyle = {
    width: 370,
}

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            menuValue: 1,
        }
    }
    componentWillReceiveProps(nextProps){
        console.log("nextProps",nextProps)
    }
    handleMenuChange(value){
        this.setState({
            menuValue:value,
        })
    }
    render() {
        // console.log("props",this.props)
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <div>
                            <label>DATE OF BIRTH</label>
                        </div>
                        <TextField
                            floatingLabelText="DD"
                            style={dateStyle}
                            onChange={(event,newValue) => this.props.handleChange(event, newValue, 'day')}
                        />
                        <TextField
                            floatingLabelText="MM"
                            style={dateStyle}
                            onChange={(event,newValue) => this.props.handleChange(event, newValue, 'month')}
                        />
                        <TextField
                            floatingLabelText="YYYY"
                            style={dateStyle}
                            onChange={(event,newValue) => this.props.handleChange(event, newValue, 'year')}
                        />
                    </div>
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <div className="genderDiv">
                        <label>GENDER</label>
                        <Tabs style={style}>
                            <Tab label="MALE" />
                            <Tab label="FEMALE" />
                            <Tab label="UNSPECIFIED" />
                        </Tabs>
                    </div>
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <div className="genderDiv">
                        <label>WHERE DID YOU HEAR ABOUT IS?</label>
                        <DropDownMenu value={this.state.menuValue} style={dropStyle} autoWidth={false} onChange={(event,index,value)=>this.handleMenuChange(value)}>
                            <MenuItem value={1} primaryText="Blog" />
                            <MenuItem value={2} primaryText="TV" />
                        </DropDownMenu>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Register