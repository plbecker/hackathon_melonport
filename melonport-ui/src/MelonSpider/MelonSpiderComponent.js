import React, { Component } from 'react';

import MelonSpider from './MelonSpider';

class MelonSpiderComponent extends Component {

    constructor(props) {
        super(props);

        var arr1 = []
        var arr2 = []
        for (var i = 0; i < 6; i++) {
            arr1.push(Math.random() * 100)
            arr2.push(Math.random() * 100)
        }

        // colors1 is fixed gray
        var colors1 = { red: 220, green: 220, blue: 220 };
        // colors2 are calculated from score
        var colors2 = this.calculateColorsFromScores(arr1, arr2);

        var spiderData1 = {
            label: "Fund1",
            fillColor: this.alphaColorString(colors1),
            strokeColor: this.normalColorString(colors1),
            pointColor: this.normalColorString(colors1),
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: this.normalColorString(colors1),
            data: arr1
        }

        var spiderData2 = {
            label: "Fund2",
            fillColor: this.alphaColorString(colors2),
            strokeColor: this.normalColorString(colors2),
            pointColor: this.normalColorString(colors2),
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: this.normalColorString(colors2),
            data: arr2
        }

        var combinedSpiderData = {}
        window.combinedSpiderData = combinedSpiderData;
        combinedSpiderData.labels = [
            "Diversification",
            "Whitelist Score",
            "Ex Ante Score",
            "Social Responsibility",
            "Long-Term",
            "Volatility"
        ];
        console.log(combinedSpiderData.labels);

        combinedSpiderData.datasets = [
            spiderData1,
            spiderData2
        ];

        this.combinedSpiderData = combinedSpiderData;
    }

    calculateColorsFromScores(scores1, scores2) {

        var sum = 0;
        for (var i = 0; i < 6; i++) {
            var difference = (Math.abs(scores1[i] - scores2[i]));
            //sum += difference;
            sum += difference * difference;
        }
        //const matchScore = sum / 6;
        const matchScore = Math.sqrt(sum / 6);

        console.log(matchScore);

        const maxDiffColor = 240;
        const shadedRed = maxDiffColor * matchScore / 100;
        const shadedGreen = maxDiffColor * matchScore / 100;
        //const shadedBlue = maxDiffColor * matchScore / 100;

        return { red: shadedRed, green: shadedGreen, blue: 255 };
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
