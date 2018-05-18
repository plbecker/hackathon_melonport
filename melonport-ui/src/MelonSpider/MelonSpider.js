import React, { Component } from 'react';
import './MelonSpider.css'

import Radar from 'react-d3-radar';

export default class MelonSpider extends Component {
    constructor(props) {
        super(props);

        this.state = {}
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
                data={{
                    variables: [
                        { key: 'vol', label: 'Volatility' },
                        { key: 'div', label: 'Diversification' },
                        { key: 'max', label: 'Max Drawdown' },
                        { key: 'sri', label: 'Social Responsibility' },
                        { key: 'lon', label: 'Long term investment' },
                        { key: 'ind', label: 'Index outperformance' },
                    ],
                    sets: [
                        {
                            key: 'me',
                            label: 'My Scores',
                            values: {
                                vol: 40,
                                div: 60,
                                max: 70,
                                sri: 20,
                                lon: 80,
                                ind: 10,
                            },
                        },
                        {
                            key: 'everyone',
                            label: 'Everyone',
                            values: {
                                vol: 100,
                                div: 80,
                                max: 60,
                                sri: 40,
                                lon: 20,
                                ind: 0,
                            },
                        },
                    ],
                }}
            />

        </div>
    }
}