import React, { Component } from 'react';
import './MelonSpider.css'

import Radar from 'react-d3-radar';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return <div>

            <Radar
                width={500}
                height={500}
                padding={70}
                domainMax={100}
                highlighted={null}
                onHover={(point) => {
                    if (point) {
                        console.log('hovered over a data point');
                    } else {
                        console.log('not over anything');
                    }
                }}
                data={{
                    variables: [
                        { key: 'resilience', label: 'Resilience' },
                        { key: 'strength', label: 'Strength' },
                        { key: 'adaptability', label: 'Adaptability' },
                        { key: 'creativity', label: 'Creativity' },
                        { key: 'openness', label: 'Open to Change' },
                        { key: 'confidence', label: 'Confidence' },
                    ],
                    sets: [
                        {
                            key: 'me',
                            label: 'My Scores',
                            values: {
                                resilience: 40,
                                strength: 60,
                                adaptability: 70,
                                creativity: 20,
                                openness: 80,
                                confidence: 10,
                            },
                        },
                        {
                            key: 'everyone',
                            label: 'Everyone',
                            values: {
                                resilience: 100,
                                strength: 80,
                                adaptability: 60,
                                creativity: 40,
                                openness: 20,
                                confidence: 0,
                            },
                        },
                    ],
                }}
            />

        </div>
    }
}