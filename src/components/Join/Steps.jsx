import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './Steps.css'

function Steps(props) {

    return (
        <div>
            <p className="step"><strong>STEP {props.number}: {props.title}</strong></p>
            <div className="desc">
                <div className="highlight"><p>{props.description}</p></div>
                <div className="X"><CloseIcon /></div>
            </div>
        </div>
    )
}

export default Steps
