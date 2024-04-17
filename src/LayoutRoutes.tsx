import { Routes, Route } from 'react-router-dom';
import Search from './components/Search/Search';
import Album from './components/Album/Album';
import NotFound from './components/NotFound/NotFound';
import Layout from './components/Layout/Layout';

function LayoutRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="/" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
        <Route path="/*" element={ <NotFound /> } />
      </Route>
    </Routes>
  );
}

export default LayoutRoutes;
