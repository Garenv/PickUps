import React, {Component} from 'react';
import classes from './Title.css';
import LogoutButton from '../../containers/LogoutButton/LogoutButton';

class Title extends Component {
    render() {
        return(
            <div>
                <h1 className={classes.Title}>Pick Ups</h1>
                <LogoutButton/>
            </div>
        );
    }
}

export default Title;
