import { Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react'
// import PersonProfile from './components/PersonProfile.jsx';
// import { data } from './data/randomData/module-data.js';

import Home from './pages/Home';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import NotFound from './pages/NotFound';
import RootLayout from './layouts/RootLayout';

// import './App.css'

function App() {
//   const [count, setCount] = useState(0)
//   const [profiles, setProfiles] = useState([]);

//   useEffect(() => {
//     setProfiles(data); // Set profiles from imported data
// }, []);
const menuItems = [
  {
    id: 1,
    label: "Home",
    url: "/",
    urlPattern: "/",
    element: <Home />,
  },
  {
    id: 2,
    label: "Laboratorium 1",
    url: "/lab1",
    urlPattern: "/lab1",
    element: <Lab1 />,
  },
  {
    id: 3,
    label: "Laboratorium 2",
    url: "/lab2/:id",
    urlPattern: "/lab2/:id",
    element: <Lab2 />,
  },
];


  return (
    <RootLayout items={menuItems}>
      <Routes>
        {menuItems.map(item => (
          <Route path={item.urlPattern} element={item.element} key={item.id} />
        ))}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </RootLayout>
  )
}

export default App
