import * as actionTypes from '../actionTypes';

const prefix = '/api/';

export const resetHome = () => ({ type: actionTypes.HOME_RESET });
const homeStart = () => ({ type: actionTypes.HOME_START });
const homeSuccess = data => ({ type: actionTypes.HOME_SUCCESS, ...data });
const homeFail = error => ({ type: actionTypes.HOME_FAIL, error });
export const getHome = () => async dispatch => {
    dispatch(homeStart());

    try {
        const res = await fetch(`${prefix}home`);
        const resData = await res.json();

        dispatch(homeSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(homeFail(error));
    }
}