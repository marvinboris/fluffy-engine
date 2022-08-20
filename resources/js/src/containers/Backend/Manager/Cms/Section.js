import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Components
import Loading from '../../../../components/UI/Preloaders/Loading';

import Error from '../../../../components/Messages/Error';
import Feedback from '../../../../components/Messages/Feedback';

import Form from '../../../../components/Backend/UI/Form';
import PageTitle from '../../../../components/Backend/UI/Title/PageTitle';
import Breadcrumb from '../../../../components/Backend/UI/Title/Breadcrumb';

import Input from '../../../../components/UI/Input';
import { LanguageWithPages } from './utility';

import { getCms, patchCms, resetCms } from '../../../../store/actions/backend/cms';
import { updateObject } from '../../../../shared/utility';

class Auth extends Component {
    state = {
        abbr: process.env.MIX_DEFAULT_LANG,
        isMounted: false,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.backend.cms.cms && prevState.app_name === '') {
            const { backend: { cms: { cms: { [nextProps.name]: section } } } } = nextProps;
            return updateObject(prevState, { ...section });
        }
        return prevState;
    }

    async componentDidMount() {
        this.props.reset();
        this.props.get();
        this.setState({ isMounted: true });
    }

    componentWillUnmount() {
        this.props.reset();
    }

    submitHandler = async e => {
        e.preventDefault();
        await this.props.patch(this.props.name, e.target);
    }

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        this.setState({ [name]: files ? files[0] : value });
    }

    render() {
        const {
            name,
            content: {
                cms: {
                    pages: { backend: { components: { form: { save } }, pages: { cms: { icon, title, [name]: sectionTitle } } } }
                }
            },
            backend: { cms: { loading, error, message, cmsExample, cms, languages = [] } },
            auth: { role }
        } = this.props;
        const { abbr } = this.state;

        const errors = <Error err={error} />;

        const languagesOptions = languages.map(language => <option key={Math.random() + JSON.stringify(language)} value={language.abbr}>{language.name}</option>);

        const mainContent = languages.map(language => {
            const data = cms.pages[language.abbr][name];
            const cmsValue = { ...data.pages };
            Object.keys(data).filter(key => key !== 'pages').forEach(key => cmsValue[key] = data[key]);

            return <div key={Math.random()} className={language.abbr === abbr ? "" : "d-none"}>
                <LanguageWithPages cmsExample={cmsExample.pages[process.env.MIX_DEFAULT_LANG][name]} cmsValue={cmsValue} language={language} part={name} />
            </div>;
        });

        const content = <div>
            <Feedback message={message} />

            <input type="hidden" name="_method" defaultValue="PATCH" />

            <div className='row'>
                <div className="col-md-4">
                    <Input type="select" name="abbr" label={'Lang'} onChange={this.inputChangeHandler} value={abbr} validation={null}>
                        {languagesOptions}
                    </Input>
                </div>
            </div>

            <div>{mainContent}</div>

            <div style={{ marginTop: 40 }}>
                <button className={`btn btn-${window.APP_PRIMARY_COLOR}`}>{save}<i className='fas fa-save' /></button>
            </div>
        </div>;

        return <div className={`Cms ${this.props.className || ''}`}>
            <PageTitle title={title} subtitle={sectionTitle} icon={icon}>
                <Breadcrumb main={sectionTitle} />
            </PageTitle>

            <Loading loading={this.state.isMounted && loading} isAuthenticated>
                <div className='content'>
                    {errors}
                    <Form onSubmit={this.submitHandler} icon={icon} title={sectionTitle} link={`/${role}/cms`} innerClassName="row">
                        {content}
                    </Form>
                </div>
            </Loading>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(getCms()),
    patch: (section, data) => dispatch(patchCms(section, data)),
    reset: () => dispatch(resetCms()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));