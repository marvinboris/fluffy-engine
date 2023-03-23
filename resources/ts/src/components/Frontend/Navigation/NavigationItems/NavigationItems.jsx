import React from 'react';
import { Navbar, Nav } from 'reactstrap';

import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.scss';

export default ({ light = false, font, toggleNavbar, cms = {} }) => {
    return <Navbar dark={!light} light={light} expand className="NavigationItems position-static px-0 pt-0 pb-3 px-md-3 pt-md-2 pb-md-2">
        <Nav className="d-block d-md-flex align-items-center" navbar>
            <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/about">{cms.menu.about}</NavigationItem>
            <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/skills">{cms.menu.skills}</NavigationItem>
            <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/portfolio">{cms.menu.portfolio}</NavigationItem>
            <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/contact">{cms.menu.contact}</NavigationItem>
            <a href={cms.menu.resume_link} className="resume btn btn-outline-blue">{cms.menu.resume}</a>
        </Nav>
    </Navbar>;
}