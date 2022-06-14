import React from 'react'
import Button from '../components/button/Button'
import useToken from '../components/hook/useToken'
import InputField from '../components/inputField/InputField'

// import { useNavigate } from "react-router-dom"
import { http } from '../components/utils/http'

const Login = () => {

    const [username, setUsername] = React.useState()
    const [pwd, setPwd] = React.useState()

    const [token, setToken] = useToken();

    const signIn = () => {
        http.post("/auth/token",
            {
                username: username,
                password: pwd,
            }
        )
            .then((res) => {
                    setToken(res.data.data.data.accessToken)
                    console.log(res.data.data.data.accessToken)
                    console.log(res.data.data.success)
                    // window.localStorage.setItem("token", JSON.stringify(res.data.data.accessToken))
                    window.localStorage.setItem('token', token);
            })
            .catch(err => console.log(err))
    }

    return (
        <form>
            <h2 style={{ color: "black" }}>Login</h2>
            <InputField type="text" label="Username*" value={username} onChange={e => setUsername(e.target.value)} />
            <InputField type="password" label="Password*" value={pwd} onChange={e => setPwd(e.target.value)} />
            <Button type="button" text="Sign In" onClick={() => signIn()} />
        </form>
    )
}

export default Login