import React, { Component } from 'react';
import GiftList from '../../components/GiftList/GiftList';
import Paper from '@material-ui/core/Paper';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        padding: '20px 25px;',
    }
});

class Home extends Component {
    state = {
        gifts: [1, 2, 3]
    }

    render() {
        return (
            <div className={this.props.classes.root}>

                <Typography variant="display1" gutterBottom>
                    <HomeIcon /> | Wish List
                </Typography>

                <Paper square={true}>
                    <GiftList gifts={this.state.gifts} />
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Home);