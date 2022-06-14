import * as React from 'react';
import Button from '../components/button/Button';
import InputField from '../components/inputField/InputField';

import { http } from '../components/utils/http';
import { useNavigate } from "react-router-dom"

// import BtnLoad from "../assets/Icons/btn-load.svg"

const Register = () => {

    const [fullName, setFullName] = React.useState()
    const [username, setUsername] = React.useState()
    const [pwd, setPwd] = React.useState()
    const [phoneNumber, setPhoneNumber] = React.useState()

    const navigate = useNavigate()                  

    const signUp = () => {
        http.post("/auth/register",
            {
                fullName: fullName,
                username: username,
                password: pwd,
                phone: phoneNumber,
            }
        )
            .then((res) => {
                navigate("/")
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }

    return (
        <form>
            <h2 style={{ color: "black" }}>Create New Account</h2>
            <InputField
                type="text"
                label="Full Name*"
                value={fullName}
                onChange={e => setFullName(e.target.value)} />
            <InputField
                type="text"
                label="Username*"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <InputField
                type="password"
                label="Password*"
                value={pwd}
                onChange={e => setPwd(e.target.value)}
            />
            <InputField
                type="number"
                label="Phone Number*"
                alue={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)} />

            <Button
                type="button"
                text={`Sign Up`}
                onClick={signUp} />
        </form>
    )
}

export default Register