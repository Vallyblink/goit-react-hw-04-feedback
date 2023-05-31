import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div>
      <h2 style={{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        fontSize: '50px',
        color: 'rgb(20, 20, 39)',
        }
      }>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

export default Section;
