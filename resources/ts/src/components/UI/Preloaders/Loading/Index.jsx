import React, { Component } from 'react';

import './Loading.scss';

export default class Loading extends Component {
    state = {
        fadedOut: false,
    }

    componentDidUpdate() {
        if (!this.state.fadedOut && !this.props.loading) {
            this.setState({ fadedOut: true });
            $('.UI.Loading').fadeOut(2000);
        }
    }

    render() {
        return <>
            <div className={`UI Loading${this.props.waiting ? " waiting" : ""}${this.props.isAuthenticated ? " is-auth" : ""}`}>
                <div className='logo'>
                    <img src={'/images/logo.png'} />
                </div>

                <div className='marvinboris'><span className='marvin'>M</span>arvin <span className='boris'>B</span>oris</div>

                <div className='loading'>
                    <div className='bar-wrapper'>
                        <div className='bar' />
                    </div>
                </div>
            </div>

            {this.state.fadedOut && this.props.children}
        </>;
    };
}