import { BrowserRouter as Router, Link } from 'react-router-dom';
import React from 'react';

function App() {
    return (
        <Router>
            <div>
                <h1>Welcome to My Projects</h1>
                <a href="/phonebook/index.html">Phonebook Project</a>
                <a href="/anecdotes/index.html">Anecdotes</a>
            </div>
        </Router>
    );
}


export default App;
