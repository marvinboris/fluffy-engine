import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Loading from '../../../components/UI/Preloaders/Loading';

import Table from '../../../components/Frontend/UI/Table';
import SectionTitle from '../../../components/Frontend/UI/Title/SectionTitle';

import { getPortfolio, resetPortfolio } from '../../../store/actions/frontend/portfolio';
import { updateObject } from '../../../shared/utility';

import './Portfolio.scss';

class Portfolio extends Component {
    state = {
        isMounted: false,
    }


    
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
                    pages: { frontend: { pages: { portfolio: cms } } }
                },
            },
            frontend: { portfolio: { loading, projects = [] }, }
        } = this.props;
        const { isMounted } = this.state;
        const lang = localStorage.getItem('frontend_lang');

        if (!this.state.isMounted) document.title = `${this.props.content.cms.pages.frontend.header.menu.portfolio} | ${document.head.querySelector('meta[name="base-title"]').content}`;

        const data = projects.map(project => updateObject(project, {
            year: (new Date(project.date)).getFullYear(),
            title: project.title[lang],
            made_at: project.made_at[lang] || project.made_at,
            technologies: project.technologies.map(technology => <span key={JSON.stringify(technology)} className='technology'>{technology.name}</span>),
            links: <>
                {project.github && <a href={project.github} target="_blank" className='fab fa-github' />}
                {project.link && <a href={project.link} target="_blank" className='fas fa-external-link-alt' />}
            </>,
        }));

        return <Loading loading={isMounted && loading}>
            <div className="Portfolio">
                <section className='portfolio'>
                    <div className='container'>
                        <SectionTitle {...cms} />

                        <Table dark borderless sl={false} array={data} fields={[
                            { name: cms.table.year, key: 'year', className: 'year' },
                            { name: cms.table.title, key: 'title', className: 'title' },
                            { name: cms.table.made_at, key: 'made_at' },
                            { name: cms.table.technologies, key: 'technologies', className: 'technologies' },
                            { name: cms.table.links, key: 'links', className: 'links' },
                        ]} />
                    </div>
                </section>
            </div>
        </Loading>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(getPortfolio()),
    reset: () => dispatch(resetPortfolio()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Portfolio));