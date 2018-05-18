import React, { Component } from 'react';
import './MelonSpider.css'

import Radar from 'react-d3-radar';

export default class MelonSpider extends Component {
    constructor(props) {
        super(props);

        this.data = props.data;
    }

    render() {
        return <div className="spider">

            <Radar
                width={500}
                height={500}
                padding={70}
                domainMax={100}
                highlighted={null}
                /*
                onHover={(point) => {
                    if (point) {
                        console.log('hovered over a data point');
                    } else {
                        console.log('not over anything');
                    }
                }}
                */
               data={this.data}
            />

        </div>
    }
}