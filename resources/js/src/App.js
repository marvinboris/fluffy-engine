import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from 'aos';

import ErrorBoundary from './hoc/ErrorBoundary';

import AuthUserLayout from './containers/Auth/User/Layout';
import AuthAdminLayout from './containers/Auth/Admin/Layout';
import FrontendLayout from './containers/Frontend/Layout';
import BackendManagerLayout from './containers/Backend/Manager/Layout';

import Spinner from './components/UI/Preloaders/Spinner';
import Loading from './components/UI/Preloaders/Loading';

import { authCheckState } from './store/actions/auth';

import 'aos/dist/aos.css';

// Manager routes
const asyncManagerCmsGlobal = lazy(() => import('./containers/Backend/Manager/Cms/Global'));
const asyncManagerCmsGeneral = lazy(() => import('./containers/Backend/Manager/Cms/General'));
const asyncManagerCmsAuth = lazy(() => import('./containers/Backend/Manager/Cms/Auth'));
const asyncManagerCmsBackend = lazy(() => import('./containers/Backend/Manager/Cms/Backend'));
const asyncManagerCmsFrontend = lazy(() => import('./containers/Backend/Manager/Cms/Frontend'));

const asyncManagerDashboard = lazy(() => import('./containers/Backend/Manager/Dashboard'));

const asyncManagerFeatures = lazy(() => import('./containers/Backend/Manager/Features'));
const asyncManagerFeaturesAdd = lazy(() => import('./containers/Backend/Manager/Features/Add'));
const asyncManagerFeaturesEdit = lazy(() => import('./containers/Backend/Manager/Features/Edit'));

const asyncManagerLanguages = lazy(() => import('./containers/Backend/Manager/Languages'));
const asyncManagerLanguagesAdd = lazy(() => import('./containers/Backend/Manager/Languages/Add'));
const asyncManagerLanguagesEdit = lazy(() => import('./containers/Backend/Manager/Languages/Edit'));

const asyncManagerRoles = lazy(() => import('./containers/Backend/Manager/Roles'));
const asyncManagerRolesAdd = lazy(() => import('./containers/Backend/Manager/Roles/Add'));
const asyncManagerRolesEdit = lazy(() => import('./containers/Backend/Manager/Roles/Edit'));

const asyncManagerSettingsLanguage = lazy(() => import('./containers/Backend/Manager/Settings/Language'));

const asyncManagerUsers = lazy(() => import('./containers/Backend/Manager/Users'));
const asyncManagerUsersAdd = lazy(() => import('./containers/Backend/Manager/Users/Add'));
const asyncManagerUsersEdit = lazy(() => import('./containers/Backend/Manager/Users/Edit'));

const asyncManagerExperiences = lazy(() => import('./containers/Backend/Manager/Experiences'));
const asyncManagerExperiencesAdd = lazy(() => import('./containers/Backend/Manager/Experiences/Add'));
const asyncManagerExperiencesEdit = lazy(() => import('./containers/Backend/Manager/Experiences/Edit'));

const asyncManagerSkills = lazy(() => import('./containers/Backend/Manager/Skills'));
const asyncManagerSkillsAdd = lazy(() => import('./containers/Backend/Manager/Skills/Add'));
const asyncManagerSkillsEdit = lazy(() => import('./containers/Backend/Manager/Skills/Edit'));

const asyncManagerProjects = lazy(() => import('./containers/Backend/Manager/Projects'));
const asyncManagerProjectsAdd = lazy(() => import('./containers/Backend/Manager/Projects/Add'));
const asyncManagerProjectsEdit = lazy(() => import('./containers/Backend/Manager/Projects/Edit'));

const asyncManagerTechnologies = lazy(() => import('./containers/Backend/Manager/Technologies'));
const asyncManagerTechnologiesAdd = lazy(() => import('./containers/Backend/Manager/Technologies/Add'));
const asyncManagerTechnologiesEdit = lazy(() => import('./containers/Backend/Manager/Technologies/Edit'));

// Admin routes
const asyncAdminAdmins = lazy(() => import('./containers/Backend/Admin/Admins'));
const asyncAdminAdminsAdd = lazy(() => import('./containers/Backend/Admin/Admins/Add'));
const asyncAdminAdminsEdit = lazy(() => import('./containers/Backend/Admin/Admins/Edit'));

// Auth routes
const asyncAuthUserLogin = lazy(() => import('./containers/Auth/User/Login'));

const asyncAuthAdminLogin = lazy(() => import('./containers/Auth/Admin/Login'));
const asyncAuthAdminVerify = lazy(() => import('./containers/Auth/Admin/Verify'));

// Frontend routes
const asyncHome = lazy(() => import('./containers/Frontend/Home'));
const asyncAbout = lazy(() => import('./containers/Frontend/About'));
const asyncSkills = lazy(() => import('./containers/Frontend/Skills'));
const asyncPortfolio = lazy(() => import('./containers/Frontend/Portfolio'));
const asyncContact = lazy(() => import('./containers/Frontend/Contact'));

class App extends Component {
    componentDidMount() {
        this.props.authCheckState();
        init();
    }

    render() {
        const { content: { cms, error: content_error, countries }, auth: { error: auth_error, role }, location: { pathname } } = this.props;
        const isAuthenticated = localStorage.getItem('token') !== null;
        if (
            (content_error && (content_error.message.includes("Server Error" || "[1045] Access denied for user"))) ||
            (auth_error && (auth_error.message.includes("Server Error" || "[1045] Access denied for user" || "No application encryption key has been specified.")))
        ) location.reload();

        const frontendRoutes = <Route path="/">
            <FrontendLayout>
                <Switch>
                    <Route path="/contact" component={asyncContact} />
                    <Route path="/portfolio" component={asyncPortfolio} />
                    <Route path="/skills" component={asyncSkills} />
                    <Route path="/about" component={asyncAbout} />
                    <Route path="/" component={asyncHome} />
                </Switch>
            </FrontendLayout>
        </Route>;

        let routes = <Switch>
            <Route path="/auth/admin">
                <AuthAdminLayout>
                    <Switch>
                        <Route path="/auth/admin/verify" component={asyncAuthAdminVerify} />
                        <Route path="/auth/admin/login" component={asyncAuthAdminLogin} />
                    </Switch>
                </AuthAdminLayout>
            </Route>
            <Redirect path="/admin" to="/auth/admin/login" />

            <Route path="/auth/user">
                <AuthUserLayout>
                    <Switch>
                        <Route path="/auth/user/login" component={asyncAuthUserLogin} />
                    </Switch>
                </AuthUserLayout>
            </Route>
            <Redirect path="/user" to="/auth/user/login" />

            {frontendRoutes}
        </Switch>;

        if (isAuthenticated) {
            routes = <Switch>
                <Route path={['/user', '/admin']}>
                    <BackendManagerLayout>
                        <Switch>
                            <Route path="/admin/admins/:id/edit" component={asyncAdminAdminsEdit} />
                            <Route path="/admin/admins/add" component={asyncAdminAdminsAdd} />
                            <Route path="/admin/admins" component={asyncAdminAdmins} />

                            <Route path="/:manager/cms/global" component={asyncManagerCmsGlobal} />
                            <Route path="/:manager/cms/general" component={asyncManagerCmsGeneral} />
                            <Route path="/:manager/cms/auth" component={asyncManagerCmsAuth} />
                            <Route path="/:manager/cms/backend" component={asyncManagerCmsBackend} />
                            <Route path="/:manager/cms/frontend" component={asyncManagerCmsFrontend} />

                            <Route path="/:manager/dashboard" component={asyncManagerDashboard} />

                            <Route path="/:manager/features/:id/edit" component={asyncManagerFeaturesEdit} />
                            <Route path="/:manager/features/add" component={asyncManagerFeaturesAdd} />
                            <Route path="/:manager/features" component={asyncManagerFeatures} />

                            <Route path="/:manager/languages/:id/edit" component={asyncManagerLanguagesEdit} />
                            <Route path="/:manager/languages/add" component={asyncManagerLanguagesAdd} />
                            <Route path="/:manager/languages" component={asyncManagerLanguages} />

                            <Route path="/:manager/roles/:id/edit" component={asyncManagerRolesEdit} />
                            <Route path="/:manager/roles/add" component={asyncManagerRolesAdd} />
                            <Route path="/:manager/roles" component={asyncManagerRoles} />

                            <Route path="/:manager/settings/language" component={asyncManagerSettingsLanguage} />

                            <Route path="/:manager/users/:id/edit" component={asyncManagerUsersEdit} />
                            <Route path="/:manager/users/add" component={asyncManagerUsersAdd} />
                            <Route path="/:manager/users" component={asyncManagerUsers} />



                            <Route path="/:manager/experiences/:id/edit" component={asyncManagerExperiencesEdit} />
                            <Route path="/:manager/experiences/add" component={asyncManagerExperiencesAdd} />
                            <Route path="/:manager/experiences" component={asyncManagerExperiences} />

                            <Route path="/:manager/skills/:id/edit" component={asyncManagerSkillsEdit} />
                            <Route path="/:manager/skills/add" component={asyncManagerSkillsAdd} />
                            <Route path="/:manager/skills" component={asyncManagerSkills} />

                            <Route path="/:manager/projects/:id/edit" component={asyncManagerProjectsEdit} />
                            <Route path="/:manager/projects/add" component={asyncManagerProjectsAdd} />
                            <Route path="/:manager/projects" component={asyncManagerProjects} />

                            <Route path="/:manager/technologies/:id/edit" component={asyncManagerTechnologiesEdit} />
                            <Route path="/:manager/technologies/add" component={asyncManagerTechnologiesAdd} />
                            <Route path="/:manager/technologies" component={asyncManagerTechnologies} />



                            <Redirect path="/admin" to={`/admin/dashboard`} />
                            <Redirect path="/user" to={`/user/dashboard`} />
                        </Switch>
                    </BackendManagerLayout>
                </Route>

                <Redirect path="/dashboard" to={`/${role}/dashboard`} />
                <Redirect path="/login" to={`/${role}/dashboard`} />
                <Redirect path="/start" to={`/${role}/dashboard`} />
                <Redirect path="/auth" to={`/${role}/dashboard`} />

                {frontendRoutes}
            </Switch>;
        }

        routes = <ErrorBoundary>
            <Suspense fallback={<Loading waiting isAuthenticated={isAuthenticated && (pathname.includes('/user/') || pathname.includes('/admin/'))} />}>
                {routes}
            </Suspense>
        </ErrorBoundary>;

        const dataReady = cms !== undefined && countries !== undefined && ((isAuthenticated && role !== undefined) || !isAuthenticated);

        return <div className='App'>{dataReady ? routes : <Spinner />}</div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    authCheckState: () => dispatch(authCheckState()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
