import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

const WithTooltip = ({ content, id, children }) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return content ? <>
        <span id={id}>{children}</span>
        <Tooltip isOpen={tooltipOpen} target={id} toggle={toggle}>
            {content}
        </Tooltip>
    </> : children;
};

export default WithTooltip;