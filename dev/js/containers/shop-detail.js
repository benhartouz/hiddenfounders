import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.shop)" because we set state to null by default
 * */

class ShopDetail extends Component {
    render() {
        console.log(this.props.shop);
        if (!this.props.shop) {
            return (<div>Select a shop...</div>);
        }
        return (
            <div>
                <img src={this.props.shop.thumbnail} />
                <h2>{this.props.shop.name}</h2>
                <h3>Description: {this.props.shop.description}</h3>
            </div>
        );
    }
}

// "state.activeShop" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        shop: state.activeShop
    };
}

export default connect(mapStateToProps)(ShopDetail);
