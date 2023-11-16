import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './Routerdom/routes';

const App = () => {
  return <RouterProvider router={routes}></RouterProvider>
};

export default App;