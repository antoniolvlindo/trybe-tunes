import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import LayoutRoutes from './LayoutRoutes';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/*" element={ <LayoutRoutes /> } />
    </Routes>
  );
}

export default App;
