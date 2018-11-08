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

    componentDidMount() {
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");

        // const circleCords = {
        //     x: 100,
        //     y: 75
        // };
        //
        // const textCords = {
        //     x: circleCords - 5,
        //     y: circleCords + 5
        // };
        //
        // ctx.beginPath();
        // ctx.arc(circleCords.x,circleCords.y, 50, 0, 2*Math.PI);
        // ctx.fillText("testtesttesttesttesttesttesttesttesttest", textCords.x, textCords.y);
        // ctx.stroke();

        const x_arc = 100;
        const y_arc = 75;
        const radius = 50;

        const text = "Rated #1 Website!";
        const text_width = ctx.measureText(text).width;
        const x_text = x_arc - text_width / 2;
        const y_text = y_arc;

        ctx.beginPath();
        ctx.arc(x_arc, y_arc, radius, 0 , 2 * Math.PI);
        ctx.fillText("Rated #1 Website!", x_text, y_text);
        ctx.stroke();





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
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className={classes.Middle}>

                <canvas id="myCanvas" width="400" height="400" />

                {this.state.loading && <Spinner/>}

                <div className="form-group">
                    <h1>Email address</h1>
                    <input value={this.state.email}
                           onChange={this.handleChange}
                           type="email"
                           name="email"
                           className="form-control"
                           placeholder="Enter email"
                    />
                </div>

                <div className="form-group">
                    <h1>Password</h1>
                    <input value={this.state.password}
                           onChange={this.handleChange}
                           type="password"
                           name="password"
                           className="form-control"
                           placeholder="Password"
                    />
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
