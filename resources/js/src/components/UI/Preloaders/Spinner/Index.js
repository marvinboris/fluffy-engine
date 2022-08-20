import React from 'react';

import './Spinner.scss';

const Spinner = () => <div className="UI Spinner">
    <div className="position-relative">
        <div className="loader" />

        <div className='content'>
            <img src={'/images/logo.png'} />
        </div>
    </div>
</div>;

export default Spinner;