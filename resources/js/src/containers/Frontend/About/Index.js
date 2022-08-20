import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Loading from '../../../components/UI/Preloaders/Loading';

import TagCanvas from '../../../components/Frontend/UI/Animation/TagCanvas';
import SectionTitle from '../../../components/Frontend/UI/Title/SectionTitle';

import { getAbout, resetAbout } from '../../../store/actions/frontend/about';

import './About.scss';

class About extends Component {
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
                    pages: { frontend: { pages: { about: cms } } }
                }, all_technologies
            },
            frontend: { about: { loading } }
        } = this.props;
        const { isMounted } = this.state;

        return <Loading loading={isMounted && loading}>
            <div className="About">
                <section className='about'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 text'>
                                <SectionTitle {...cms} />

                                <p dangerouslySetInnerHTML={{ __html: cms.description }} />
                            </div>

                            <div className='col-lg-6 canvas'>
                                {all_technologies.length > 0 && <TagCanvas listItems={all_technologies} />}
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
    get: () => dispatch(getAbout()),
    reset: () => dispatch(resetAbout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About));