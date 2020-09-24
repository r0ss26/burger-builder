import React from 'react';
import PropTypes from 'prop-types';

import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

const Modal = props => {

  return (
    <>
      <Backdrop onClick={props.toggleModal} show={props.show}/>
      <div
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? 1 : 0,
        }}
        className={classes.Modal}>
        {props.children}
      </div>
    </>
  );
};

const isEqual = (prevProps, nextProps) => {
  return nextProps.show === prevProps.show && nextProps.children === prevProps.children;
}

Modal.propTypes = {
  show: PropTypes.bool,
  toggleModal: PropTypes.func
}

export default React.memo(Modal, isEqual);
