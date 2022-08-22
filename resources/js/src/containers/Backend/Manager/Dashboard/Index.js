import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

// Components
import Loading from '../../../../components/UI/Preloaders/Loading';

import Error from '../../../../components/Messages/Error';
import Feedback from '../../../../components/Messages/Feedback';

import PageTitle from '../../../../components/Backend/UI/Title/PageTitle';
import Breadcrumb from '../../../../components/Backend/UI/Title/Breadcrumb';

import OwlCarousel from '../../../../components/UI/OwlCarousel';

import Card from './Card';
import GeneralReportTracker from './GeneralReportTracker';

import { updateObject } from '../../../../shared/utility';
import { getDashboard, resetDashboard } from '../../../../store/actions/backend/dashboard';

import './Dashboard.scss';

class Dashboard extends Component {
    state = { isMounted: false }



    // Lifecycle methods
    componentDidMount() {
        this.props.get();
        this.setState({ isMounted: true });
    }

    componentWillUnmount() {
        this.props.reset()
    }

    render() {
        const {
            auth: { role },
            content: {
                cms: {
                    pages: { backend: { pages: { dashboard: { [role]: { icon, title, subtitle, blocks, general_report } } } } }
                }
            },
            backend: { dashboard: { loading, error, message, blocksData = {}, generalReport = {}, generalReportTrackerData = [] } },
        } = this.props;

        if (!this.state.isMounted) document.title = `${this.props.content.cms.pages.backend.sidebar.menu.dashboard.title} | ${document.head.querySelector('meta[name="base-title"]').content}`;

        let content = null;
        const errors = <Error err={error} />;
        const flash = this.props.location.state ? <Feedback time={5000} message={this.props.location.state.message} /> : null;
        const feedback = <Feedback message={message} />;

        const cardsContent = [
            {
                title: blocks.experiences,
                value: <span className='text-700 text-22'>{blocksData.experiences}</span>,
                icon: 'fas fa-flask',
            },
            {
                title: blocks.skills,
                value: <span className='text-700 text-22'>{blocksData.skills}</span>,
                icon: 'fas fa-chalkboard-teacher',
            },
            {
                title: blocks.projects,
                value: <span className='text-700 text-22'>{blocksData.projects}</span>,
                icon: 'fas fa-project-diagram',
            },
            {
                title: blocks.technologies,
                value: <span className='text-700 text-22'>{blocksData.technologies}</span>,
                icon: 'fas fa-microchip',
            },
        ].map((card, index) => <Card key={index} {...updateObject(card, { color: window.COLORS[index], addon: <i className={`${card.icon} fa-fw text-31 text-${window.COLORS[index]}`} /> })} />);

        content = <div className='content'>
            {errors}
            {flash}
            {feedback}

            <div className='blocks'>
                <Row className='d-none d-md-flex mb-5'>
                    {cardsContent}
                </Row>

                <div className='d-md-none'>
                    <OwlCarousel options={{
                        items: 1,
                        center: false,
                        loop: true,
                        dots: true,
                    }}>
                        {cardsContent}
                    </OwlCarousel>
                </div>
            </div>

            <section className='general-report shadow'>
                <div className='icon'><i className='far fa-chart-bar' /></div>

                <div className='flex-fill'>
                    <div className='header'>
                        <div>
                            <div className='title'>{general_report.title}<i className='fas fa-info-circle' /></div>

                            <div className='subtitle'>{general_report.subtitle}</div>

                            <div className='bold-line' />
                        </div>
                    </div>

                    <div className='body'>
                        <div className='row align-items-center'>
                            <div className='col-lg-4'>
                                <div className='total-projects'>
                                    <div className='text'>{general_report.total_projects}</div>

                                    <div className='value'>{generalReport.projects}</div>
                                </div>
                            </div>

                            <div className='general-report-tracker col-lg-8'>
                                <GeneralReportTracker data={generalReportTrackerData} cms={general_report} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>;

        return <div className='Dashboard'>
            <PageTitle title={title} subtitle={subtitle} icon={icon}>
                <Breadcrumb main={title} />
            </PageTitle>

            <Loading loading={this.state.isMounted && loading} isAuthenticated>
                {content}
            </Loading>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(getDashboard()),
    reset: () => dispatch(resetDashboard()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));