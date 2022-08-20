import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Form.scss';

class Form extends Component {
    render() {
        const {
            content: { cms: { pages: { frontend: { components: { form } } } } },
            loading, children, onSubmit
        } = this.props;

        return <form className='UI Form' onSubmit={onSubmit}>
            {loading && <div className='loading'>
                <div>{form.loading}</div>
            </div>}

            {children}
        </form>;
    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Form);