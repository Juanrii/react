import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <div className={classes.Navbar}>Toolbar | SideDrawer | Backdrop</div>
        <main className={classes.Container}>
            {props.children}
        </main>
    </Aux>
);

export default layout;