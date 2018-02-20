import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectIem} from '../actions/index';
import Shop from '../components/Shop';


class ShopList extends Component {

    renderList() {
        return this.props.shops.map((shop) => {
            return (
                <Shop key={shop.id} name={shop.name} />
            );
        });
    }

    render() {
        return (
            <div id="list_shop">
                {this.renderList()}
            </div>
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

// We don't want to return the plain shopList (component) anymore, we want to return the smart Container
//      > shopList is now aware of state and actions
export default connect(mapStateToProps)(ShopList);
