import React from 'react';
import ShopList from '../containers/shop-list';
import ShopDetails from '../containers/shop-detail';


const App = () => (
    <div>
        <h2>Shops List</h2>
        <ShopList />
        <hr />
        <h2>Shop Details</h2>
        <ShopDetails />
    </div>
);

export default App;
