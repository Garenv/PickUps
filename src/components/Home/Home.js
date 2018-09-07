import React, { Component } from 'react';
import classes from './Home.css';
import TacoTypes from '../../components/TacoTypes/TacoTypes';
import firebase from "firebase";

class Home extends Component {
    constructor(props) {
        super(props);
        // this.logout = this.logout.bind(this);
        this.state = {
            flag: false
        }
    }

    foodHandler () {
        this.setState({flag: true})
    }

    displayName = () => {
        let user = firebase.auth().currentUser;
        let userEmail = " ";

        if (user !== null) {
            user.providerData.forEach(function (profile) {
                console.log(userEmail);
                userEmail = profile.email;
            });
        }

        return (
            <p className={classes.UserEmail}>Welcome, {userEmail}!</p>
        );
    };

    render() {
        const next = this.state.flag;

        if(next) {
            return <TacoTypes/>;
        }

        return (
            <div>
                <h1>{this.displayName()}</h1>
                <h1 className={classes.Bam}>Welcome! Choose your favorite truck!</h1>

                <button onClick={this.foodHandler.bind(this)} className="btn btn-primary btn-lg btn-block">Taco Del Rey</button>
                <button type="button" className="btn btn-secondary btn-lg btn-block">Some other shit</button>
            </div>
        );
    }
}

export default Home;