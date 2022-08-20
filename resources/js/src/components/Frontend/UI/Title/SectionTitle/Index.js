import React from 'react';

import './SectionTitle.scss';

const SectionTitle = ({ head, title, subtitle, centered }) => {
    let i = 0

    return <div className={`SectionTitle${centered ? " centered" : ""}`}>
        <div className='text'>
            {head && <div className='super'>{head}</div>}

            {title && <div className='title'>
                {title.split(" ").map(word => <div key={`SectionTitle-word-${word}`} className='word'>
                    {word.split("").map(letter => <span key={`SectionTitle-word-${word}-letter-${i}`} style={{ "--section-title-title-letter-i": ++i }}>{letter}</span>)}
                </div>)}
            </div>}

            {subtitle && <div className='subtitle'>
                {subtitle}
            </div>}
        </div>
    </div>;
};

export default SectionTitle;