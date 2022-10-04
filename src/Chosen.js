import classNames from 'classnames'
import React from 'react'

function Chosen(props) {
  return (
    <div className={classNames('choice-wrapper bigger', {
        "rock" : props.pick === "rock",
        "paper" : props.pick === "paper",
        "scissors" : props.pick === "scissors"
    })}>
        <div className='choice big'>
            <img src={`../images/icon-${props.pick}.svg`} alt={`${props.pick}`}/>
        </div>
    </div>
  )
}

export default Chosen