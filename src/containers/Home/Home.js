import React, {Component} from 'react';
import GiftList from '../../components/GiftList/GiftList';
import Paper from '@material-ui/core/Paper';
import HomeIcon from '@material-ui/icons/Home';
import classes from './Home.css';

class Home extends Component {
    state = {
        gifts: [1,2,3]
    }

    render () {
        return (
            <div className="Home-wrapper">
                <h1> <HomeIcon /> | Wish List</h1>
                <Paper>
                    <GiftList gifts={this.state.gifts}/>
                </Paper>
            </div>
        )
    }
}

export default Home;