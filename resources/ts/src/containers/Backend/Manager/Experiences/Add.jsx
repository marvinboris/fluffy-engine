import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Components
import Save from '../../../../components/Backend/UI/Form/Save';

import Input from '../../../../components/UI/Input';

import actions from '../../../../store/actions/backend/experiences';
import * as utility from '../utility';

const initialState = {
    title: {},
    company: {},
    description: {},
    start_year: '',
    end_year: '',

    translate: import.meta.env.VITE_DEFAULT_LANG,

    add: false,
}

class Add extends Component {
    state = { ...initialState, isMounted: false }

    // Component methods
    resetState = () => this.setState({ ...initialState })
    saveAddHandler = () => utility.add.component.saveAddHandler(this.setState.bind(this), this.props)
    inputChangeHandler = e => utility.add.component.inputChangeHandler(this.state, this.setState.bind(this))(e)

    // Lifecycle methods
    componentDidMount() { utility.add.lifecycle.componentDidMount(this.props, this.setState.bind(this)) }
    componentDidUpdate(prevProps) { utility.add.lifecycle.componentDidUpdate('experiences', 'experience')(prevProps, this.props, this.state, this.setState.bind(this), this.resetState) }
    componentWillUnmount() { this.props.reset() }
    render() {
        const {
            content: {
                cms: {
                    pages: { backend: { pages: { experiences: { form } } } }
                }
            },
        } = this.props;
        const { title, company, description, start_year, end_year, translate } = this.state;

        const languagesOptions = languages.map(language => <option key={JSON.stringify(language)} value={language.abbr}>{language.name}</option>);

        const content = <>
            {this.props.edit && <input type="hidden" name="_method" defaultValue="PATCH" />}

            <div className='row'>
                <div className="col-lg-9">
                    <div className="row">
                        {languages.map(l => <Fragment key={'language-' + l.abbr}>
                            <Input type="text" id={"title-" + l.abbr} className={"col-lg-6" + (l.abbr === translate ? "" : " d-none")} onChange={this.inputChangeHandler} value={title[l.abbr]} name={"title[" + l.abbr + "]"} required label={form.title} />
                            <Input type="text" id={"company-" + l.abbr} className={"col-lg-6" + (l.abbr === translate ? "" : " d-none")} onChange={this.inputChangeHandler} value={company[l.abbr]} name={"company[" + l.abbr + "]"} required label={form.company} />
                            <Input type="textarea" id={"description-" + l.abbr} className={"col-12" + (l.abbr === translate ? "" : " d-none")} onChange={this.inputChangeHandler} value={description[l.abbr]} name={"description[" + l.abbr + "]"} required label={form.description} />
                        </Fragment>)}
                    </div>
                </div>

                <div className="col-lg-3">
                    <Input type="select" name="translate" label={form.language} onChange={this.inputChangeHandler} value={translate}>
                        {languagesOptions}
                    </Input>
                </div>

                <div className="col-12 mb-3">
                    <hr />
                </div>

                <div className="col-lg-9">
                    <div className='row'>
                        <Input type="number" className="col-lg-6" onChange={this.inputChangeHandler} name="start_year" value={start_year} required label={form.start_year} />
                        <Input type="number" className="col-lg-6" onChange={this.inputChangeHandler} name="end_year" value={end_year} required label={form.end_year} />
                    </div>
                </div>

                <Save edit={this.props.edit} saveAddHandler={this.saveAddHandler} />
            </div>
        </>;

        return <utility.add.lifecycle.render className='Experiences' props={this.props} state={this.state} resource={'experiences'}>
            {content}
        </utility.add.lifecycle.render>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: id => dispatch(actions.show(id)),
    post: data => dispatch(actions.post(data)),
    patch: (id, data) => dispatch(actions.patch(id, data)),
    reset: () => dispatch(actions.reset()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));