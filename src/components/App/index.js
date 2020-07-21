import React from 'react';
import '../../App.css';
import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Landing griffe={true}/>
      <Footer/>
    </div>
  );
}

export default App;
