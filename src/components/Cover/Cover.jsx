import React from 'react'
import Border from '../../assets/Border.JPG'
import Tag from '../../assets/Tag.png'

import './Cover.css'

function Cover() {
    return (
        <div className="Cover">
            <img className="tag" src={Tag} alt="Tag" />
            <img className="banner" src={Border} alt="Border" />
            <p>Crafting the Finest Quality Tokens that are Not Fungible, Since 2021</p>
        </div>
    )
}

export default Cover
