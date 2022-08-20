import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Components
import Action from '../../../../components/Backend/UI/List/Action';

import actions from '../../../../store/actions/backend/experiences';
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
                    pages: { backend: { components: { list: { action } }, pages: { experiences: { form } } } }
                }
            },
            backend: { experiences: { experiences = [] } },
        } = this.props;
        const lang = localStorage.getItem('backend_lang');

        const data = experiences.map(experience => {
            return updateObject(experience, {
                title: experience.title[lang],
                company: experience.company[lang],
                description: experience.description[lang],
                created_at: convertDate(experience.created_at),
                action: <Action props={this.props} resource='experiences' item={experience} />,
            });
        });

        return <utility.index.lifecycle.render className='Experiences' props={this.props} state={this.state} resource='experiences' data={data} fields={[
            { name: form.title, key: 'title' },
            { name: form.company, key: 'company' },
            { name: form.description, key: 'description' },
            { name: form.start_year, key: 'start_year' },
            { name: form.end_year, key: 'end_year' },
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