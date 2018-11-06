import React, {Component} from 'react';
import fire from '../../config/Fire';
import classes from './Login.css';
import Spinner from '../../UI/Spinner/Spinner';

import { Link } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    login() {
        this.setState({loading: true});
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
                {this.state.loading && <Spinner/>}
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

                <Link to={{
                    pathname: '/ChooseTruck'
                }}>
                    <button type="submit" onClick={this.login.bind(this)} className="btn btn-primary">Login</button>
                </Link>




                <button onClick={this.signup}>Signup</button>
            </div>
        );
    }
}

export default Login;
