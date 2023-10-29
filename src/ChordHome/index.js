import react, {useEffect, useState} from 'react'
import {DivChord,ListKeys,ContainerChords,ContainerInner} from './style'
import Chord from '@tombatossals/react-chords/lib/Chord'
import api from '../data/api'

const ChordHome = ()=>{
  

    const [chordsData, setChordData] = useState([]);
    const [dataKeys, setDataKeys] = useState([]);
    const [exibAll, setExibAll] = useState(true);
    const [chords, setChords]= useState([])


   const getData = ()=>{
    api.get('data.json').then((response)=> {
       
        setDataKeys(response.data.keys)
        setChordData(response.data)
        
        setChords(response.data.chords)
        
       
       
      
       
    } )
   }

   useEffect(()=>{
    getData()
   })

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
const lite = false // defaults to false if omitted
    return (
        <>
        <h1>Dicionário de Acordes</h1>
       
            <ListKeys>
            <li>Todos</li>
            {dataKeys ? <>
            {dataKeys.map((el)=>{
                return (
                    <>
                    <li>{el}</li>
                    </>
                )

            })}
            </>: 'não carregado'}
            </ListKeys>
            
         <ContainerChords>
            {exibAll? <>
                {chords.C ? 
                <>
                
                {chords.C.map((el)=>{
                    return(
                        <>
                      
                      
                       
                        {el.positions.map((item)=>{
                            return(
                                <>

<DivChord>
<div>{el.key}{el.suffix}</div>
                        <Chord
        
        chord={getChord(item)}
        instrument={instrument}
        lite={lite}
        />
                        </DivChord>


                            
                                </>
                            )
                        })}
                        
                        </>
                    )
                })}
                </>
                : 'não carregado'}
            </> : <></>}
         </ContainerChords>
       
        
        </>
    )
}

export default ChordHome;