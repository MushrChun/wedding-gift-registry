import React, { Component } from 'react';
import HeadBar from '../../components/Navigation/HeadBar/HeadBar';
import Aux from '../Aux/Aux';

class Layout extends Component {
    render () {
        return (
            <Aux>
                <HeadBar/>
            </Aux>
        )
    }
}

export default Layout;