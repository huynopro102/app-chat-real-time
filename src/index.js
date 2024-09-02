import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import NavigationSidebar from './components/NavigationSidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavigationSidebar />
      <Routes>
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
