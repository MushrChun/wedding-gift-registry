import React, { Component } from 'react';
import GiftList from '../../components/GiftList/GiftList';
import Paper from '@material-ui/core/Paper';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

const styles = theme => ({
    root: {
        padding: '20px 25px;',
    }
});

class Home extends Component {

    render() {
        return (
            <div className={this.props.classes.root}>

                <Typography variant="display1" gutterBottom>
                    <HomeIcon /> | Wish List
                </Typography>

                <Paper square={true}>
                    <GiftList gifts={this.props.gifts} delete={this.props.onGiftRemove} add={this.props.onGiftAdd} />
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        gifts: state.gifts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGiftAdd: () => dispatch({ type: actionTypes.ADD_GIFT }) ,
        onGiftRemove: () => dispatch({ type: actionTypes.REMOVE_GIFT })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));