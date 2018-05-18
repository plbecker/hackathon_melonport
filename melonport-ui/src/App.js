import React, { Component } from 'react';
import './App.css';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MelonSpiderComponent from './MelonSpider/MelonSpiderComponent';

import RankingComponent from './Ranking/RankingComponent';


const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};



class App extends Component {
    constructor(props) {
        super(props);

}

    render() {
        return (
            <div style={{margin:'10%', display:'flex'}}>
                <div style={{flex:'1'}}>
                    <Card className={"Card"}>
                        <CardContent>
                            <RankingComponent />
                        </CardContent>
                    </Card>
                </div>
                <div style={{width:'500px'}}>
                    <Card className={'spider'}>
                        <CardContent>
                            <div style={{width:'100%'}}>
                                <MelonSpiderComponent />
                            </div>
                        </CardContent>
                    </Card> 
                </div>
            </div>
        );
    }
}

export default App;
