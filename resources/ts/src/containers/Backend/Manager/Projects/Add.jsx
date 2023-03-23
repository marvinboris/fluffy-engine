import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CustomInput } from 'reactstrap';

// Components
import Save from '../../../../components/Backend/UI/Form/Save';

import Input from '../../../../components/UI/Input';
import { updateObject } from '../../../../shared/utility';

import actions from '../../../../store/actions/backend/projects';
import * as utility from '../utility';

const initialState = {
    title: {},
    description: {},
    date: '',
    experience_id: '',
    technologies: [],
    github: '',
    link: '',

    translate: import.meta.env.VITE_DEFAULT_LANG,

    add: false,
}

class Add extends Component {
    state = { ...initialState, isMounted: false }

    // Component methods
    resetState = () => this.setState({ ...initialState })
    saveAddHandler = () => utility.add.component.saveAddHandler(this.setState.bind(this), this.props)
    inputChangeHandler = e => {
        const { name, id, checked } = e.target;
        if (name.includes('technologies_check')) {
            let technologies = [...this.state.technologies];
            const [, technology_id] = id.split('-');

            if (checked) technologies.push(technology_id);
            else technologies = technologies.filter(technology => +technology !== +technology_id);

            return this.setState({ technologies });
        }
        return utility.add.component.inputChangeHandler(this.state, this.setState.bind(this))(e);
    }

    // Lifecycle methods
    componentDidMount() { utility.add.lifecycle.componentDidMount(this.props, this.setState.bind(this)) }
    componentDidUpdate(prevProps) { utility.add.lifecycle.componentDidUpdate('projects', 'project')(prevProps, this.props, this.state, this.setState.bind(this), this.resetState) }
    componentWillUnmount() { this.props.reset() }
    render() {
        const {
            content: {
                cms: {
                    pages: { backend: { pages: { projects: { form } } } }
                },
                languages
            },
            backend: { projects: { experiences = [], technologies: all_technologies = [] } },
        } = this.props;
        const { title, description, date, github, link, experience_id, translate, technologies } = this.state;
        const lang = localStorage.getItem('backend_lang');

        const languagesOptions = languages.map(language => <option key={JSON.stringify(language)} value={language.abbr}>{language.name}</option>);
        const experiencesOptions = experiences.map(experience => updateObject(experience, { company: experience.company[lang] })).sort((a, b) => a.company.localeCompare(b.company)).map(experience => <option key={JSON.stringify(experience)} value={experience.id}>{experience.company}</option>);
        const technologiesItems = all_technologies.sort((a, b) => a.name.localeCompare(b.name)).map(technology => {
            const checked = technologies.find(t => +t === +technology.id) !== undefined;

            return <div className='col-6 col-md-4 col-lg-3 col-xl-2' key={JSON.stringify(technology)}>
                <CustomInput type="switch" id={`technology-${technology.id}`} className="col-md-6" checked={checked} name={`technologies_check[]`} onChange={this.inputChangeHandler} label={<span className="text-400">{technology.name}</span>} />
                {checked && <input type='hidden' name='technologies[]' defaultValue={+technology.id} />}
            </div>
        });

        const content = <>
            {this.props.edit && <input type="hidden" name="_method" defaultValue="PATCH" />}

            <div className='row'>
                <div className="col-lg-9">
                    <div className="row">
                        {languages.map(l => <Fragment key={'language-' + l.abbr}>
                            <Input type="text" id={"title-" + l.abbr} className={"col-12" + (l.abbr === translate ? "" : " d-none")} onChange={this.inputChangeHandler} value={title[l.abbr]} name={"title[" + l.abbr + "]"} required label={form.title} />
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
                        <Input type="date" className="col-lg-6" onChange={this.inputChangeHandler} name="date" value={date} required label={form.date} />
                        <Input type="select" className="col-lg-6" name="experience_id" label={form.experience} onChange={this.inputChangeHandler} required value={experience_id}>
                            <option>{form.select_experience}</option>
                            {experiencesOptions}
                        </Input>
                        <Input type="url" className="col-12" onChange={this.inputChangeHandler} name="github" value={github} required label={form.github} />
                        <Input type="url" className="col-12" onChange={this.inputChangeHandler} name="link" value={link} required label={form.link} />
                        <div className='form-group col-12'>
                            <div className='technologies-title'>{form.technologies_title}</div>
                            <div className='row'>{technologiesItems}</div>
                        </div>
                    </div>
                </div>

                <Save edit={this.props.edit} saveAddHandler={this.saveAddHandler} />
            </div>
        </>;

        return <utility.add.lifecycle.render className='Projects' props={this.props} state={this.state} resource={'projects'}>
            {content}
        </utility.add.lifecycle.render>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: id => dispatch(actions.show(id)),
    info: () => dispatch(actions.info()),
    post: data => dispatch(actions.post(data)),
    patch: (id, data) => dispatch(actions.patch(id, data)),
    reset: () => dispatch(actions.reset()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));