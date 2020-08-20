import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// local storage object on our window browser as default storage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage,
    // array containing the string name of reducers we want to store
    whitelist: ['cart']
}

const rootReducers = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig ,rootReducers);