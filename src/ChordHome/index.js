import react, {useEffect, useState} from 'react'
import {DivChord,ListKeys,ContainerChords,ContainerInner,Li} from './style'
import Chord from '@tombatossals/react-chords/lib/Chord'
import api from '../data/api'

import ChordComponent from '../ChordComponent'
import Data from '../data/data.json'
const ChordHome = ()=>{
  

    const [chordsData, setChordData] = useState([]);
    const [dataKeys, setDataKeys] = useState([]);
    const [exibAll, setExibAll] = useState(true);
    const [chords, setChords]= useState([])
    const [exib, setExib] = useState(chords.C)


   const getData = ()=>{
   /*  api.get('data.json').then((response)=> {
       
        setDataKeys(response.data.keys)
        setChordData(response.data)
        
        setChords(response.data.chords)
       
       
       
      
       
    } ) */

    console.log(Data.chords)
   
    setDataKeys(Data.keys)
    setChords(Data.chords)
   }

   useEffect(()=>{
    getData()
   })

   const selectChord =(chord)=>{

        console.log("cliquei", chord)
        if(chord=='C'){
            setExib(chords.C)
        }
        else if(chord=='C#'){
            setExib(chords.Csharp)
        }
        else if(chord=="D"){
            setExib(chords.D)
        }
        else if(chord=='Eb'){
            setExib(chords.Eb)
        }
        else if(chord=='E'){
            setExib(chords.E)
        }
        else if(chord=='F'){
            setExib(chords.F)
        }
        else if(chord=='F#'){
            setExib(chords.Fsharp)
        }
        else if(chord=="G"){
            setExib(chords.G)
        }
        else if(chord=="Ab"){
            setExib(chords.Ab)
        }
        else if(chord=='A'){
            setExib(chords.A)
        }
        else if(chord=='Bb'){
            setExib(chords.Bb)
        }
        else if(chord=='B'){
            setExib(chords.B)
        }
        
       setExibAll(false)
      
       console.log(exib) 
   }

  function getChord(chordPosition){
  
    const chord = {
        frets: chordPosition.frets,
        fingers: chordPosition.fingers,
        barres: chordPosition.barres,
        capo: chordPosition.capo,
    }
   
    return chord;


  }
   const chord = {
    frets: [1, 3, 3, 2, 1, 1],
    fingers: [1, 3, 4, 2, 1, 1],
    barres: [1],
    capo: false,
}
const instrument = {
    strings: 6,
    fretsOnChord: 4,
    name: 'Guitar',
    keys: [],
    tunings: {
        standard: ['E', 'A', 'D', 'G', 'B', 'E']
    }
}



function generateKey () {
 return Math.floor(Math.random() * 20000000)
}
const lite = false // defaults to false if omitted
    return (
        <>
        <h1 key={generateKey()}>Dicionário de Acordes</h1>
       
        
            <ListKeys key={generateKey()}>
            <Li onClick={()=> setExibAll(!exibAll)} key={generateKey()}>Todos</Li>
            {dataKeys ? <>
            {dataKeys.map((el)=>{
                return (
                    <>
                 
                    <Li onClick={()=> selectChord(el)}>{el}</Li>
                    </>
                )

            })}
            </>: 'não carregado'}
            </ListKeys>
            
         <ContainerChords key={generateKey()}>
            {exibAll? <>
                {chords ? 
                <>
                 <ChordComponent  instrument={instrument} generateKey={generateKey} lite={lite} getChord={getChord} chords={chords.C}/>   
                 <ChordComponent  instrument={instrument} generateKey={generateKey} lite={lite} getChord={getChord} chords={chords.Csharp}/>   
                 <ChordComponent  instrument={instrument} generateKey={generateKey} lite={lite} getChord={getChord} chords={chords.Eb}/>   
                 <ChordComponent  instrument={instrument} generateKey={generateKey} lite={lite} getChord={getChord} chords={chords.E}/>   
                 <ChordComponent  instrument={instrument} generateKey={generateKey} lite={lite} getChord={getChord} chords={chords.F}/>   
                 <ChordComponent  instrument={instrument} generateKey={generateKey} lite={lite} getChord={getChord} chords={chords.Fsharp}/>   
                 <ChordComponent  instrument={instrument} generateKey={generateKey} lite={lite} getChord={getChord} chords={chords.G}/>   
                 <ChordComponent  instrument={instrument} generateKey={generateKey} lite={lite} getChord={getChord} chords={chords.Ab}/>   
                 <ChordComponent  instrument={instrument} generateKey={generateKey} lite={lite} getChord={getChord} chords={chords.A}/>   
                 <ChordComponent  instrument={instrument} generateKey={generateKey} lite={lite} getChord={getChord} chords={chords.Bb}/>   
                 <ChordComponent  instrument={instrument} generateKey={generateKey} lite={lite} getChord={getChord} chords={chords.B}/>    
               
     
                </>
                : 'não carregado'}
            </> : <> 
            <ChordComponent  instrument={instrument} generateKey={generateKey} lite={lite} getChord={getChord} chords={exib}/>
          
               </>}
         </ContainerChords>
       
        
        </>
    )
}

export default ChordHome;