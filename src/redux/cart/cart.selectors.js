import { createSelector } from 'reselect'; 

// input selectors return only a piece of the entire state
const selectCart = state => state.cart;

// memoized selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem ) => accumulatedQuantity + cartItem.quantity,
              0
        )      
);