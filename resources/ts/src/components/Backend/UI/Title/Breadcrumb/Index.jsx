import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Breadcrumb as B, BreadcrumbItem } from 'reactstrap';
import { connect } from 'react-redux';

import './Breadcrumb.scss';

class Breadcrumb extends Component {
    render() {
        const {
            items, main, icon,
            content: {
                cms: {
                    pages: { general: { home } }
                }
            },
            dark = false
        } = this.props;

        let itemsComponent = null;

        if (items) itemsComponent = items.map((item, i) => (
            <BreadcrumbItem key={i}><NavLink to={item.to}>{item.content}</NavLink></BreadcrumbItem>
        ));

        return <B className="UI Breadcrumb text-gs d-none d-sm-flex" listClassName="bg-transparent rounded-0 justify-content-end">
            <BreadcrumbItem><NavLink to="/" className='home'>{icon && <i className={`fas fa-${icon}`} />}{home}</NavLink></BreadcrumbItem>
            {itemsComponent}
            <BreadcrumbItem active>{main}</BreadcrumbItem>
        </B>;
    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Breadcrumb);