import React, { Component } from 'react';
import TrendIcon from '@material-ui/icons/TrendingUp';
import Paper from '@material-ui/core/Paper';
import TrendGrid from '../../components/TrendList/TrendGrid';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        padding: '0 20px;'
    },
    paper: {
        backgroundColor: blueGrey[50],
    }
});

class Trend extends Component {

    render() {
        return (
            <div className={this.props.classes.root}>
                <h1>
                    <Typography variant="display1" gutterBottom>
                        <TrendIcon /> | Trend Gifts
                    </Typography>
                </h1>
                <Paper square={true} className={this.props.classes.paper}>
                    <TrendGrid>
                    </TrendGrid>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Trend);