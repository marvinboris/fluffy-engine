import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// General
import Loading from '../../../../components/UI/Preloaders/Loading';

import Error from '../../../../components/Messages/Error';
import Feedback from '../../../../components/Messages/Feedback';

import Form from '../../../../components/Backend/UI/Form';
import PageTitle from '../../../../components/Backend/UI/Title/PageTitle';
import Breadcrumb from '../../../../components/Backend/UI/Title/Breadcrumb';

import Input from '../../../../components/UI/Input';

import { getCms, patchCms, resetCms } from '../../../../store/actions/backend/cms';
import { updateObject } from '../../../../shared/utility';

const Separator = ({ sm }) => <div className={`col-12 mb-${sm ? 2 : 3}`} />

const Language = ({ general, language }) => {
    const [value, setValue] = useState(general);

    const onChange = (e, ...deepness) => {
        const valueCopy = { ...value };

        if (deepness.length === 1) {
            valueCopy[deepness[0]] = e.target.value;
            return setValue(valueCopy);
        }

        const subValues = [];
        let subValue = { ...value };
        for (let i = 0; i < deepness.length - 1; i++) {
            const element = deepness[i];
            subValue = subValue[element];
            subValues.push(subValue);
        }
        subValues[subValues.length - 1][deepness[deepness.length - 1]] = e.target.value;
        for (let i = 1; i < deepness.length - 1; i++) {
            const element = deepness[deepness.length - 1 - i];
            const index = subValues.length - 1 - i;
            subValues[index][element] = subValues[index + 1];
        }
        valueCopy[deepness[0]] = subValues[0];

        setValue(valueCopy);
    }

    const prefix = `${language.abbr}[general]`;
    const prefixId = `${language.abbr}-general`;
    const global = ['Date', 'Time', 'Home'].map(item => <Input key={Math.random()} type="text" className="col-md-6 col-lg-4" id={`${prefixId}-${item.toLowerCase()}`} name={`${prefix}[${item.toLowerCase()}]`} label={item} onChange={e => onChange(e, item.toLowerCase())} value={value[item.toLowerCase()]} />);
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((item, index) => <Input key={Math.random()} type="text" className="col-md-6 col-lg-4" id={`${prefixId}-date-${index}`} name={`${prefix}[days][]`} label={item} onChange={e => onChange(e, 'days', index)} value={value.days[index]} />);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((item, index) => <Input key={Math.random()} type="text" className="col-md-6 col-lg-4" id={`${prefixId}-months-${index}`} name={`${prefix}[months][]`} label={item} onChange={e => onChange(e, 'months', index)} value={value.months[index]} />);

    return <div className='row'>
        {global}
        <Separator />

        <div className='col-12'>
            <h4>Week days</h4>
        </div>
        <Separator sm />
        {weekDays}
        <Separator />

        <div className='col-12'>
            <h4>Months</h4>
        </div>
        <Separator sm />
        {months}
    </div>;
};

class General extends Component {
    state = {
        abbr: process.env.MIX_DEFAULT_LANG,
        isMounted: false,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.backend.cms.cms && prevState.app_name === '') {
            const { backend: { cms: { cms: { general } } } } = nextProps;
            return updateObject(prevState, { ...general });
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
        await this.props.patch(e.target);
    }

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        this.setState({ [name]: files ? files[0] : value });
    }

    render() {
        const {
            content: {
                cms: {
                    pages: { backend: { components: { form: { save } }, pages: { cms: { icon, title, general } } } }
                }
            },
            backend: { cms: { loading, error, message, cms, languages = [] } },
            auth: { role }
        } = this.props;
        const { abbr } = this.state;

        const errors = <Error err={error} />;

        const languagesOptions = languages.map(language => <option key={Math.random() + JSON.stringify(language)} value={language.abbr}>{language.name}</option>);

        const mainContent = languages.map(language => <div key={Math.random()} className={language.abbr === abbr ? "" : "d-none"}>
            <Language general={cms.pages[language.abbr].general} language={language} />
        </div>);

        const content = <div>
            <Feedback message={message} />

            <input type="hidden" name="_method" defaultValue="PATCH" />

            <div className='row'>
                <div className="col-md-4">
                    <Input type="select" name="abbr" label={'Lang'} onChange={this.inputChangeHandler} value={abbr}>
                        {languagesOptions}
                    </Input>
                </div>
            </div>

            <hr />

            <div>{mainContent}</div>

            <div style={{ marginTop: 40 }}>
                <button className={`btn btn-${window.APP_PRIMARY_COLOR}`}>{save}<i className='fas fa-save' /></button>
            </div>
        </div>;


        return <div className='Cms General'>
            <PageTitle title={title} subtitle={general} icon={icon}>
                <Breadcrumb main={general} />
            </PageTitle>

            <Loading loading={this.state.isMounted && loading} isAuthenticated>
                <div className='content'>
                    {errors}
                    <Form onSubmit={this.submitHandler} icon={icon} title={general} link={`/${role}/cms`}>
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
    patch: data => dispatch(patchCms('general', data)),
    reset: () => dispatch(resetCms()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(General));