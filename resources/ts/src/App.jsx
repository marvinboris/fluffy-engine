import React, { Component, Suspense, lazy } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { init } from "aos";

import ErrorBoundary from "./hoc/ErrorBoundary";

import AuthUserLayout from "./containers/Auth/User/Layout";
import AuthAdminLayout from "./containers/Auth/Admin/Layout";
import FrontendLayout from "./containers/Frontend/Layout";
import BackendManagerLayout from "./containers/Backend/Manager/Layout";

import Spinner from "./components/UI/Preloaders/Spinner";
import Loading from "./components/UI/Preloaders/Loading";

import { authCheckState } from "./store/actions/auth";

import "../../sass/app.scss";
import "aos/dist/aos.css";

const importedRoutes = {
    // Backend routes
    Backend: {
        // Manager routes
        Manager: {
            Dashboard: lazy(() =>
                import("./containers/Backend/Manager/Dashboard")
            ),
            Cms: {
                Global: lazy(() =>
                    import("./containers/Backend/Manager/Cms/Global")
                ),
                General: lazy(() =>
                    import("./containers/Backend/Manager/Cms/General")
                ),
                Auth: lazy(() =>
                    import("./containers/Backend/Manager/Cms/Auth")
                ),
                Backend: lazy(() =>
                    import("./containers/Backend/Manager/Cms/Backend")
                ),
                Frontend: lazy(() =>
                    import("./containers/Backend/Manager/Cms/Frontend")
                ),
            },
            Settings: {
                Language: lazy(() =>
                    import("./containers/Backend/Manager/Settings/Language")
                ),
            },
            Features: {
                Index: lazy(() =>
                    import("./containers/Backend/Manager/Features")
                ),
                Add: lazy(() =>
                    import("./containers/Backend/Manager/Features/Add")
                ),
                Edit: lazy(() =>
                    import("./containers/Backend/Manager/Features/Edit")
                ),
            },
            Languages: {
                Index: lazy(() =>
                    import("./containers/Backend/Manager/Languages")
                ),
                Add: lazy(() =>
                    import("./containers/Backend/Manager/Languages/Add")
                ),
                Edit: lazy(() =>
                    import("./containers/Backend/Manager/Languages/Edit")
                ),
            },
            Roles: {
                Index: lazy(() => import("./containers/Backend/Manager/Roles")),
                Add: lazy(() =>
                    import("./containers/Backend/Manager/Roles/Add")
                ),
                Edit: lazy(() =>
                    import("./containers/Backend/Manager/Roles/Edit")
                ),
            },
            Experiences: {
                Index: lazy(() =>
                    import("./containers/Backend/Manager/Experiences")
                ),
                Add: lazy(() =>
                    import("./containers/Backend/Manager/Experiences/Add")
                ),
                Edit: lazy(() =>
                    import("./containers/Backend/Manager/Experiences/Edit")
                ),
            },
            Skills: {
                Index: lazy(() =>
                    import("./containers/Backend/Manager/Skills")
                ),
                Add: lazy(() =>
                    import("./containers/Backend/Manager/Skills/Add")
                ),
                Edit: lazy(() =>
                    import("./containers/Backend/Manager/Skills/Edit")
                ),
            },
            Projects: {
                Index: lazy(() =>
                    import("./containers/Backend/Manager/Projects")
                ),
                Add: lazy(() =>
                    import("./containers/Backend/Manager/Projects/Add")
                ),
                Edit: lazy(() =>
                    import("./containers/Backend/Manager/Projects/Edit")
                ),
            },
            Technologies: {
                Index: lazy(() =>
                    import("./containers/Backend/Manager/Technologies")
                ),
                Add: lazy(() =>
                    import("./containers/Backend/Manager/Technologies/Add")
                ),
                Edit: lazy(() =>
                    import("./containers/Backend/Manager/Technologies/Edit")
                ),
            },
            Users: {
                Index: lazy(() => import("./containers/Backend/Manager/Users")),
                Add: lazy(() =>
                    import("./containers/Backend/Manager/Users/Add")
                ),
                Edit: lazy(() =>
                    import("./containers/Backend/Manager/Users/Edit")
                ),
            },
        },

        // Admin routes
        Admin: {
            Admins: {
                Index: lazy(() => import("./containers/Backend/Admin/Admins")),
                Add: lazy(() =>
                    import("./containers/Backend/Admin/Admins/Add")
                ),
                Edit: lazy(() =>
                    import("./containers/Backend/Admin/Admins/Edit")
                ),
            },
        },
    },

    // Auth routes
    Auth: {
        User: {
            Login: lazy(() => import("./containers/Auth/User/Login")),
        },
        Admin: {
            Login: lazy(() => import("./containers/Auth/Admin/Login")),
            Verify: lazy(() => import("./containers/Auth/Admin/Verify")),
        },
    },

    // Frontend routes
    Frontend: {
        Home: lazy(() => import("./containers/Frontend/Home")),
        About: lazy(() => import("./containers/Frontend/About")),
        Contact: lazy(() => import("./containers/Frontend/Contact")),
        Skills: lazy(() => import("./containers/Frontend/Skills")),
        Portfolio: lazy(() => import("./containers/Frontend/Portfolio")),
    },
};

class App extends Component {
    componentDidMount() {
        this.props.authCheckState();
        init();
    }

    render() {
        const {
            content: { cms, error: content_error, countries },
            auth: { error: auth_error, role },
            location: { pathname },
        } = this.props;
        const isAuthenticated = localStorage.getItem("token") !== null;
        if (
            (content_error &&
                content_error.message.includes(
                    "Server Error" || "[1045] Access denied for user"
                )) ||
            (auth_error &&
                auth_error.message.includes(
                    "Server Error" ||
                        "[1045] Access denied for user" ||
                        "No application encryption key has been specified."
                ))
        )
            location.reload();

        const frontendRoutes = (
            <Route path="/">
                <FrontendLayout>
                    <Switch>
                        <Route
                            path="/contact"
                            component={importedRoutes.Frontend.Contact}
                        />
                        <Route
                            path="/portfolio"
                            component={importedRoutes.Frontend.Portfolio}
                        />
                        <Route
                            path="/skills"
                            component={importedRoutes.Frontend.Skills}
                        />
                        <Route
                            path="/about"
                            component={importedRoutes.Frontend.About}
                        />
                        <Route
                            path="/"
                            component={importedRoutes.Frontend.Home}
                        />
                    </Switch>
                </FrontendLayout>
            </Route>
        );

        let routes = (
            <Switch>
                <Route path="/auth/admin">
                    <AuthAdminLayout>
                        <Switch>
                            <Route
                                path="/auth/admin/verify"
                                component={importedRoutes.Auth.Admin.Verify}
                            />
                            <Route
                                path="/auth/admin/login"
                                component={importedRoutes.Auth.Admin.Login}
                            />
                        </Switch>
                    </AuthAdminLayout>
                </Route>
                <Redirect path="/admin" to="/auth/admin/login" />

                <Route path="/auth/user">
                    <AuthUserLayout>
                        <Switch>
                            <Route
                                path="/auth/user/login"
                                component={importedRoutes.Auth.User.Login}
                            />
                        </Switch>
                    </AuthUserLayout>
                </Route>
                <Redirect path="/user" to="/auth/user/login" />

                {frontendRoutes}
            </Switch>
        );

        if (isAuthenticated) {
            routes = (
                <Switch>
                    <Route path={["/user", "/admin"]}>
                        <BackendManagerLayout>
                            <Switch>
                                <Route
                                    path="/admin/admins/:id/edit"
                                    component={
                                        importedRoutes.Backend.Admin.Admins.Edit
                                    }
                                />
                                <Route
                                    path="/admin/admins/add"
                                    component={
                                        importedRoutes.Backend.Admin.Admins.Add
                                    }
                                />
                                <Route
                                    path="/admin/admins"
                                    component={
                                        importedRoutes.Backend.Admin.Admins
                                            .Index
                                    }
                                />

                                <Route
                                    path="/:manager/cms/global"
                                    component={
                                        importedRoutes.Backend.Manager.Cms
                                            .Global
                                    }
                                />
                                <Route
                                    path="/:manager/cms/general"
                                    component={
                                        importedRoutes.Backend.Manager.Cms
                                            .General
                                    }
                                />
                                <Route
                                    path="/:manager/cms/auth"
                                    component={
                                        importedRoutes.Backend.Manager.Cms.Auth
                                    }
                                />
                                <Route
                                    path="/:manager/cms/backend"
                                    component={
                                        importedRoutes.Backend.Manager.Cms
                                            .Backend
                                    }
                                />
                                <Route
                                    path="/:manager/cms/frontend"
                                    component={
                                        importedRoutes.Backend.Manager.Cms
                                            .Frontend
                                    }
                                />

                                <Route
                                    path="/:manager/dashboard"
                                    component={
                                        importedRoutes.Backend.Manager.Dashboard
                                    }
                                />

                                <Route
                                    path="/:manager/features/:id/edit"
                                    component={
                                        importedRoutes.Backend.Manager.Features
                                            .Edit
                                    }
                                />
                                <Route
                                    path="/:manager/features/add"
                                    component={
                                        importedRoutes.Backend.Manager.Features
                                            .Add
                                    }
                                />
                                <Route
                                    path="/:manager/features"
                                    component={
                                        importedRoutes.Backend.Manager.Features
                                            .Index
                                    }
                                />

                                <Route
                                    path="/:manager/languages/:id/edit"
                                    component={
                                        importedRoutes.Backend.Manager.Languages
                                            .Edit
                                    }
                                />
                                <Route
                                    path="/:manager/languages/add"
                                    component={
                                        importedRoutes.Backend.Manager.Languages
                                            .Add
                                    }
                                />
                                <Route
                                    path="/:manager/languages"
                                    component={
                                        importedRoutes.Backend.Manager.Languages
                                            .Index
                                    }
                                />

                                <Route
                                    path="/:manager/roles/:id/edit"
                                    component={
                                        importedRoutes.Backend.Manager.Roles
                                            .Edit
                                    }
                                />
                                <Route
                                    path="/:manager/roles/add"
                                    component={
                                        importedRoutes.Backend.Manager.Roles.Add
                                    }
                                />
                                <Route
                                    path="/:manager/roles"
                                    component={
                                        importedRoutes.Backend.Manager.Roles
                                            .Index
                                    }
                                />

                                <Route
                                    path="/:manager/settings/language"
                                    component={
                                        importedRoutes.Backend.Manager.Settings
                                            .Language
                                    }
                                />

                                <Route
                                    path="/:manager/users/:id/edit"
                                    component={
                                        importedRoutes.Backend.Manager.Users
                                            .Edit
                                    }
                                />
                                <Route
                                    path="/:manager/users/add"
                                    component={
                                        importedRoutes.Backend.Manager.Users.Add
                                    }
                                />
                                <Route
                                    path="/:manager/users"
                                    component={
                                        importedRoutes.Backend.Manager.Users
                                            .Index
                                    }
                                />

                                <Route
                                    path="/:manager/experiences/:id/edit"
                                    component={
                                        importedRoutes.Backend.Manager
                                            .Experiences.Edit
                                    }
                                />
                                <Route
                                    path="/:manager/experiences/add"
                                    component={
                                        importedRoutes.Backend.Manager
                                            .Experiences.Add
                                    }
                                />
                                <Route
                                    path="/:manager/experiences"
                                    component={
                                        importedRoutes.Backend.Manager
                                            .Experiences.Index
                                    }
                                />

                                <Route
                                    path="/:manager/skills/:id/edit"
                                    component={
                                        importedRoutes.Backend.Manager.Skills
                                            .Edit
                                    }
                                />
                                <Route
                                    path="/:manager/skills/add"
                                    component={
                                        importedRoutes.Backend.Manager.Skills
                                            .Add
                                    }
                                />
                                <Route
                                    path="/:manager/skills"
                                    component={
                                        importedRoutes.Backend.Manager.Skills
                                            .Index
                                    }
                                />

                                <Route
                                    path="/:manager/projects/:id/edit"
                                    component={
                                        importedRoutes.Backend.Manager.Projects
                                            .Edit
                                    }
                                />
                                <Route
                                    path="/:manager/projects/add"
                                    component={
                                        importedRoutes.Backend.Manager.Projects
                                            .Add
                                    }
                                />
                                <Route
                                    path="/:manager/projects"
                                    component={
                                        importedRoutes.Backend.Manager.Projects
                                            .Index
                                    }
                                />

                                <Route
                                    path="/:manager/technologies/:id/edit"
                                    component={
                                        importedRoutes.Backend.Manager
                                            .Technologies.Edit
                                    }
                                />
                                <Route
                                    path="/:manager/technologies/add"
                                    component={
                                        importedRoutes.Backend.Manager
                                            .Technologies.Add
                                    }
                                />
                                <Route
                                    path="/:manager/technologies"
                                    component={
                                        importedRoutes.Backend.Manager
                                            .Technologies.Index
                                    }
                                />

                                <Redirect
                                    path="/admin"
                                    to={`/admin/dashboard`}
                                />
                                <Redirect path="/user" to={`/user/dashboard`} />
                            </Switch>
                        </BackendManagerLayout>
                    </Route>

                    <Redirect path="/dashboard" to={`/${role}/dashboard`} />
                    <Redirect path="/login" to={`/${role}/dashboard`} />
                    <Redirect path="/start" to={`/${role}/dashboard`} />
                    <Redirect path="/auth" to={`/${role}/dashboard`} />

                    {frontendRoutes}
                </Switch>
            );
        }

        routes = (
            <ErrorBoundary>
                <Suspense
                    fallback={
                        <Loading
                            waiting
                            isAuthenticated={
                                isAuthenticated &&
                                (pathname.includes("/user/") ||
                                    pathname.includes("/admin/"))
                            }
                        />
                    }
                >
                    {routes}
                </Suspense>
            </ErrorBoundary>
        );

        const dataReady =
            cms !== undefined &&
            countries !== undefined &&
            ((isAuthenticated && role !== undefined) || !isAuthenticated);

        return <div className="App">{dataReady ? routes : <Spinner />}</div>;
    }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
    authCheckState: () => dispatch(authCheckState()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
