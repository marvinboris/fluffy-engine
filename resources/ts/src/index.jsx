import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

import * as serviceWorker from "./serviceWorker";

import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";

$(function () {
    $.getScript("https://kit.fontawesome.com/132ff047cd.js");

    window.PREFIX = "/api/";
    window.CORS = "https://api.allorigins.win/get?url=";

    window.APP_PRIMARY_COLOR = "blue";
    window.APP_SECONDARY_COLOR = "yellow";
    window.COLORS = [
        window.APP_PRIMARY_COLOR,
        window.APP_SECONDARY_COLOR,
        "success",
        "info",
        "danger",
    ];

    document.body.className = `scrollbar-${window.APP_PRIMARY_COLOR}`;

    if (
        localStorage.getItem("frontend_lang") == "undefined" ||
        !localStorage.getItem("frontend_lang")
    )
        localStorage.setItem(
            "frontend_lang",
            import.meta.env.VITE_DEFAULT_LANG || "en"
        );
    if (
        localStorage.getItem("backend_lang") == "undefined" ||
        !localStorage.getItem("backend_lang")
    )
        localStorage.setItem(
            "backend_lang",
            import.meta.env.VITE_DEFAULT_LANG || "en"
        );

    const app = (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );

    ReactDOM.render(app, document.getElementById("app"));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
});
