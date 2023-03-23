import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Components
import Action from '../../../../components/Backend/UI/List/Action';

import actions from '../../../../store/actions/backend/projects';
import { updateObject, convertDate } from '../../../../shared/utility';
import * as utility from '../utility';

class Index extends Component {
    state = { isMounted: false }



    // Lifecycle methods
    componentDidMount() {
        this.props.get();
        this.setState({ isMounted: true });
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        const {
            content: {
                cms: {
                    pages: { backend: { components: { list: { action } }, pages: { projects: { form } } } }
                }
            },
            backend: { projects: { projects = [] } },
        } = this.props;
        const lang = localStorage.getItem('backend_lang');

        const data = projects.map(project => {
            return updateObject(project, {
                title: project.title[lang],
                description: project.description[lang],
                experience: project.experience && project.experience[lang],
                date: convertDate(project.date),
                technologies: project.technologies.map(technology => technology.name).join(' · '),
                links: <>
                    {project.github && <a className={`text-decoration-none text-${window.APP_PRIMARY_COLOR} fab fa-github mr-2`} href={project.github} target="_blank" />}
                    {project.link && <a className={`text-decoration-none text-${window.APP_SECONDARY_COLOR} fas fa-external-link-alt`} href={project.link} target="_blank" />}
                </>,
                created_at: convertDate(project.created_at),
                action: <Action props={this.props} resource='projects' item={project} />,
            });
        });

        return <utility.index.lifecycle.render className='Projects' props={this.props} state={this.state} resource='projects' data={data} fields={[
            { name: form.title, key: 'title' },
            { name: form.description, key: 'description' },
            { name: form.date, key: 'date' },
            { name: form.experience, key: 'experience' },
            { name: form.technologies, key: 'technologies' },
            { name: form.links, key: 'links' },
            { name: form.created_at, key: 'created_at' },
            { name: action, key: 'action', fixed: true }
        ]} />;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: (page, show, search) => dispatch(actions.get(page, show, search)),
    delete: id => dispatch(actions.delete(id)),
    reset: () => dispatch(actions.reset()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));