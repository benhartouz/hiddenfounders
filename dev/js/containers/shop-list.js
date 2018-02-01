import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectIem} from '../actions/index'


class ShopList extends Component {

    renderList() {
        return this.props.shops.map((shop) => {
            return (
                <li
                    key={shop.id}
                    onClick={() => this.props.selectShop(shop)}
                >
                    {shop.name} 
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

}

// Get apps state and pass it as props to shopList
//      > whenever state changes, the shopList will automatically re-render
function mapStateToProps(state) {
    return {
        shops: state.shops
    };
}

// Get actions and pass them as props to to shopList
//      > now shopList has this.props.selectShop
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectShop: selectIem}, dispatch);
}

// We don't want to return the plain shopList (component) anymore, we want to return the smart Container
//      > shopList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(ShopList);
