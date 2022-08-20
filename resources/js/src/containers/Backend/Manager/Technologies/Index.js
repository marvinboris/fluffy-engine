import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Components
import Action from '../../../../components/Backend/UI/List/Action';

import actions from '../../../../store/actions/backend/technologies';
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
                    pages: { backend: { components: { list: { action } }, pages: { technologies: { form } } } }
                }
            },
            backend: { technologies: { technologies = [] } },
        } = this.props;

        const data = technologies.map(technology => {
            return updateObject(technology, {
                created_at: convertDate(technology.created_at),
                action: <Action props={this.props} resource='technologies' item={technology} />,
            });
        });

        return <utility.index.lifecycle.render className='Technologies' props={this.props} state={this.state} resource='technologies' data={data} fields={[
            { name: form.name, key: 'name', className: 'w-100' },
            { name: form.created_at, key: 'created_at' },
            { name: action, key: 'action' }
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