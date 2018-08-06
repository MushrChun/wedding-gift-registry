import React, { Component } from 'react';
import TrendIcon from '@material-ui/icons/TrendingUp';
import Paper from '@material-ui/core/Paper';
import TrendGrid from '../../components/TrendList/TrendGrid';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        padding: '20px 25px;',
    },
    paper: {
        width: '530px',
        backgroundColor: blueGrey[50],
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    }
});

class Trend extends Component {

    render() {
        return (
            <div className={this.props.classes.root}>
                <Typography variant="display1" gutterBottom>
                    <TrendIcon /> | Trend Gifts
                </Typography>
                <div className={this.props.classes.wrapper}>
                    <Paper square={true} className={this.props.classes.paper}>
                        <TrendGrid>
                        </TrendGrid>
                    </Paper>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Trend);