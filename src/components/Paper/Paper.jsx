import React from 'react'
import './Paper.css'
import PaperImg from '../../assets/Paper.png'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Paper() {
    return (
        <div className="Paper">
            <p className="Paper-text">Now read all about this schit in our white paper
                <ArrowForwardIcon sx={{ fontSize: 35, marginBottom: 0, ['@media (max-width:780px)']: { display: 'none' } }} />
            </p>
            <ArrowDownwardIcon sx={{ fontSize: 40, ['@media (min-width:790px)']: { display: 'none' } }} />
            <img className="Paper-img" src={PaperImg} alt="paper}" />
        </div>
    )
}

export default Paper
