import React, { Component } from 'react';

import MelonSpider from './MelonSpider';
import spiderLabels from './spiderLabels';

class MelonSpiderComponent extends Component {

    constructor(props) {
        super(props);

        const baseSpiderData = {
            labels: spiderLabels,
            datasets: [
            ]
        }

        // TODO only use one spiderdataset here
        // TODO give data from outside
        /* TODO uncomment when props are ready
        var scores1 = props.scores1;
        var scores2 = props.scores2;
        */

        var colors = { red: 131, green: 147, blue: 245 };

        var scores1 = [65, 59, 90, 81, 56, 55];
        var scores2 = [28, 48, 40, 19, 27, 94];

        // colors1 is fixed gray
        var colors1 = { red: 220, green: 220, blue: 220 };
        // colors2 are calculated from score
        //var colors2 = { red: 131, green: 147, blue: 245 };
        var colors2 = this.calculateColorsFromScores(scores1, scores2);

        var spiderData1 = {
            label: "Fund1",
            fillColor: this.alphaColorString(colors1),
            strokeColor: this.normalColorString(colors1),
            pointColor: this.normalColorString(colors1),
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: this.normalColorString(colors1),
            data: scores1
        }

        var spiderData2 = {
            label: "Fund1",
            fillColor: this.alphaColorString(colors2),
            strokeColor: this.normalColorString(colors2),
            pointColor: this.normalColorString(colors2),
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: this.normalColorString(colors2),
            data: scores2
        }

        var combinedSpiderData = Object.assign({}, baseSpiderData);
        combinedSpiderData.datasets = [
            spiderData1,
            spiderData2
        ];

        this.combinedSpiderData = combinedSpiderData;
    }

    calculateColorsFromScores(scores1, scores2) {
        var matchScore = 0;

        return { red: 255, green: 0, blue: 255 };
    }

    alphaColorString(colorScore) {
        return "rgba(" + colorScore.red + "," + colorScore.green + "," + colorScore.blue + ",0.2)";
    }

    normalColorString(red, green, blue) {
        return "rgba(" + red + "," + green, + "," + blue + ",1)";
    }

    render() {
        return <div>
            <MelonSpider data={this.combinedSpiderData} />
        </div>
    }
}

export default MelonSpiderComponent;
