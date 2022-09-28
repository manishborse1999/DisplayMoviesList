import DisplayMovieList from './components/DisplayMovieList';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={< DisplayMovieList />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
