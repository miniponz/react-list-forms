import React from 'react';
import PropTypes from 'prop-types';

function Sidebar({ children }) {
  return (
    <nav style={{ display: 'flex', flexDirection: 'column' }}>{children}</nav>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired
};

export default Sidebar;
