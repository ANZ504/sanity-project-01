//Impor React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//Import components
import Home from '../src/components/Home'
import About from '../src/components/About'
import Post from '../src/components/Post'
import SinglePost from '../src/components/SinglePost'
import Project from '../src/components/Project'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/post/' element={<Post/>}/>
        <Route path='/post/:slug' element={<SinglePost/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>
    </Router>
  );
}

export default App;
