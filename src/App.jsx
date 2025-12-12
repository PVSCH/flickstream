import './css/App.css'
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import {Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import { MovieProvider } from './contexts/MovieContext';


function App() {

  return (
    <MovieProvider>

      <Navbar/>
<main className="main-conten">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Favorites" element={<Favorites />} />
  </Routes>
</main>
</MovieProvider>
  );
}

export default App
