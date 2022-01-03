import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import './Connect.css'

function Connect() {
    return (
        <div className="Connect">
            <span className="Connect-text">For over less than 1 years Schitköyn’s™ has been handcrafting<br />
                100% digital NFTs guaranteed to blockchain immutably<br />
                or your money’s gone, & that’s our guarantee.</span>
            <br />
            <a href="https://twitter.com/karanmishra27" target="_blank">
                <TwitterIcon sx={{ color: 'white', fontSize: 40, marginTop: '20px', ['@media (max-width:780px)']: { color: 'black' } }} />
            </a>
        </div>
    )
}

export default Connect
