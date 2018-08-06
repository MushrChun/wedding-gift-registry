import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Clock from '../../assets/images/clock.jpeg';
import Watch from '../../assets/images/watch.jpeg';
import Rose from '../../assets/images/rose.jpeg';
import Chocolate from '../../assets/images/chocolate.jpeg';
import Telsa from '../../assets/images/telsa.jpeg';
const styles = theme => ({
    root: {
        padding: '20px 0',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: blueGrey[50],
    },
    gridList: {
        width: 500
    },
    subheader: {
        width: '100%',
    },
});

const trendGrid = (props) => {

    const { classes } = props;

    const tileData = [
        {
            img: Clock,
            title: 'Clock',
            author: 'Tim',
            cols: 2,
        },
        {
            img: Watch,
            title: 'Watch',
            author: 'Jobs',
            cols: 1,
        },
        {
            img: Rose,
            title: 'Rose',
            author: 'Bob',
            cols: 1,
        },
        {
            img: Chocolate,
            title: 'Chocolate',
            author: 'Alex',
            cols: 2,
        },
        {
            img: Telsa,
            title: 'Telsa',
            author: 'Chris',
            cols: 3,
        },
    ];

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>by: {tile.author}</span>}
                            actionIcon={
                                <IconButton className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default withStyles(styles)(trendGrid);