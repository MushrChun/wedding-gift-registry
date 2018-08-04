import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import HeadBar from '../../components/Navigation/HeadBar/HeadBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    sideDrawerCloseHandler = () => {
        this.setState( { showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer};
        });
    }


    render () {
        return (
            <Aux>
                <HeadBar drawerTogger={this.sideDrawerToggleHandler}/>
                <SideDrawer isOpen={this.state.showSideDrawer} close={this.sideDrawerCloseHandler}/>
            </Aux>
        )
    }
}

export default Layout;