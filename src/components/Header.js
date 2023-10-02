import React from 'react';
import '../styles/Header.css';
import NavTabs from './NavTabs';
// import Background from '../money-printer-go-brr-jerome-powell.gif';

function Header(props) {
  return (
    <header  className="header">
      {/* <img src={Background}></img> */}
      <h1>
             Vending Vet Gives Back!    
        </h1>
      <NavTabs currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
    </header>
  );
}

export default Header;