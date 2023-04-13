import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/styles.css';
import { Outlet } from 'react-router-dom';
import Home from './Components/Home/landing';
import Layout from './Components/Admin/layout';
import InfoPage from './Components/Admin/infoPage';
import BurialDataTableFiltered from './Components/DataTables/burialDataTableFiltered';
import TextilesDataTableFilter from './Components/DataTables/textilesDataTableFiltered';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Children are added if the path matches up by default Home page is loaded
          They are slotted into the App Component */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/tools" element={<Layout />}>
            <Route path="/tools" element={<InfoPage />}></Route>
            <Route
              path="/tools/burialFilterTable"
              element={<BurialDataTableFiltered />}
            ></Route>
            <Route
              path="/tools/textilesDataTableFilter"
              element={<TextilesDataTableFilter />}
            ></Route>
          </Route>
          {/* <Route path="/Movies" element={<Movies />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
