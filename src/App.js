import react, {useEffect, useState} from 'react';
import './App.css';
import Chord from '@tombatossals/react-chords/lib/Chord'
import {DivChord} from './style'
import axios from 'axios';
import  Data from './data/data.json'
import ChordHome from './ChordHome';
function App() {

  

 
 

  return (
    <div className="App">
     <ChordHome/>
     
    </div>
  );
}

export default App;
