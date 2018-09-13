import React, { Component } from 'react';
import classes from './Home.css';
import TacoTypes from '../../components/TacoTypes/TacoTypes';
import firebase from "firebase";
import LogoutButton from '../../containers/LogoutButton/LogoutButton';
import Title from '../../components/Title/Title';

import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        // this.logout = this.logout.bind(this);
        this.state = {
            flag: false
        }
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
            <div className={classes.DisplayEmailEat}>
                <p>Welcome, {userEmail}!</p>
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
                <h1>{this.displayName()}</h1>
                <h1 className={classes.Bam}>Choose your favorite truck!</h1>
                {/*<button onClick={this.foodHandler.bind(this)} className="btn btn-primary btn-lg btn-block">Taco Del Rey</button>*/}

                <Link to={{
                    pathname: '/TacoTypes',
                    // hash: '#submit',
                    // search: '?quick-submit=true'
                }}>
                    <button onClick={this.foodHandler.bind(this)} className="btn btn-primary btn-lg btn-block">Taco Del Rey</button>
                </Link>

                {/*<Route path="/ChooseTruck" component={Home}/>*/}
                {/*<Route path="/" exact component={Home} />*/}
                <button type="button" className="btn btn-secondary btn-lg btn-block">Local Deli</button>
                <button type="button" className="btn btn-secondary btn-lg btn-block">Local Restaurant</button>
            </div>
        );
    }
}

export default Home;