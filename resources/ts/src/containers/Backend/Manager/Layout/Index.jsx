import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Components
import SideDrawer from './SideDrawer';

import { authLogout } from '../../../../store/actions/auth';

import './Layout.scss';

class Layout extends Component {
    state = {
        selectedItem: '',
    }



    // Component methods
    selectItem = item => this.setState({ selectedItem: item })

    sideDrawerToggle = () => {
        const left = $('.Backend.Manager .SideDrawer').css('left');
        if (left === "0px") {
            $('.Backend.Manager .SideDrawer').animate({ left: '-100%' });
            $('.Backend.Manager .SideDrawer .backdrop').hide();
        }
        else {
            $('.Backend.Manager .SideDrawer').animate({ left: 0 });
            $('.Backend.Manager .SideDrawer .backdrop').show();
        }
    }



    // Lifecycle methods
    render() {
        let {
            content: {
                cms
            },
            auth: { data },
            children
        } = this.props;
        const { selectedItem } = this.state;

        return (
            <div className='Backend Manager'>
                <SideDrawer props={this.props} toggle={this.sideDrawerToggle} selectItem={this.selectItem} selectedItem={selectedItem} />

                <div className='main'>
                    <div className='sticky-top'>
                        <div className='d-flex flex-fill'>
                            <div className='d-md-none'>
                                <i className='cursor-pointer fas fa-th-large text-30' onClick={this.sideDrawerToggle} />
                            </div>
                        </div>

                        <div className='user-info'>
                            <div>
                                <div className='title name'>{data.name}</div>
                            </div>

                            <div>
                                <div className='profile-pic bg-img' style={{ backgroundImage: `url("${data.photo}")` }} />
                            </div>
                        </div>
                    </div>

                    <main>{children}</main>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(authLogout()),
    backendLanguage: id => dispatch(backendLanguage(id)),
    frontendLanguage: lang => dispatch(frontendLanguage(lang)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));