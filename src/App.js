import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Motivation from './pages/Motivation';
import Teams from './pages/Teams';
import Article from './pages/Article';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Error from './pages/Error';
import TextEditor from './components/ArticleTextEditor';
import PostArticle from './pages/PostArticle';
import SingleArticle from './components/singleArticleCard/SingleArticle';

function App() {
  return (


    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/about' element={<About />}></Route>
      <Route exact path='/motivation' element={<Motivation />}></Route>
      <Route exact path='/teams' element={<Teams />}></Route>
      <Route exact path='/article' element={<Article />}></Route>
      <Route exact path='/events' element={<Events />}></Route>
      <Route exact path='/contact' element={<Contact />}></Route>
      <Route path='*' element ={<Error />} />
      <Route path='/editor' element ={<TextEditor/>} />
      <Route path='/post/articles' element ={<PostArticle/>} />
      <Route path='/articles/:articlesId' element={<SingleArticle/>}  />
    </Routes>

  );
}

export default App;
