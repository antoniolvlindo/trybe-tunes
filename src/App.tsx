import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Album from './components/Album/Album';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/search" element={ <Search /> } />
      <Route path="/album/:id" element={ <Album /> } />
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
