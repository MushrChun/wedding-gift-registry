import React from 'react';
import GiftListItem from './GiftListItem/GiftListItem';
import List from '@material-ui/core/List';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider'; import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Aux from '../../hoc/Aux/Aux';

const styles = theme => ({
    // root: {
    //   backgroundColor: theme.palette.background.paper,
    //   width: 500,
    //   position: 'relative',
    //   minHeight: 200,
    // },
    fab: {
        position: 'absolute',
        bottom: -theme.spacing.unit * 4,
        right: theme.spacing.unit * 16,
    }
});

const giftList = (props) => {

    const { classes } = props;

    const items = props.gifts.map((gifts, index) => {
        return (
            <Aux>
                <GiftListItem delete={props.delete}/>
                {/* <Divider /> */}
                {index !== props.gifts.length - 1 && <Divider />}
            </Aux>
        )
    });
    return (
        <List>
            {items}
            <Button onClick={() => props.add()} variant="fab" className={classes.fab} color="secondary">
                <AddIcon />
            </Button>
        </List>
    );
}

export default withStyles(styles)(giftList);