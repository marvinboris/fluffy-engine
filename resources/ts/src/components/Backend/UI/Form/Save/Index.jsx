import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Save.scss';

class Save extends Component {
    render() {
        const {
            content: { cms: { pages: { backend: { components: { form: { save, save_add } } } } } },
            saveAddHandler, edit
        } = this.props;

        return <div className="Save col-12">
            <button className={`btn btn-${window.APP_PRIMARY_COLOR}`}>{save}<i className="fas fa-save" /></button>

            {!edit && <button onClick={saveAddHandler} className={`btn btn-${window.APP_SECONDARY_COLOR} add`}>{save_add}<i className="fas fa-save" /></button>}
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Save);