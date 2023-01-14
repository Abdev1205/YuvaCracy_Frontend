import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Motivation from './pages/Motivation';
import Teams from './pages/Teams';
import Article from './pages/Article';
import Events from './pages/Events';
import Error from './pages/Error';

function App() {
  return (


    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/about' element={<About />}></Route>
      <Route exact path='/motivation' element={<Motivation />}></Route>
      <Route exact path='/teams' element={<Teams />}></Route>
      <Route exact path='/article' element={<Article />}></Route>
      <Route exact path='/events' element={<Events />}></Route>
      <Route path='*' element ={<Error />} />
    </Routes>

  );
}

export default App;
