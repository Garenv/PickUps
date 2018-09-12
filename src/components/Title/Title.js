import React, {Component} from 'react';
import classes from './Title.css';
import LogoutButton from '../../containers/LogoutButton/LogoutButton';

class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showLogoutButton: props.authenticated
        };
    }

    render() {
        const { showLogoutButton } = this.state;
        return(
            <div className="row" style={{"display": "flex"}}>
                {showLogoutButton ? <LogoutButton/> : null}
                {!showLogoutButton && <h1 className={classes.Title}>Pick Ups</h1>}
            </div>
        );
    }
}

export default Title;
