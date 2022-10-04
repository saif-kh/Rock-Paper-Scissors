import React, { useEffect, useState } from 'react'
import { RpsContext } from './Contexts/RpsContext';
import Header from './Header';
import Main from './Main';
import {RulesSheet} from './RulesSheet';
import "./styles/global.css"

function App() {
  const [score,setScore] = useState(0);
  const [choice, setChoice] = useState("");
  const [rand, setRand] = useState("");
  const [showR, setShowR] = useState(false);
  const [rules,setRules] = useState(false);
  
  const ref = React.createRef()

  // useEffect (() => {
  //     if(ref.current) {
  //       const boundings = ref.current.getBoundingClientRect();
  //       onclick = (e) => {
  //         if((e.clientX >= boundings.left && e.clientX <= boundings. right) && (e.clientY >= boundings.top && e.clientY <= boundings.bottom)) {
  //           console.log("hii")
  //         } else {
  //           setRules(false)
  //           console.log("nooo")

  //         } 
  //         // console.log(e)
  //       }

  //       // onclick = (e) => console.log("hii") 
  //     }
  // },[ref])

    useEffect(()=> {
      if(ref.current) {
        onclick = (e) => {
          if( !ref.current?.contains(e.target) && rules) {
            setRules(false)
          } 
        }
      }
    },[ref.current,rules])
  return (
    <div className="App">
      <RpsContext.Provider value={{score,setScore,choice, setChoice,rand, setRand,showR, setShowR}}>
      <Header/>
      <Main setRules={() => setRules(true)}/>
        {rules && <RulesSheet ref={ref} setRules={setRules}/>}
      </RpsContext.Provider>
    </div>
  );
}

export default App;
