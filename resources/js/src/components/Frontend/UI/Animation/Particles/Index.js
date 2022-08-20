import React from 'react';

import './Particles.scss';

const Particles = () => {
    const particles = [];

    for (let index = 0; index < 300; index++) {
        particles.push(<div key={'particle-' + index} className='c' />);
    }

    return <div className='Particles'>
        <div className='wrap'>
            {particles}
        </div>
    </div>;
};

export default Particles;