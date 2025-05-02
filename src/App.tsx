import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './com/NavBar'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Router basename='/vite3' >
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App