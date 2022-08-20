import * as actionTypes from './actionTypes';

const prefix = '/api/';

export const contentStart = () => ({ type: actionTypes.CONTENT_START });
export const contentSuccess = data => ({ type: actionTypes.CONTENT_SUCCESS, ...data });
export const contentFail = error => ({ type: actionTypes.CONTENT_FAIL, error });
export const frontendLanguage = lang => async dispatch => {
    dispatch(contentStart());

    try {
        const res = await fetch(`${prefix}content/${lang}`);
        const resData = await res.json();
        localStorage.setItem('frontend_lang', lang);
        dispatch(contentSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(contentFail(error));
    }
}

export const backendLanguage = id => async dispatch => {
    dispatch(contentStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix}content/language/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        localStorage.setItem('backend_lang', resData.language.abbr);
        dispatch(contentSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(contentFail(error));
    }
};

export const toggleColor = () => (dispatch, getState) => {
    dispatch(contentStart());

    const { light } = getState().content;
    localStorage.setItem('theme', light ? 'dark' : 'light');
    dispatch(contentSuccess({ light: !light }));
}