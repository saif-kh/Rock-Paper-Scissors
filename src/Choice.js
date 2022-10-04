import classNames from 'classnames'
import React, { useContext } from 'react'
import { RpsContext } from './Contexts/RpsContext'
import "./styles/choice.css"

function Choice(props) {
  const {setShowR,setRand} = useContext(RpsContext)
  const picks = ["rock","paper","scissors"]

    function rando() {
        let randm = Math.random()
        randm *= picks.length;
        randm = Math.floor(randm)
        return randm
    }
      
      function both() {
        setShowR(true)
        props.token()
        const index = rando()
        setRand(picks[index])
      }
  return (
    <div className={classNames('choice-wrapper', {
        "rock" : props.pick === "rock",
        "paper" : props.pick === "paper",
        "scissors" : props.pick === "scissors"
    })} onClick={both}>
        <div className='choice'>
            <img src={`../images/icon-${props.pick}.svg`} alt={`${props.pick}`}/>
        </div>
    </div>
  )
}

export default Choice