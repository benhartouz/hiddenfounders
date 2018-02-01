import {combineReducers} from 'redux';
import ShopReducer from './reducer-shops';
import ActiveShopReducer from './reducer-active-shop';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    shops: ShopReducer,
    activeShop: ActiveShopReducer
});

export default allReducers
