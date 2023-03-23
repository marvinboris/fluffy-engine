import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Collapse } from 'reactstrap';

import Logo from '../../../UI/Logo';

import Languages from './Languages';
import NavigationItems from '../NavigationItems/NavigationItems';

import { frontendLanguage } from '../../../../store/actions/content';

import './Toolbar.scss';

class Toolbar extends Component {
    state = {
        navbar: true,
        search: true,

        selectedItem: '',

        language: null,
    }



    // Component methods
    toggleNavbar = () => this.setState(state => ({ navbar: !state.navbar, search: true }))

    selectItem = item => this.setState({ selectedItem: item })

    setLanguage = lang => this.props.frontendLanguage(lang)



    // Lifecycle methods
    componentDidMount() {
        this.setState({ language: this.props.content.languages.find(l => l.abbr === localStorage.getItem('frontend_lang')) });
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.content.cms) !== JSON.stringify(this.props.content.cms)) this.setState({ language: this.props.content.languages.find(l => l.abbr === localStorage.getItem('frontend_lang')) });
    }

    render() {
        const {
            content: {
                cms: {
                    pages: { frontend: { header: { menu, contact } } }
                }, languages
            },
        } = this.props;
        const { language } = this.state;

        return <>
            <div className="Toolbar shadow">
                <div className='content'>
                    <div className="container-fluid">
                        <div>
                            <Link to="/" className="text-decoration-none"><Logo type='big' /></Link>
                        </div>

                        <div className="items">
                            <div className="d-none d-md-block">
                                <NavigationItems cms={{ menu }} font="white" toggleNavbar={this.toggleNavbar} />
                            </div>

                            <div className="pr-3 d-md-none">
                                <i onClick={this.toggleNavbar} className="fas fa-th-large text-30 text-md-40 cursor-pointer" />
                            </div>

                            <div>
                                <Languages languages={languages} set={this.setLanguage} language={language} />
                            </div>
                        </div>
                    </div>

                    <div className="d-md-none">
                        <Collapse isOpen={!this.state.navbar} navbar>
                            <div className='container-fluid'>
                                <NavigationItems cms={{ menu }} font="white" toggleNavbar={this.toggleNavbar} />
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>

            <div className='Toolbar contact'>
                <div className='social-networks'>
                    {contact.social_networks.map(item => <a key={JSON.stringify(item)} className={'fab fa-' + item.icon} href={item.link} target="_blank" />)}
                </div>

                <div className='email'>
                    <a href={'mailto:' + contact.email} target='_blank'>{contact.email}</a>
                </div>
            </div>
        </>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    frontendLanguage: id => dispatch(frontendLanguage(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);