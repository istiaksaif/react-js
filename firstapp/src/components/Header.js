import PropTypes from 'prop-types';
import Button from './Button';
import React from 'react';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
        <h1>Daily {title}</h1>
        <Button 
        color={showAdd ? 'gray' : 'green'} 
        text={showAdd ? 'close' : 'Add'} 
        onClick={onAdd}/>
    </header>
  )
}; 

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// css in js
// const headerStyle = {
//     color: 'white', 
//     backgroundColor: 'red'
// }

export default Header;
