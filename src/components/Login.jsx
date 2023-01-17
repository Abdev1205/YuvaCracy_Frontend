import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
    const { loginWithRedirect } = useAuth0();
  return (
    <>
        <div className='article-login' >
                    <img src="https://i.postimg.cc/tTQPfMmK/ezgif-com-gif-maker-11.gif" alt="" srcset="" />
                    <h1>Login to continue</h1>
                    <button onClick={() => loginWithRedirect()}>Log In <i class="fa-solid fa-right-to-bracket"></i></button>
                </div>
    </>
  )
}

export default Login
