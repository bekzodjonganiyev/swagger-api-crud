import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import "../../assets/app.css"

const Container = () => {
    return (
        <div className="container">
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </div>
    )
}

export default Container