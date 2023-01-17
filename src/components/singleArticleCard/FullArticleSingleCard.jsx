import React from 'react'
import { NavLink } from 'react-router-dom';
import './fullArticleSingleCard.css'
function FullArticleSingleCard({articleData}) {
  return (
    <>
    <div className="full-article-card">
        <img src={articleData.articleHeroUrl} alt="" />
        
        
        <div className='fullArticle-content' dangerouslySetInnerHTML={{ __html: articleData.article }} />
      </div>
    </>
  )
}

export default FullArticleSingleCard
