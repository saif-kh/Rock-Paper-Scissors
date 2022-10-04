import React, { useContext } from 'react'
import Choice from './Choice'
import { RpsContext } from './Contexts/RpsContext'
import "./styles/choiceSection.css"

function ChoiceSection(props) {
  const {setChoice} = useContext(RpsContext);
  
  return (
    <div className='choice-section'>
      <Choice pick="paper" token={() => {setChoice("paper")}}/>
      <Choice pick="scissors" token={() => setChoice("scissors")}/>
      <Choice pick="rock" token={() => setChoice("rock")}/>
      <div className='tri-bg'>
        <img src='../images/bg-triangle.svg' alt='tri'/>
      </div>
    </div>
  )
}

export default ChoiceSection