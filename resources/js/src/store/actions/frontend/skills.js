import * as actionTypes from '../actionTypes';

const prefix = '/api/';

export const resetSkills = () => ({ type: actionTypes.SKILLS_RESET });
const skillsStart = () => ({ type: actionTypes.SKILLS_START });
const skillsSuccess = data => ({ type: actionTypes.SKILLS_SUCCESS, ...data });
const skillsFail = error => ({ type: actionTypes.SKILLS_FAIL, error });
export const getSkills = () => async dispatch => {
    dispatch(skillsStart());

    try {
        const res = await fetch(`${prefix}skills`);
        const resData = await res.json();

        dispatch(skillsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(skillsFail(error));
    }
}

export const getService = slug => async dispatch => {
    dispatch(skillsStart());

    try {
        const res = await fetch(`${prefix}skills/${slug}`);
        const resData = await res.json();

        dispatch(skillsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(skillsFail(error));
    }
}