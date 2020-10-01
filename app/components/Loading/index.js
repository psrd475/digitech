import React from 'react';
import { PropTypes } from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  circularProgress: {
    position: 'fixed',
    top: 'calc(50% - 45px)',
    left: 'calc(50% - 45px)',
  }
};

function Loading(props) {
  const { classes } = props;
  return (
    <div className="preloader">
      <div className="sk-double-bounce">
        <div className="sk-child sk-double-bounce1"></div>
        <div className="sk-child sk-double-bounce2"></div>
      </div>
    </div>
  )
  // return (<CircularProgress className={classes.circularProgress} size={90} thickness={1} color="secondary" />);
}

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(Loading));
