import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import {Results} from './Results';

const Router = () => (
  <div className='p-4'>
    
    <Routes>
      <Route path='/' element={<Navigate from='/' to='/search' />}/>
      <Route path='/search' element={<Results />}/>
    </Routes>
  </div>
);

export default Router;