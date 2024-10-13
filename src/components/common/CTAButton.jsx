import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '1834px',
    left: '128px',
    width: '248px',
    height: '48px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: '#2a86f5',
    color: '#ffffff',
    fontSize: '18px',
    fontFamily: 'Poppins',
    fontWeight: 500,
    lineHeight: '24px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Book Now',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;