import react from 'react';


import {DivChord} from './style'



const ChordComponent = ()=>{
    return(
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
    )
}

export default ChordComponent