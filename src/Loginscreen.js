import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import LinearProgress from 'material-ui/LinearProgress'
import FloatButton from 'material-ui/FlatButton'
import Login from './Login'
import Register from './Register'

const linearStyle = {
    marginBottom: 50,
}

const nextStyle = {
    float: 'right',
}

const backStyle = {
    float: 'left',
}

class Loginscreen extends Component {
    constructor(props){
        super(props)
        let loginTitle=[]
        loginTitle.push(
            <MuiThemeProvider>
                <div className="titleDiv">
                    <label className="titleLbl">Signup</label>
                </div>
            </MuiThemeProvider>
        )
        let loginStatus=[]
        loginStatus.push(
            <div>
                <MuiThemeProvider>
                    <div>
                        <LinearProgress style={linearStyle} max={3} min={0} value={1} mode={"determinate"}/>
                    </div>
                </MuiThemeProvider>
            </div>
        )
        let loginButtons=[]
        loginButtons.push(
            <div>
                <MuiThemeProvider>
                    <div>
                        <FloatButton className="nextBtn" label={"Next"} style={nextStyle} onClick={(event) => this.handleClick(event,'next')} />
                    </div>
                </MuiThemeProvider>
            </div>
        )
        this.state={
            email:'',
            password:'',
            cPassword:'',
            day: '',
            month: '',
            year: '',
            loginTitle: loginTitle,
            loginStatus: loginStatus,
            loginScreen:[],
            loginButtons:loginButtons,
            loginStep:1
        }

        this.handleValueChange = this.handleValueChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.checkValidation = this.checkValidation.bind(this)
    }
    componentWillMount(){
        let loginScreen=[]
        loginScreen.push(<Login handleChange={this.handleValueChange} parentContext={this} appContext={this.props.appContext}/>)
        this.setState({
            loginScreen:loginScreen,
        })
    }
    checkValidation(step) {
        if (step === 1) {
            const { email, password, cPassword } = this.state
            return !(email === '' || password === '' || cPassword === '' || password !== cPassword)
        }
        else if (step === 2) {
            const { day, month, year } = this.state
            return !(day === '' || month === '' || year === '')
        }
    }
    handleValueChange(event, value, type) {
        if (type === 'email') {
            this.setState({
                email: value,
            })
        }
        else if (type === 'pass') {
            this.setState({
                password: value,
            })
        }
        else if (type === 'cpass') {
            this.setState({
                cPassword: value,
            })
        }
        else if (type === 'day') {
            this.setState({
                day: value,
            })
        }
        else if (type === 'month') {
            this.setState({
                month: value,
            })
        }
        else if (type === 'year') {
            this.setState({
                year: value,
            })
        }
    }
    handleClick(event,value){
        let loginStep = this.state.loginStep
        let loginTitle=[]
        let loginStatus=[]
        let loginButtons=[]
        let loginScreen=[]
        if (value === 'next') {
            loginStep ++

            if (loginStep === 3) {
                if (!this.checkValidation(2)) {
                    return
                }
                loginTitle.push(
                    <MuiThemeProvider>
                        <div className="titleDiv">
                            <label className="titleLbl">Thank You!</label>
                        </div>
                    </MuiThemeProvider>
                )
                loginScreen.push(
                    <MuiThemeProvider>
                        <RaisedButton label="Go to Dashboard" primary={true} onClick={(event) => this.handleClick(event,'dashboard')} />
                    </MuiThemeProvider>
                )
            }
            else {
                if (!this.checkValidation(1)) {
                    return
                }
                loginTitle.push(
                    <MuiThemeProvider>
                        <div className="titleDiv">
                            <label className="titleLbl">Signup</label>
                        </div>
                    </MuiThemeProvider>
                )
                loginButtons.push(
                    <div>
                        <MuiThemeProvider>
                            <div>
                                <FloatButton className="backBtn" label={"Back"} style={backStyle} onClick={(event) => this.handleClick(event,'back')} />
                                <FloatButton className="nextBtn" label={"Next"} style={nextStyle} onClick={(event) => this.handleClick(event,'next')} />
                            </div>
                        </MuiThemeProvider>
                    </div>
                )
                loginScreen.push(
                    <Register handleChange={this.handleValueChange} parentContext={this} appContext={this.props.appContext}/>
                )
            }
        }
        else if (value === 'back') {

            loginStep --
            loginTitle.push(
                <MuiThemeProvider>
                    <div className="titleDiv">
                        <label className="titleLbl">Signup</label>
                    </div>
                </MuiThemeProvider>
            )
            loginButtons.push(
                <div>
                    <MuiThemeProvider>
                        <div>
                            <FloatButton  className="nextBtn" label={"Next"} style={nextStyle} onClick={(event) => this.handleClick(event,'next')} />
                        </div>
                    </MuiThemeProvider>
                </div>
            )
            loginScreen.push(
                <Login handleChange={this.handleValueChange} parentContext={this} appContext={this.props.appContext}/>
            )
        }
        else {
            loginStep = 1

            loginTitle.push(
                <MuiThemeProvider>
                    <div className="titleDiv">
                        <label className="titleLbl">Signup</label>
                    </div>
                </MuiThemeProvider>
            )
            loginButtons.push(
                <div>
                    <MuiThemeProvider>
                        <div>
                            <FloatButton  className="nextBtn" label={"Next"} style={nextStyle} onClick={(event) => this.handleClick(event,'next')} />
                        </div>
                    </MuiThemeProvider>
                </div>
            )
            loginScreen.push(
                <Login handleChange={this.handleValueChange} parentContext={this} appContext={this.props.appContext}/>
            )
        }

        loginStatus.push(
            <div>
                <MuiThemeProvider>
                    <div>
                        <LinearProgress style={linearStyle} max={3} min={0} value={loginStep} mode={"determinate"}/>
                    </div>
                </MuiThemeProvider>
            </div>
        )

        this.setState({
            loginTitle: loginTitle,
            loginStatus: loginStatus,
            loginScreen: loginScreen,
            loginButtons: loginButtons,
            loginStep: loginStep
        })
    }
    render() {
        return (
            <div className="loginScreen">
                <div className="mainDiv">
                    {this.state.loginTitle}
                    {this.state.loginStatus}
                    {this.state.loginScreen}
                </div>
                <div>
                    {this.state.loginButtons}
                </div>
            </div>
        )
    }
}

export default Loginscreen