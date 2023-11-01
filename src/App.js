import react, {useEffect, useState} from 'react';
import './App.css';
import Chord from '@tombatossals/react-chords/lib/Chord'
import {DivChord} from './style'
import axios from 'axios';
import  Data from './data/data.json'
import ChordHome from './ChordHome';
import Footer from './Footer';

function App() {

  

 
 

  return (
    <div className="App">
     <ChordHome key={Math.floor(Math.random() * 20000)}/>
    <Footer/>
     
    </div>
  );
}

export default App;
