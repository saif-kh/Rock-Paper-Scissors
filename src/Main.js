import classNames from 'classnames'
import React, { useContext } from 'react'
import ChoiceSection from './ChoiceSection'
import { RpsContext } from './Contexts/RpsContext'
import Result from './Result'
import Rules from './Rules'
import "./styles/main.css"

function Main(props) {
  const {showR} = useContext(RpsContext)

  return (
    <div className='main'>
        <div className='mid-sec'>
            <div className={classNames({
              "hide-main" : showR
            })}><ChoiceSection/></div> 
            <div className={classNames({
              "hide-main" : !showR
            })}><Result/></div> 
        </div>
        <div className='button-sec'>
            <Rules setRules={props.setRules}/>
        </div>
    </div>
  )
}

export default Main