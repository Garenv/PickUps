import React, {Component} from 'react';
import classes from './Title.css';
import LogoutButton from '../../containers/LogoutButton/LogoutButton';
import Aux from '../../hoc/Aux';

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
            <Aux>
                {showLogoutButton ? <LogoutButton/> : null}
                {!showLogoutButton && <h1 className={classes.Title}>Pick Ups</h1>}
            </Aux>
        );
    }
}

export default Title;
