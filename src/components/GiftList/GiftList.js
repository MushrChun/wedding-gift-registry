import React from 'react';
import GiftListItem from './GiftListItem/GiftListItem';
import List from '@material-ui/core/List';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Aux from '../../hoc/Aux/Aux';


const giftList = (props) => {

    const items = props.gifts.map((gifts, index) => {
        return (
            <Aux>
                <GiftListItem />
                <Divider />
                {/* {index!= props.gifts.length - 1 && <Divider />} */}
            </Aux>
        )
    });
    return (
        <List>
            {items}
            <ListItem>
                <Avatar> 
                    <AddIcon />
                </Avatar>
                <ListItemText primary="Create New Entry" />
                <ListItemSecondaryAction>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
}

export default giftList;