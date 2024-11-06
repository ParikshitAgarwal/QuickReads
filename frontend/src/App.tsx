import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import AppBar from './components/AppBar'
import PrivateRoute from './PrivateRoute'
import PublishBlog from './pages/PublishBlog'

function App() {

  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path='/' element={<Blogs />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/publish" element={<PublishBlog />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
