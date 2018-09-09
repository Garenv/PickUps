import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal'
import axios from '../../food-selected';
import * as actionType from '../../store/actions';
import firebase from 'firebase';

import Aux from '../../hoc/Aux';
import FoodButton from '../../components/FoodButton/FoodButton';
import PayModalButton from '../../containers/PayModalButton/PayModalButton';
import CheckoutButton from '../../containers/CheckoutButton/CheckoutButton';
import PayModal from '../../components/PayModal/PayModal';
import PayModalBackdrop from '../../components/PayModalBackdrop/PayModalBackdrop';

import classes from './TacoTypes.css';

class TacoTypes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItems: [],
            modalIsOpen: false,

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
                <p>What would you like to eat?</p>
            </div>

        );
    };

    render() {
        return (
            <Aux>
                {
                    <h4>{this.displayEmail()}</h4>
                }

                <div className={classes.AllButtons}>
                    {Object.keys(this.items).map(key => (
                        <FoodButton clicked={() => this.selectFood(key)} key={key} label={this.items[key]}/>
                    ))}
                </div>

                <Modal isOpen={this.props.isOpen}>
                    {this.state.selectedItems.map(key => (
                        <div key={key}>
                            <p className={classes.FoodSelected} key={key}>{this.items[key]}</p>
                            <br/>

                            <div className={classes.bothButtons}>
                                <button className={classes.AddButton} onClick={() => this.selectFood(key)}>+</button>
                                <button className={classes.SubtractButton} onClick={() => this.deselectFood(key)}>-
                                </button>
                                <p className={classes.Clicks} key={key}><b>X</b> {this.state.foodClicks[key]}</p>
                            </div>
                        </div>
                    ))}

                    <PayModal showPayModal={this.props.showPayModal} closePayModal={() => this.props.closeModalPayRedux()}/>
                    <PayModalBackdrop showPayModalBackdrop={this.props.showBackdropModal} />

                    <PayModalButton openPayModalButton={() => this.props.showPayModalRedux()} />

                </Modal>

                <CheckoutButton clicked={() => this.props.openModalRedux()}/>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isOpen: state.isOpen.isModalOpen,
        showPayModal: state.showPayModal.showPayModal,
        showBackdropModal: state.showBackdropModal.showBackdropModal,
        closePayModalButton: state.closePayModalButton.closePayModalButton
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openModalRedux: () => dispatch({type: actionType.OPEN_MODAL}),
        showPayModalRedux: () => dispatch({type: actionType.SHOW_PAY_MODAL}),
        showBackdropModalRedux: () => dispatch({type: actionType.SHOW_BACKDROP}),
        closeModalPayRedux: () => dispatch({type: actionType.CLOSE_MODAL})




        // openPayModal: () => dispatch({type: actionType.OPEN_PAY_MODAL}),
        // closeModalRedux: () => dispatch({type: actionType.CLOSE_MODAL})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TacoTypes);