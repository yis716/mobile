import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';

function App() {
 

  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App