import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Loading from '../../../components/UI/Preloaders/Loading';

import SectionTitle from '../../../components/Frontend/UI/Title/SectionTitle';

import { getSkills, resetSkills } from '../../../store/actions/frontend/skills';

import './Skills.scss';

class Skills extends Component {
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
                    pages: { frontend: { pages: { skills: cms } } }
                },
            },
            frontend: { skills: { loading, skills = [], experiences = [] }, }
        } = this.props;
        const { isMounted } = this.state;
        const lang = localStorage.getItem('frontend_lang');

        if (!this.state.isMounted) document.title = `${this.props.content.cms.pages.frontend.header.menu.skills} | ${document.head.querySelector('meta[name="base-title"]').content}`;

        const skillsContent = skills.map((skill, index) => {
            return <div key={JSON.stringify(skill)} className="skill" style={{ "--skills-skill-i": index + 1 }}>
                <div className='title'>{skill.name}</div>

                <div className='bar-wrapper'>
                    <div className={`bar bg-${window.COLORS[index]}`} style={{ width: `${skill.percentage}%` }} />
                </div>
            </div>
        });

        const experiencesContent = experiences.map(experience => {
            return <div key={JSON.stringify(experience)} className='col'>
                <div className='experience'>
                    <div className='title'>{experience.title[lang]}</div>

                    <div className='company'>{experience.company[lang]}</div>
                    <div className='duration'>{experience.duration}</div>

                    <div className='description'>{experience.description[lang]}</div>
                </div>
            </div>
        });

        return <Loading loading={isMounted && loading}>
            <div className="Skills">
            <section className='skills'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 text'>
                            <SectionTitle {...cms} />

                            <p dangerouslySetInnerHTML={{ __html: cms.description }} />
                        </div>

                        <div className='col-lg-6'>
                            <div className='skills-list'>
                                {skillsContent}
                            </div>

                            <div className='experience-list'>
                                <div className='row'>
                                    {experiencesContent}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </Loading>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(getSkills()),
    reset: () => dispatch(resetSkills()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Skills));