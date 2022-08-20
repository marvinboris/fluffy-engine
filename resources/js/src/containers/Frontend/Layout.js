import React, { Component } from 'react';

import Toolbar from '../../components/Frontend/Navigation/Toolbar';

import './Frontend.scss';

export default ({ children }) => <div className="Frontend">
    <Toolbar />

    <div className='main'>{children}</div>
</div>;
