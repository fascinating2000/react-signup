import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'

class Login extends Component {
    constructor(props){
        super(props)
        let localloginComponent=[]
        localloginComponent.push(
            <MuiThemeProvider>
                <div>
                    <TextField
                        type="email"
                        hintText="ENTER YOUR EMAIL"
                        floatingLabelText="EMAIL"
                        onChange={(event,newValue) => this.handleChange(event, newValue, 'email')}
                    />
                    <br/>
                    <TextField
                        type="password"
                        hintText="ENTER YOUR PASSWORD"
                        floatingLabelText="PASSWORD"
                        onChange={(event,newValue) => this.handleChange(event, newValue, 'pass')}
                    />
                    <br/>
                    <TextField
                        type="password"
                        hintText="ENTER YOUR PASSWORD"
                        floatingLabelText="CONFIRM PASSWORD"
                        onChange={(event,newValue) => this.handleChange(event, newValue, 'cpass')}
                    />
                    <br/>
                </div>
            </MuiThemeProvider>
        )
        this.state={
            loginComponent:localloginComponent,
        }
    }
    componentWillMount(){
        this.setState({menuValue:1})
    }
    handleChange(event, value, type){
        this.props.handleChange(event, value, type)
    }

    render() {
        return (
        <div>
            {this.state.loginComponent}
        </div>
        )
    }
}

export default Login