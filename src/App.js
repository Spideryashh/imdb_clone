import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TrendingMovies from './components/TrendingMovies';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Favourites from './components/Favourites';

function App() {
  return (
    <BrowserRouter>
      {/* <h1>Hello React!! 🎲</h1> */}
      <Navbar />
      <Routes>
        <Route path="/" element=
          {
            <>
              <Banner />
              <TrendingMovies />
            </>
          }>
        </Route>
        
        <Route path="fav" element={<Favourites />}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
