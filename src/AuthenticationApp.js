import React from 'react'
import { useNavigate } from "react-router-dom"
import { http } from './components/utils/http'

const AuthenticationApp = () => {

    const navigate = useNavigate()

    return (
        <div className='main-app'>
            This is AuthenticationApp
            <button onClick={() => {
               navigate("/")
//                 http.get("/auth/refresh-token")
            }
            }>Log out</button>
        </div>
    )
}

export default AuthenticationApp
