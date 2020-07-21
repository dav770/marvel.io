import React , { useRef, useEffect, useState } from "react";

function Landing(props) {

    const refWolverine = useRef(null);
    const refbtnRight = useRef(null);
    const refbtnLeft = useRef(null);
   
    // console.log(refWolverine.current.classList.contains('startingImg'));


    const [griffe, setGriffe] = useState(props.griffe)
    
    useEffect(()=>{
        
        console.log('paasage 1',refWolverine.current.classList);
        

        const listeValue = Object.values(refWolverine.current.classList)

        const setTime = setTimeout(()=>{
            console.log('setTime',listeValue.findIndex((val)=> val == 'startingImg'))
            
            refWolverine.current.classList.remove('rightImg')
            refWolverine.current.classList.remove('lefttImg')
            if (listeValue.findIndex((val)=> val === 'startingImg') > 0) {
                refWolverine.current.classList.remove('startingImg')
            } else{
                refWolverine.current.classList.add('startingImg');
            } 
            setGriffe(!griffe)
            console.log('change props', griffe)
        },3000)

        return ()=>{
            clearTimeout(setTime)
        }

    },[griffe])


    const displayGriffeLeft = ()=>{
        console.log('mOL')

        const listeValue = Object.values(refWolverine.current.classList)
        listeValue.findIndex((val)=> val === 'startingImg') > 0 && refWolverine.current.classList.remove('startingImg') ;
        refWolverine.current.classList.remove('rightImg')
        refWolverine.current.classList.add('leftImg')


    }


    const displayGriffeRight = ()=>{
        console.log('mOR')
 
        const listeValue = Object.values(refWolverine.current.classList)
        listeValue.findIndex((val)=> val === 'startingImg') > 0 && refWolverine.current.classList.remove('startingImg') ;
        refWolverine.current.classList.add('rightImg')
        refWolverine.current.classList.remove('leftImg')

        setGriffe(!griffe)

    }

    // const [griffe, setGriffe] = useState(props.griffe);

   

    // useEffect(()=>{
    //     refWolverine.current.classList.add('startingImg');

    //     return ()=>{
            
    //         setGriffe(!griffe)
    //     }
    //     // 

    //     // return ()=>{
            
    //     //     refWolverine.current.classList.remove('startingImg');
    //     //     // (setTimeout(() => {
    //     //     //     refWolverine.current.classList.remove('startingImg');
               
    //     //     // }, 3000));
            
    //     //     }
        
    //     // console.log(refWolverine.current.classList.value);

        
        
    // }, [griffe])

    


  return (
    <main ref={refWolverine} className="welcomePage">
      <div className="leftBox">
        <button className="btn-welcome" onMouseOver={displayGriffeLeft}>Inscription</button>
      </div>
      <div className="rightBox">
        <button className="btn-welcome" onMouseOver={displayGriffeRight}>Connexion</button>
      </div>
    </main>
  );
}

export default Landing;
