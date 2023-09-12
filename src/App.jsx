import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import MovieDetails from './Components/MovieDetails'

function App() {
  
  return (
    <div className="w-full">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/> 
        <Route path='/movies/:id' element={<MovieDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
