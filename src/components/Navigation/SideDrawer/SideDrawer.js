import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import TrendIcon from '@material-ui/icons/TrendingUp';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

const sideDrawer = (props) => {

    const { classes } = props;

    const sideList = (
        <div className={classes.list}>
            <List>
                <ListItem button component={Link} to="/trend">
                    <ListItemIcon>
                        <TrendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Trend" />
                </ListItem>
                <Divider/>
                <ListItem button component={Link} to="/home">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <Drawer open={props.isOpen} onClose={props.close}>
            <div
                tabIndex={0}
                role="button"
                onClick={props.close}
                onKeyDown={props.close}
            >
                {sideList}
            </div>
        </Drawer>
    )

}

export default withStyles(styles)(sideDrawer);