import React, { Component } from 'react';
import './App.css';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SnackbarContent from '@material-ui/core/SnackbarContent';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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

const font = 'Crimson Text';

const theme = createMuiTheme({
    typography: {
        fontFamily: [font],
    },
    palette: {
        primary: {
          main: '#fff',
        },
        secondary: {
          light: '#0066ff',
          main: '#0044ff',
          contrastText: '#ffcc00',
        },
  },
});


class App extends Component {
    constructor(props) {
        super(props);

}

    render() {
        return (
        <MuiThemeProvider theme={theme}>
            <div style={{margin:'10%', display:'flex'}}>
                <div style={{flex:'1'}}>
                    <Card className={"ranking-card"}>
                        <CardHeader title="Melon Fund Ranking">

            </CardHeader>
                        <CardContent>
            <div style={{width:'auto', height:'48px', paddingTop:'20px', marginTop:'-15px', marginLeft:'-25px', marginRight:'-25px', backgroundColor:'#111'}}>
            <Typography variant="title"  component='h3' color='primary' style={{marginLeft:'20px'}}>
                Select two funds to compare them.
              </Typography> 
            </div>
                            <RankingComponent />
                        </CardContent>
                    </Card>
                </div>
                <div style={{width:'400px'}}>
                    <Card className={'spider-card'}>
                        <CardContent>
                            <div style={{width:'100%'}}>
                                <MelonSpiderComponent />
                            </div>
                        </CardContent>
                    </Card> 
                </div>
            </div>
        </MuiThemeProvider>
        );
    }
}

export default App;
