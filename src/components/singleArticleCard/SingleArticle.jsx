import React, { useEffect, useState } from 'react'
import './singleArticle.css'
import { useLocation } from "react-router";
import axios from 'axios';
import LatestArticle from '../latestArticle/LatestArticle';
import AllArticleCard from '../allArticleCard/AllArticleCard';
import FullArticleSingleCard from './FullArticleSingleCard';
import Navbar from '../NavBar';
import './singleCardMedia.css'
function SingleArticle() {

  const [articleData,setArticleData] =useState({})
  const [articleSuggestion,setArticlSuggestion]= useState([])


  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(()=>{
    const getArticle = async () =>{
      const article = await axios.get('https://yuvacracybackendapi.onrender.com/api/article/' + path);
      console.log(article.data);
      setArticleData(article.data)
      let category = article.data.category
      const sugesstion = await axios.get(`https://yuvacracybackendapi.onrender.com/api/all/article?category=${category}`)

      let suggestionGenerated = sugesstion.data
     
      console.log(sugesstion.data);
      const sorted = suggestionGenerated.filter((a) => {
              return a._id != path;
            })
            setArticlSuggestion(sorted)

    }
    getArticle()
  },[path])
  return (
    <>
    <Navbar/>
<div className="full-article-row">
          <div className="latest-article-row">
            <img src="https://i.postimg.cc/CKKKPtQp/bookmark-ribbon.png" alt="" srcset="" />
            <h1>Latest Articles</h1>
            <hr />

            {articleSuggestion.map((articleData) => (
              <LatestArticle articleData={articleData} />
            ))}
           
          </div>

          <div className="popular-article-row">
            <h1>Popular Articles</h1>
            <hr />
            { 
              <FullArticleSingleCard articleData={articleData} />
            }
          </div>
        </div>
    </>
  )
}

export default SingleArticle
