import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// Preloaders
import Loading from '../../../components/UI/Preloaders/Loading';

// Animations
import TagCanvas from '../../../components/Frontend/UI/Animation/TagCanvas';
import Particles from '../../../components/Frontend/UI/Animation/Particles';

// UI Components
import Input from '../../../components/UI/Input';
import Form from '../../../components/Frontend/UI/Form';
import SectionTitle from '../../../components/Frontend/UI/Title/SectionTitle';
import ProjectBlock from '../../../components/Frontend/UI/Blocks/ProjectBlock';

// App messages
import Error from '../../../components/Messages/Error';
import Feedback from '../../../components/Messages/Feedback';

import { getHome, resetHome } from '../../../store/actions/frontend/home';
import { postContact, resetContact } from '../../../store/actions/frontend/contact';

import './Home.scss';

const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

class Home extends Component {
    state = { ...initialState, isMounted: false }



    // Component methods
    saveHandler = e => {
        e.preventDefault();
        if (!this.props.frontend.contact.loading) this.props.post(e.target);
    }

    inputChangeHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }



    // Lifecycle methods
    componentDidMount() {
        this.props.get();
        this.setState({ isMounted: true });
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.frontend.contact.message && this.props.frontend.contact.message && this.props.frontend.contact.message.type === 'success') this.setState({ ...initialState });
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        const {
            content: {
                cms: {
                    pages: { frontend: { pages: { home: cms } } }
                }, all_technologies
            },
            frontend: { home: { loading, technologies = [], projects = [] }, contact: { loading: contact_loading, error, message: backend_message } }
        } = this.props;
        const { name, email, subject, message, isMounted } = this.state;

        if (!this.state.isMounted) document.title = `${document.head.querySelector('meta[name="base-title"]').content}`;

        const projectsContent = projects.map(project => <div key={`ProjectBlock-${JSON.stringify(project)}`} className='col-lg-6 col-xl-4 pb-3'><ProjectBlock {...project} /></div>);
        const technologiesContent = technologies.map(technology => <li key={JSON.stringify(technology)}>{technology.name}</li>);

        return <Loading loading={isMounted && loading}>
            <div className="Home">
                <div className='banner'>
                    <div className='particles'>
                        <Particles />
                    </div>

                    <div className="banner__container">
                        <div className="banner__text container">
                            <div>
                                <div className='title'>
                                    <div className='hi'>{cms.banner.greetings.hi},</div>
                                    <div className='im-boris' dangerouslySetInnerHTML={{ __html: `${cms.banner.greetings.im_boris},` }} />
                                    <div className='web-developer'>{cms.banner.greetings.web_developer}</div>
                                </div>

                                <p className='presentation'>
                                    {cms.banner.presentation}
                                </p>

                                <Link to='/contact' className='btn btn-outline-blue'>{cms.banner.contact}</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <section className='about'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 text'>
                                <SectionTitle {...cms.about} />

                                <p dangerouslySetInnerHTML={{ __html: cms.about.description }} />

                                <ul>{technologiesContent}</ul>
                            </div>

                            <div className='col-lg-6 canvas'>
                                {all_technologies.length > 0 && <TagCanvas listItems={all_technologies} />}
                            </div>
                        </div>
                    </div>
                </section>

                <section className='portfolio'>
                    <div className='container'>
                        <SectionTitle {...cms.portfolio} />

                        <div className='row'>
                            <div className='col-lg-9'>
                                <p dangerouslySetInnerHTML={{ __html: cms.portfolio.description }} />
                            </div>

                            <div className='col-lg-3'>
                                <div className='view-all'>
                                    <Link to={'/portfolio'} className='btn btn-outline-blue'>{cms.portfolio.view_all}</Link>
                                </div>
                            </div>
                        </div>

                        <div className='row projects'>
                            {projectsContent}
                        </div>
                    </div>
                </section>

                <section className='contact'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 pb-4'>
                                <SectionTitle {...cms.contact} />

                                <p dangerouslySetInnerHTML={{ __html: cms.contact.description }} />

                                <Error err={error} />
                                <Feedback message={backend_message} />

                                <Form loading={contact_loading} onSubmit={this.saveHandler}>
                                    <div className="row">
                                        <Input type='text' name='name' className="col-md-6" onChange={this.inputChangeHandler} value={name} placeholder={cms.contact.form.name} disabled={contact_loading} />
                                        <Input type='email' name='email' className="col-md-6" onChange={this.inputChangeHandler} value={email} placeholder={cms.contact.form.email} disabled={contact_loading} />
                                        <Input type='text' name='subject' className="col-12" onChange={this.inputChangeHandler} value={subject} placeholder={cms.contact.form.subject} disabled={contact_loading} />
                                        <Input type='textarea' name='message' className="col-12" onChange={this.inputChangeHandler} value={message} placeholder={cms.contact.form.message} required disabled={contact_loading} />
                                    </div>

                                    <div className='submit'>
                                        <button className={'btn btn-outline-blue' + (contact_loading ? ' btn-disabled' : '')}>{cms.contact.form.submit}</button>
                                    </div>
                                </Form>
                            </div>

                            <div className='col-lg-6'>
                                <iframe src="https://www.google.com/maps/d/embed?mid=15g6t8KC3sMecpCT5OQRICy613do0R7Y&ehbc=2E312F" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
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
    get: () => dispatch(getHome()),
    post: data => dispatch(postContact(data)),
    reset: () => {
        dispatch(resetHome());
        dispatch(resetContact());
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));