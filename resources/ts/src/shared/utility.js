export const updateObject = (oldObject, updatedProps) => ({
    ...oldObject,
    ...updatedProps,
});

export const parseMoment = (item) => item.format("YYYY-MM-DD HH:mm:ss");

export const convertDate = (date) => {
    if (!date) return null;

    const d = new Date(date);
    const dtf = new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "2-digit",
    });

    return dtf
        .formatToParts(d)
        .map(({ value }) => value)
        .join("");
};

const twoDigits = (number) => (number < 10 ? "0" + number : number);

export const convertTime = (date) => {
    const d = new Date(date);
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();

    return `${twoDigits(hours)} : ${twoDigits(minutes)} : ${twoDigits(
        seconds
    )}`;
};

export const timeFromTimestamp = (timestamp) => {
    const totalSeconds = Math.round(timestamp);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds - hours * 3600) / 60);
    const seconds = totalSeconds - hours * 3600 - minutes * 60;

    return `${twoDigits(hours)} : ${twoDigits(minutes)} : ${twoDigits(
        seconds
    )}`;
};

export const checkValidity = (value = "", rules) => {
    let isValid = true;

    if (rules.required) isValid = value.trim() !== "" && isValid;

    if (rules.minLength) isValid = value.length >= rules.minLength && isValid;

    if (rules.maxLength) isValid = value.length <= rules.maxLength && isValid;

    if (rules.isEmail) {
        const pattern =
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid;
    }

    return isValid;
};

export const htmlEntities = (str) => {
    if (str === null || str === "") return false;
    else str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/gi, "");
};

export const manageResource =
    (root, actions, type, ...params) =>
    async (dispatch, getState) => {
        dispatch(actions.start());
        const { role } = getState().auth;

        try {
            const token = localStorage.getItem("token");
            let url;

            if (type === "index") {
                let page = params[0] || 1;
                let show = params[1] || 10;
                let search = params[2] || "";
                url = `${
                    PREFIX + role
                }/${root}?page=${page}&show=${show}&search=${search}`;
                const res = await fetch(url, {
                    headers: {
                        Authorization: token,
                    },
                });
                const resData = await res.json();
                return dispatch(actions.success(resData));
            } else if (type === "info") {
                url = `${PREFIX + role}/${root}/info`;
                const res = await fetch(url, {
                    headers: {
                        Authorization: token,
                    },
                });
                const resData = await res.json();
                return dispatch(actions.success(resData));
            } else if (type === "show") {
                const id = params[0];
                const url = `${PREFIX + role}/${root}/${id}`;
                const res = await fetch(url, {
                    headers: {
                        Authorization: token,
                    },
                });
                const resData = await res.json();
                return dispatch(actions.success(resData));
            } else if (type === "post") {
                let pageElt = document.getElementById("table-page");
                let showElt = document.getElementById("table-show");
                let searchElt = document.getElementById("table-search");
                if (pageElt) page = pageElt.value;
                if (showElt) show = showElt.value;
                if (searchElt) search = searchElt.value;

                let data = params[0];
                let form = new FormData(data);
                url = `${
                    PREFIX + role
                }/${root}?page=${page}&show=${show}&search=${search}`;
                const res = await fetch(url, {
                    method: "POST",
                    body: form,
                    headers: {
                        Authorization: token,
                    },
                });
                const resData = await res.json();
                if (res.status === 422)
                    throw new Error(Object.values(resData.errors).join("\n"));
                else if (res.status !== 200 && res.status !== 201)
                    throw new Error(resData.error.message);
                return dispatch(actions.success(resData));
            } else if (type === "patch") {
                const pageElt = document.getElementById("table-page");
                const showElt = document.getElementById("table-show");
                const searchElt = document.getElementById("table-search");
                if (pageElt) page = pageElt.value;
                if (showElt) show = showElt.value;
                if (searchElt) search = searchElt.value;

                const id = params[0];
                const data = params[1];
                const form = new FormData(data);
                url = `${
                    PREFIX + role
                }/${root}/${id}?page=${page}&show=${show}&search=${search}`;
                const res = await fetch(url, {
                    method: "POST",
                    body: form,
                    headers: {
                        Authorization: token,
                    },
                });
                const resData = await res.json();
                if (res.status === 422)
                    throw new Error(Object.values(resData.errors).join("\n"));
                return dispatch(actions.success(resData));
            } else if (type === "delete") {
                const pageElt = document.getElementById("table-page");
                const showElt = document.getElementById("table-show");
                const searchElt = document.getElementById("table-search");
                if (pageElt) page = pageElt.value;
                if (showElt) show = showElt.value;
                if (searchElt) search = searchElt.value;

                const id = params[0];
                url = `${
                    PREFIX + role
                }/${root}/${id}?page=${page}&show=${show}&search=${search}`;
                const res = await fetch(url, {
                    method: "DELETE",
                    headers: {
                        Authorization: token,
                    },
                });
                const resData = await res.json();
                if (res.status === 422)
                    throw new Error(Object.values(resData.errors).join("\n"));
                return dispatch(actions.success(resData));
            }
        } catch (error) {
            console.log(error);
            dispatch(actions.fail(error));
        }
    };
