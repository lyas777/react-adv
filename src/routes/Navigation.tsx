import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';


export const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading...</span>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt='React Logo' />
            <ul>
              {routes.map((element, index) => (
                <li key={index}>
                  <NavLink
                    to={element.to}
                    className={({ isActive }) =>
                      isActive ? 'nav-active' : ''
                    }>
                    {element.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ path, Componet }) => (
              <Route key={path} path={path} element={<Componet />} />
            ))}
            <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
