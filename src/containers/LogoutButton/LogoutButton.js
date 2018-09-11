import React, {Component} from 'react';
import fire from '../../config/Fire';
import classes from './LogoutButton.css';

class LogoutButton extends Component {
    logout = () => {
        fire.auth().signOut();
    };

    render() {
        return(
            <div>
                <button className={classes.LogoutButton} onClick={this.logout.bind(this)}>Logout</button>
            </div>
        );
    }
}

export default LogoutButton;