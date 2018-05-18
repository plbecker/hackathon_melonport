import React from 'react';

import MelonSpider from './MelonSpider';

import spiderVariables from './spiderVariables';
import spiderSet1 from './spiderSet1';

let MelonSpiderComponent = ({ game, dispatch, translate, currentLanguage }) => (
    <div>
            <MelonSpider data={{sets: spiderSet1.sets, variables: spiderVariables.variables}} />
            <MelonSpider data={{sets: spiderSet1.sets, variables: spiderVariables.variables}} />
    </div>
);

export default MelonSpiderComponent;
