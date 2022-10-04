import React from 'react'
import {ReactComponent as Rs} from "./image-rules.svg"
import "./styles/rs.css"

export const RulesSheet = React.forwardRef(({setRules},ref) => {

  return (
    <div className='rules-sheet-wrapper'>
        <div className='rules-sheet' ref={ref}>
                <div className='rs-header'>
                    <div className='rs-txt upper'>rules</div>
                    <div className='rs-quit' onClick={() => setRules(false)}>
                        <img src="../images/icon-close.svg" alt="close"/>
                    </div>
                </div>
                <div className='rs-sheet-wrapper'><Rs/></div>
                <div className='rs-quit-mob' onClick={() => setRules(false)}>
                        <img src="../images/icon-close.svg" alt="close"/>
                </div>
        </div>
      </div>

  )
})

// export default RulesSheet