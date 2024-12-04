import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
// import AuthRoute from './AuthRoute';
import ButtonsPage from '../ButtonsPage/ButtonsPage';
import List from '../List/List';
// import Auth from '../Auth/Auth';

function Routings() {
  return (
    <div className='wrapper'>
      <Routes>
        <Route /* element={<PrivateRoute />} */>
          <Route path="/buttons" element={<ButtonsPage />} />
          <Route path="/" element={<List />} />
        </Route>
        {/* <Route element={<AuthRoute />}>
          <Route path="/" element={<Auth />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default Routings;
