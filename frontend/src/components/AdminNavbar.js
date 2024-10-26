import React from 'react';

const AdminNavbar = ({ handleNavClick }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">BookMaster: Admin Panel</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <span className="nav-link" style={{cursor: 'pointer'}} onClick={() => handleNavClick('collection')} aria-current="page">Collection</span>
            <span className="nav-link" style={{cursor: 'pointer'}} onClick={() => handleNavClick('add-book')}>Add Book</span>
            <span className="nav-link" style={{cursor: 'pointer'}} onClick={() => handleNavClick('modify-book')}>Modify Collection</span>
            <span className="nav-link disabled" aria-disabled="true">Search</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;

