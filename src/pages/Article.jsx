// import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from '../components/NavBar'
import Footer from '../components/Footer';
import Under_development from '../components/Under_development'
import AllArticleCard from '../components/allArticleCard/AllArticleCard';
import LatestArticle from '../components/latestArticle/LatestArticle';
function Article() {
  const [allArticle, setAllArticle] = useState('article-navbar-all-active')
  const [eduaction, seteducation] = useState('article-navbar')
  const [economic, setEconomic] = useState('article-navbar')
  const [governance, setGovernance] = useState('article-navbar')
  const [legislature, setLegislature] = useState('article-navbar')
  const [articleData, setArticleData] = useState([])
  const [articleFilter, setArticleFilter] = useState('')
  const [noResult, setNoResult] = useState(true)
  const [articleSuggestion, setArticlSuggestion] = useState([])

  const articleActive = () => {
    setAllArticle('article-navbar-all-active')
    seteducation('article-navbar');
    setEconomic('article-navbar');
    setGovernance('article-navbar');
    setLegislature('article-navbar');
    setArticleFilter('')
  }

  const articleEducation = () => {
    setAllArticle('article-navbar-all')
    seteducation('article-navbar-active');
    setEconomic('article-navbar');
    setGovernance('article-navbar');
    setLegislature('article-navbar');
    setArticleFilter('Education')

  }

  const articleEconomic = () => {
    setAllArticle('article-navbar-all')
    seteducation('article-navbar');
    setEconomic('article-navbar-active');
    setGovernance('article-navbar');
    setLegislature('article-navbar');
    setArticleFilter('Economic')
  }

  const articleGovernance = () => {
    setAllArticle('article-navbar-all')
    seteducation('article-navbar');
    setEconomic('article-navbar');
    setGovernance('article-navbar-active');
    setLegislature('article-navbar');
    setArticleFilter('Governance')
  }

  const articleLegislature = () => {
    setAllArticle('article-navbar-all')
    seteducation('article-navbar');
    setEconomic('article-navbar');
    setGovernance('article-navbar');
    setLegislature('article-navbar-active');
    setArticleFilter('Legislature');
  }

//   useEffect(() => {
//     const fetchArticle = async () => {
//     //   const res = await axios.get(`https://yuvacracybackendapi.onrender.com/api/all/article?category=${articleFilter}`)
//     const res=0
//       console.log(res);
//       setArticleData(res.data)
//       let value = res.data
//       if (value.length === 0) {
//         setNoResult(false)
//       }
//       else {
//         setNoResult(true)
//       }



//       // filter()
//     }
//     fetchArticle();
//   }, [articleFilter, noResult])

  return (
    <>
    <div>
      <Navbar />
      <div className="container-xxl py-5">
                    <div className="container">
      <div className="article">



        <div className="article-content">
            <br/>
          <div className="article-content-navbar">
            <li onClick={articleActive} className={allArticle}>All</li>
            <li onClick={articleEducation} className={eduaction}>Education</li>
            <li onClick={articleEconomic} className={economic}>Economic</li>
            <li onClick={articleGovernance} className={governance}>Governance</li>
            <li onClick={articleLegislature} className={legislature}>Legislature</li>
            
          </div>
        </div>

        <div className="article-row">
          <div className="latest-article-row">
            <img src="https://i.postimg.cc/CKKKPtQp/bookmark-ribbon.png" alt="" srcset="" />
            <h1>Latest Articles</h1>
            <hr />

            {articleData.map((articleData) => (
              <LatestArticle articleData={articleData} />
            ))}
            {/* <LatestArticle articleData = {articleData}  /> */}
          </div>

          <div className="popular-article-row">
            <h1>Popular Articles</h1>
            <hr />
            {noResult ? articleData.map((articleData) => (
              <AllArticleCard articleData={articleData} />
            )) : <>
              <div className="no-result">
                <img src="https://i.postimg.cc/Z5HfhVnr/ezgif-com-gif-maker-13.gif" alt="" />
                <div className="no-result-search">
                  <img src="https://i.postimg.cc/DydL64LS/ezgif-com-gif-maker-14.gif" alt="" />
                  <h1>No result Found</h1>
                </div>
              </div>
            </>}
          </div>
        </div>




      </div>
      <div className='upload-article' >

        <h1>Want to Post Article </h1>  <NavLink to='/post/articles'>
          <button>Post Article</button>
        </NavLink> 
      </div>
      </div>
      </div>
      <Footer />
      </div>

    </>
  )
}

export default Article