import react from 'react';

import Chord from '@tombatossals/react-chords/lib/Chord'
import {DivChord} from './style'



const ChordComponent = (props)=>{
    
    function formatSufix(sufix){
        if(sufix=='major'){
            return ''
        }
        else if(sufix=='minor'){
            return 'm'
        }
        console.log(sufix)
        return sufix
    
    }
    return(
        <>
        {props.chords? <>
            {props.chords.map((el,i)=>{
                    return(
                        <>
                      
                      
                       
                        {el.positions.map((item, index)=>{
                            return(
                                <>

<DivChord key={props.generateKey()}>
<div key={Math.floor(Math.random() * 20000000)}>{el.key}{formatSufix(el.suffix)}</div>
                        <Chord key={Math.floor(Math.random() * 20000000)}
                       
        
        chord={props.getChord(item)}
        instrument={props.instrument}
        lite={props.lite}
        />
                        </DivChord>


                            
                                </>
                            )
                        })}
                        
                        </>
                    )
                })}
        </> : ''}
        
        </>
    )
}

export default ChordComponent