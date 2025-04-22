import React from 'react'
import img1 from '../assets/images/freepik__the-style-is-candid-image-photography-with-natural__78007.jpg'
import './styles/CreateVibe.scss'
import { Add } from '@mui/icons-material'
const CreateVibe = () => {
    return (
        <div className='create-vibe'>
            <div className='vibe-card'>
                <img src={img1} alt='image-profile' className='image-profile' />
                
                <div className='create-vibe__container'>
                    <Add className='add-icon' /> 
                    <h1 className='create-vibe__title'>Create a Vibe</h1>
                </div>
            </div>
        </div>
    )
}

export default CreateVibe
