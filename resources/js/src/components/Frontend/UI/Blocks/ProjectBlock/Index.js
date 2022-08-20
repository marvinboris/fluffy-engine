import React from 'react';

import './ProjectBlock.scss';

const ProjectBlock = ({ title, description, github, link, technologies = [] }) => {
    const lang = localStorage.getItem('frontend_lang');

    const technologiesContent = technologies.map(technology => <span key={`ProjectBlock-technology-${JSON.stringify(technology)}`}>{technology.name}</span>);

    return <div className='UI ProjectBlock'>
        <div className='links'>
            {github && <a className='fab fa-github' href={github} target='_blank' />}
            {link && <a className='fas fa-external-link-alt' href={link} target='_blank' />}
        </div>

        <a href={link} target='_blank' className='inner'>
            <div className='header'>
                <div className='icon'><i className='far fa-folder' /></div>
            </div>

            <div className='title'>{title[lang]}</div>

            <div className='description'>{description[lang]}</div>

            <div className='technologies'>{technologiesContent}</div>
        </a>
    </div>;
};

export default ProjectBlock;