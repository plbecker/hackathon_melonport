import React from 'react';

import MelonSpider from './MelonSpider';

import spiderVariables from './spiderVariables';
import spiderSet1 from './spiderSet1';

var chartOptions = {
    
}

let MelonSpiderComponent = () => (
    <div>
            <MelonSpider data={spiderSet1} chartOptions={chartOptions} />
    </div>
);

export default MelonSpiderComponent;
