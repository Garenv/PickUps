import React, {Component} from 'react';
import fire from '../../config/Fire';
import firebase from 'firebase';
import classes from './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        });
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).then((u) => {
            console.log(u)
        })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className={classes.Middle}>

                <div className="form-group">
                    <h1>Email address</h1>
                    <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
                           className="form-control" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <h1>Password</h1>
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password"
                           className="form-control" placeholder="Password"/>
                </div>
                <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
                <button onClick={this.signup}>Signup</button>
            </div>
        );
    }
}

export default Login;
