import React from 'react'
import './latestArticle.css'
import { NavLink } from 'react-router-dom'
function LatestArticle({articleData}) {
  return (
    <>
        <div className="latest-article-card">
        <img src={articleData.articleHeroUrl} alt="" srcset="" />
        <h1 dangerouslySetInnerHTML={{ __html: articleData.articleHeading }} />
        <NavLink to={`/articles/${articleData._id}`} >

        <p>Read more <i class="fa-solid fa-arrow-right"></i> </p>
        </NavLink>
        </div>
    </>
  )
}

export default LatestArticle
