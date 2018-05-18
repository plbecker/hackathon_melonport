import React, { Component } from 'react';
import './MelonSpider.css'

import Radar from 'react-d3-radar';

// use react-chartjs

export default class MelonSpider extends Component {
    constructor(props) {
        super(props);

        this.data = props.data;
    }

    render() {
        return <div className="spider">

            <Radar
                width={400}
                height={400}
                padding={0}
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