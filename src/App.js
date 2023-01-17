import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Article from './pages/Article';
import About from './pages/About';
import Team from './pages/Team';
import Error from './components/Error';
import TextEditor from './components/ArticleTextEditor';
import PostArticle from './pages/PostArticle';
import SingleArticle from './components/singleArticleCard/SingleArticle';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/about' element ={<About/>} />
      <Route path='/events' element ={<Events/>} />
      <Route path='/articles' element ={<Article/>} />
      <Route path='/teams' element ={<Team/>} />
      <Route path='/contact' element ={<Contact/>} />
      <Route path='*' element ={<Error/>} />
      <Route path='/editor' element ={<TextEditor/>} />
      <Route path='/post/articles' element ={<PostArticle/>} />
      <Route path='/articles/:articlesId' element={<SingleArticle/>}  />
      
      
      
    </Routes>

    </>
  )
}

export default App
