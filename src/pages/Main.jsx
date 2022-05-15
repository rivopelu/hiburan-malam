import { faClone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { BrandLogo } from '../components'
import NavbarComp from '../components/molekul/Navbar'
import HomePage from './Home/HomePage'
import './Home/HomePage.scss'

const Main = () => {
    return (
        <>
            <NavbarComp />


            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>

            <div className="HomePage">
                <div className='pt-16'>
                    <BrandLogo />
                </div>
            </div>



        </>
    )
}

export default Main