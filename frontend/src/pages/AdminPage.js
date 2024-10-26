// import React from "react";
// import AdminNavbar from "../components/AdminNavbar";
// import BooksList from "../components/BookList";
// import '../styles/adminPageStyle.css';

// const AdminPage = () => {
//     return(
//         <>
//         <AdminNavbar />
//         <h1>Welcome Administrator!</h1>
//         <h2>Stored Collection: </h2>
//         <BooksList />
//         </>
//     );
// }

// export default AdminPage;

import React, { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import BooksList from "../components/BookList";
import AddBook from "../components/AddBook";
import ModifyBook from "../components/ModifyBook";
import '../styles/adminPageStyle.css';
import '../App.css'

const AdminPage = () => {
    
    const [currentView, setCurrentView] = useState('collection'); // Default to 'collection' view

    // Function to switch views based on navbar clicks
    const handleNavClick = (view) => {
        setCurrentView(view);
    };

    return (
        <div className="admin-page">
            <AdminNavbar handleNavClick={handleNavClick} /> {/* Pass the handler to AdminNavbar */}
            
            <h1>Welcome Administrator!</h1>
            
            {/* Conditionally render based on the current view */}
            {currentView === 'collection' && (
                <>
                    <h2>Stored Collection: </h2>
                    <BooksList />
                </>
            )}

            {currentView === 'add-book' && (
                <>
                    <h2>Add a New Book</h2>
                    <AddBook />
                </>
            )}

            {currentView === 'modify-book' && (
                <>
                    <h2>Modify your Collection</h2>
                    <ModifyBook />
                </>
            )}

            
        </div>
    );
}

export default AdminPage;
