import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.css';
import firebase from "firebase";

import TacoTypes from '../../components/TacoTypes/TacoTypes';
import Title from '../../components/Title/Title';
import Search from '../../containers/Search/Search';

class Home extends Component {
    constructor(props) {
        super(props);
        // this.logout = this.logout.bind(this);
        this.state = {
            searchString: "",
            flag: false,
        };
    }

    foodHandler () {
        this.setState({flag: true});
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
            <div>
                <p className={classes.DisplayEmailEat}>Welcome, {userEmail}!</p>
            </div>
        );
    };

    render() {
        const next = this.state.flag;

        if(next) {
            return <TacoTypes/>;
        }

        return (
            <div>
                <Title authenticated={true}/>
                <h3>{this.displayName()}</h3>
                <div className={classes.Body}>
                    <h1 className={classes.Bam}>Choose your favorite truck!</h1>

                    <Link to={{
                        pathname: '/TacoTypes'
                    }}>
                        <button onClick={this.foodHandler.bind(this)} className="btn btn-primary btn-lg btn-block">Taco Del Rey</button>
                    </Link>

                    <button type="button" className="btn btn-secondary btn-lg btn-block">Local Deli</button>
                    <button type="button" className="btn btn-secondary btn-lg btn-block">Local Restaurant</button>
                </div>

                <Search/>

            </div>
        );
    }
}

export default Home;