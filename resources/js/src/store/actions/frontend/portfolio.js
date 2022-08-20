import * as actionTypes from '../actionTypes';

const prefix = '/api/';

export const resetPortfolio = () => ({ type: actionTypes.PORTFOLIO_RESET });
const portfolioStart = () => ({ type: actionTypes.PORTFOLIO_START });
const portfolioSuccess = data => ({ type: actionTypes.PORTFOLIO_SUCCESS, ...data });
const portfolioFail = error => ({ type: actionTypes.PORTFOLIO_FAIL, error });
export const getPortfolio = () => async dispatch => {
    dispatch(portfolioStart());

    try {
        const res = await fetch(`${prefix}portfolio`);
        const resData = await res.json();

        dispatch(portfolioSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(portfolioFail(error));
    }
}