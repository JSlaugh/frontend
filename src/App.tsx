import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/landing';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import InfoPage from './Components/Admin/infoPage';
import Layout from './Components/Admin/layout';
import BurialDataTableFiltered from './Components/DataTables/burialDataTableFiltered';
import TextilesDataTableFilter from './Components/DataTables/textilesDataTableFiltered';
import BurialView from './Components/ViewSingle/burialView';
import TextileView from './Components/ViewSingle/textileViewSingle';
import EditBurialSingle from './Crud2/editBurialSingle';
import EditTextileSingle from './Crud2/editTextileSingle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/styles.css';
import { param } from 'jquery';
import UsersDataTableFilter from './Components/DataTables/userDataTable';
function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
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
          <Route
            path="/tools/viewBurialSingle"
            element={<BurialView {...location} />}
          ></Route>
          <Route
            path="/tools/editBurialSingle"
            element={<EditBurialSingle {...location} />}
          ></Route>
          <Route
            path="/tools/viewTextileSingle"
            element={<TextileView {...location} />}
          ></Route>
          <Route
            path="/tools/editTextileSingle"
            element={<EditTextileSingle {...location} />}
          ></Route>
          <Route
            path="/tools/usersDataTableFilter"
            element={<UsersDataTableFilter />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
