import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    // function that gets tthe return of the input selector (user reducer)
    (user) => user.currentUser
);