import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';

function UserProfile() {
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [profileDetailStyle, setProfileDetailStyle] = useState('0')
    const profileStyle = () => {
        if (profileDetailStyle === '0') {
            setProfileDetailStyle('1');
        }
        if (profileDetailStyle === '1') {
            setProfileDetailStyle('0');
        }

    }
  return (
    <>
    {isAuthenticated && (
                        <div className='profile' >
                            <img onClick={profileStyle} src={ user.picture}  />
                            <div style={{
                                opacity: profileDetailStyle,
                            }} className="user-details">

                                <h2>{user.name}</h2>
                                <p>{user.email}</p>
                                <button onClick={() => logout({ returnTo: window.location.origin })}><i class="fa-solid fa-right-to-bracket"></i>
                                    Log Out
                                </button>
                            </div>
                        </div>)}
    </>
  )
}

export default UserProfile
