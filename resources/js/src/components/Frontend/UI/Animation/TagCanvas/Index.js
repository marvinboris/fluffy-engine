import React, { Component } from 'react';

import '../../../../../assets/js/tagcanvas.min';

import './TagCanvas.scss';

export default class ReactTagCanvas extends Component {
    componentDidMount() {
        const options = {
            wheelZoom: false,
            initial: [0.3, 0.3],
            textColour: '#DBAB0F',
            outlineColour: 'transparent',
        };

        const canvasId = 'myCanvas';
        TagCanvas.Start(canvasId, '', options);
    }

    render() {
        const listItemsContent = this.props.listItems.map(item => <li key={'item-' + item}><a href='#'>{item}</a></li>);

        return <div className='TagCanvas'>
            <div id="myCanvasContainer">
                <canvas width="500" height="500" id="myCanvas">
                    <p>Anything in here will be replaced on browsers that support the canvas element</p>
                    <ul className='text-gs'>
                        {listItemsContent}
                    </ul>
                </canvas>
            </div>
        </div>
    }
}