import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './main/Main.jsx';
import Users from './users/Users.jsx';
import './App.css'

export default () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  )
};