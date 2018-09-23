import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal'
import axios from '../../food-selected';
import * as actionType from '../../store/actions';
import firebase from 'firebase';

import { Link } from 'react-router-dom';

import Aux from '../../hoc/Aux';
import FoodButton from '../Buttons/FoodButton';
import PayModalButton from '../../containers/PayModalButton/PayModalButton';
import CheckoutButton from '../../containers/CheckoutButton/CheckoutButton';
import PayModal from '../../components/PayModal/PayModal';
import CloseModal from '../../components/Buttons/CloseModal/CloseModal';
import Title from '../../components/Title/Title';

import classes from './TacoTypes.css';

class TacoTypes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItems: [],

            foodClicks: {
                chickenTaco: 0,
                beefTaco: 0,
                chickenBurrito: 0,
                beefBurrito: 0
            }
        };

        this.items = {
            chickenTaco: 'Chicken Taco',
            beefTaco: 'Beef Taco',
            chickenBurrito: 'Chicken Burrito',
            beefBurrito: 'Beef Burrito'
        };
    }

    selectFood(food) {
        this.setState(state => {
            let selected = this.state.selectedItems;
            let user = firebase.auth().currentUser;
            let userEmail = "";

            if (!selected.includes(food)) {
                selected.push(food);
            }

            if (user !== null) {
                user.providerData.forEach(function (profile) {
                    userEmail = profile.email;
                });
            }

            let userInfo = {
                userEmail,
                selected
            };

            console.log(userInfo);

            axios.post('./selected.json', userInfo)
                .then(response => {
                    console.log("it worked");
                }).catch(error => {
                console.log(error + "doesn't work")
            });

            return {
                selectedItems: selected,
                foodClicks: {
                    ...state.foodClicks,
                    [food]: state.foodClicks[food] + 1
                }
            };
        });
    }

    deselectFood(food) {
        this.setState(state => {
            if (this.state.foodClicks[food] <= 0) {
                return null;
            }

            return {
                foodClicks: {
                    ...state.foodClicks,
                    [food]: state.foodClicks[food] - 1
                }
            };
        });
    }

    displayEmail = () => {
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
        return (
            <Aux>
                {<h3>{this.displayEmail()}</h3>}<Title authenticated={true}/>
                <h1 className={classes.Eat}>What would you like to eat?</h1>

                {/* Go back to truck selection screen*/}
                <div>
                    <Link to={{pathname: '/ChooseTruck'}} >
                        <button className={classes.BackButton} onClick='../Home/Home.js'>Back</button>
                    </Link>
                </div>

                {Object.keys(this.items).map((key, index) => (
                    <FoodButton clicked={() => this.selectFood(key)} key={index} label={this.items[key]}/>
                ))}

                <Modal isOpen={this.props.isOpen}>
                    {this.state.selectedItems.map(key => (
                        <div key={key}>
                            <br/>
                            <div className={classes.bothButtons}>
                                <p className={classes.FoodSelected} key={key}>{this.items[key]}</p>
                                <button key={key} className={classes.AddButton} onClick={() => this.selectFood(key)}>+</button>
                                <button key={key} className={classes.SubtractButton} onClick={() => this.deselectFood(key)}>-</button>
                                <p className={classes.Clicks} key={key}> <b>X</b> {this.state.foodClicks[key]}</p>
                            </div>
                        </div>
                    ))}

                    {/*<PayModalBackdrop showPayModalBackdrop={this.props.showBackdropModal} />*/}
                    <PayModal showPayModal={this.props.showPayModal} closePayModal={() => this.props.closePayModalButtonRedux()}/>
                    <PayModalButton openPayModalButton={() => this.props.showPayModalRedux()} />

                    <CloseModal closeMainModalButton={() => this.props.closeMainModalPayRedux()} />

                </Modal>

                <CheckoutButton clicked={() => this.props.openModalRedux()}/>

                {this.state.selectedItems.map(key => (
                    <div key={key}>
                        <p className={classes.FoodSelected} key={key}>{this.items[key]}</p>
                    </div>
                ))}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isOpen: state.isOpen.isModalOpen,
        showPayModal: state.showPayModal.showPayModal,
        showBackdropModal: state.showBackdropModal.showBackdropModal,
        closeMainModalButton: state.closeMainModalButton.closeMainModalButton,
        closePayModalButton: state.closePayModalButton.closePayModalButton
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openModalRedux: () => dispatch({type: actionType.OPEN_MODAL}),
        showPayModalRedux: () => dispatch({type: actionType.SHOW_PAY_MODAL}),
        closeMainModalPayRedux: () => dispatch({type: actionType.CLOSE_MODAL}),
        closePayModalButtonRedux: () => dispatch({type: actionType.CLOSE_PAY_MODAL_BUTTON})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TacoTypes);