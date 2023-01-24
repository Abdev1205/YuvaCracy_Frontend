import React from 'react'
import './allArticleCard.css';

import { NavLink } from 'react-router-dom';
function AllArticleCard({ articleData }) {
  return (
    <>

      <div className="all-article-card">
        <img src={articleData.articleHeroUrl} alt="" />
        
        <p dangerouslySetInnerHTML={{ __html: articleData.article }} />
        <NavLink className='all-article-card-navlink' to={`/articles/${articleData._id}`} >
        <p>Read more <i class="fa-solid fa-arrow-right"></i> </p>

        </NavLink>
      </div>
    </>
  )
}

export default AllArticleCard
