import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';


import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SnackbarContent from '@material-ui/core/SnackbarContent';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import MelonSpiderComponent from './MelonSpider/MelonSpiderComponent';
import RankingComponent from './Ranking/RankingComponent';
import PerformanceComponent from './Performance/PerformanceComponent';


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
            main: '#222',
        },
  },
});

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

class App extends Component {
    constructor(props) {
        super(props);

    }
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        return (
        <MuiThemeProvider theme={theme}>
            <div style={{margin:'8%', display:'flex'}}>
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
                <div style={{width:'500px'}}>
                            <div className={'spider-card'} style={{width:'100%'}}>
                                <AppBar position="static" color="primary">
                                    <SwipeableViews
                                      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                      index={this.state.value}
                                      onChangeIndex={this.handleChangeIndex}
                                    style={{backgroundColor:"#fff"}}
                                    >
                              <TabContainer dir={theme.direction}>
                                           <MelonSpiderComponent />
 
                                </TabContainer>
                              <TabContainer dir={theme.direction}>
                                    <PerformanceComponent /> 
                            </TabContainer>
                            </SwipeableViews>
                              <Tabs
                                value={this.state.value}
                                onChange={this.handleChange}
                                indicatorColor="secondary"
                                textColor="secondary"
                                fullWidth
                              >
                                <Tab label="Strategy" />
                                <Tab label="SharePrice" />
                              </Tabs>
                            </AppBar>
                            </div>
                </div>
            </div>
        </MuiThemeProvider>
        );
    }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default App;

