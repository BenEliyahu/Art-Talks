import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pictures from './components/Pictures';
import ImagePage from './components/artPage/ImagePage';

function App() {
  const [selectedArt, setSelectedArt] = useState(null);

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            exact
            path='/'
            element={<Pictures setSelectedArt={setSelectedArt} />}
          />
          <Route
            path='/image/:title'
            element={<ImagePage selectedArt={selectedArt} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
