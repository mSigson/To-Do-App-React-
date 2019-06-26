import React from 'react';
import withStyles from 'react-jss';

const styles = {
    base: {
        background: 'white',
        borderRadius: '4px',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
        padding: '8px 16px',
    }
};

const CardBoard = ({ children, classes }) => (
    <div className={classes.base}>
        {children}
    </div>
);

export default withStyles(styles)(CardBoard);