import React from 'react'
import Navbar from '../components/Navbar'
import Login from '../components/Login';
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ArticleTextEditor from '../components/ArticleTextEditor';

import { NavLink } from 'react-router-dom';

import UserProfile from '../components/UserProfile';
function PostArticle() {

    const [authorEmail, setAuthorEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userProfileUrl, setUserProfileUrl] = useState('')
    
    const [profileDetailStyle, setProfileDetailStyle] = useState('0')
    const [userDenied,setUserDenied] = useState()



    const { user, isAuthenticated, isLoading } = useAuth0();

    useEffect(() => {
        const AuthorData = async () => {
            // setAuthorEmail(user.email || null)
            const serverAuthorData = await fetch('https://yuvacracybackendapi.onrender.com/api/all/author');
            const authorData = await serverAuthorData.json();
            console.log(authorData);
            let authorEmail = authorData.map((obj) => {
                return obj.email
            })
            let filteredEmail = authorEmail.filter((val, index) => authorEmail.indexOf(val) == index)
            console.log(filteredEmail);


            const authorFind = (author) => {
                return author == user.email;
            }
            const author = filteredEmail.find(authorFind);
            console.log(author);
            setAuthorEmail(author);
            setUserName(user.name);
            setUserEmail(user.email);
            setUserProfileUrl(user.picture);

            if(isAuthenticated){
                if(author == undefined ){
                    setUserDenied(true)
                    
                }else{
                    setUserDenied(false)
                }
            }else{
                setUserDenied(false)
            }
            


        }
        AuthorData()
    }, [user,userDenied])
    return (
        <>
            <Navbar />
            <div className="post-article">
                <div className="post-article-header">
                    <h1>Post an Article</h1>
                    <UserProfile user = {user}  />
                </div>

            </div>
            {isAuthenticated ? null :
            <Login  />
                }




            {
                isAuthenticated && authorEmail ? <ArticleTextEditor user = {user} /> : null

            }
                { userDenied ? <>
                    <div className="article-acess-denied">
                        
                        <img src="https://i.postimg.cc/fLKbGhqy/Black-Yellow-Digital-Marketing-Facebook-Cover.png" alt="" srcset="" />
                        <NavLink className='acess-denied-link' to='/contact' >Contact Admin</NavLink>
                    </div>
                </> : null}
                

        </>
    )
}

export default PostArticle
