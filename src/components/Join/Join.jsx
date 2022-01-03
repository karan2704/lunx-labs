import React from 'react'

import Break from '../Break/Break'
import Steps from './Steps'
import './Join.css'
function Join() {
    const steps = [
        {
            "sr": "1",
            "title": "CONNECT YOUR WALLET",
            "desc": "CONNECT WALLET"
        },
        {
            "sr": "2",
            "title": "CONNECT YOUR TWITTER",
            "desc": "CONNECT TWITTER"
        },
        {
            "sr": "3",
            "title": "DROP AN EMAIL",
            "desc": "[ TYPE EMAIL ]"
        },
        {
            "sr": "4",
            "title": "SUBMIT",
            "desc": "SUBMIT"
        }
    ]
    return (
        <div className='Container'>
            <div className='Join'>
                <span className='Join-text'>To join<br />
                    the Schitlist<br />
                    you must follow<br />
                    these steps...</span>
            </div>
            <Break />
            <div className='Steps'>
                {steps.map((step, index) => {
                    return (
                        <Steps
                            key={index}
                            number={step.sr}
                            title={step.title}
                            description={step.desc}
                        />)
                })}
            </div>
        </div>
    )
}

export default Join
